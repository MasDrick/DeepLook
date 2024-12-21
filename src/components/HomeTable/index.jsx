import React from 'react';
import { Empty, Button, ConfigProvider, Table, Tag } from 'antd';
import { CircleArrowRight } from 'lucide-react';
import { Link } from 'react-router';

import { useAtom } from 'jotai';
import { activeTabAtom } from '../../atoms';
import { modalAtom } from '../../atoms';

import data from '../../dataIncident.json';

import s from './hometable.module.scss';

const HomeTable = () => {
  const [, setActive] = useAtom(activeTabAtom);
  const [, setOpen] = useAtom(modalAtom);

  const { Column } = Table;

  const lastFiveData = data.slice(-5);

  return (
    <div className={s.container}>
      <nav>
        <h1>Последние инциденты</h1>
        <button
          className={`flex items-center gap-2 rounded-lg ${s.customButton}`}
          onClick={() => setActive(2)}>
          <Link to="/incidents" className="flex items-center">
            Все инциденты
            <CircleArrowRight
              size={18}
              style={{ marginLeft: '7px', transition: 'transform 0.3s ease' }}
              className={s.circleArrow}
            />
          </Link>
        </button>
      </nav>
      <div className={s.table}>
        {lastFiveData.length > 0 ? (
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerBg: '#0068a8',
                  headerColor: '#fff',
                  headerBorderRadius: 0,
                  rowHoverBg: '#e6f0f6',
                  headerSortActiveBg: '#0068a8',
                  headerSortHoverBg: '#0076c0',
                },
              },
            }}>
            <Table
              dataSource={lastFiveData}
              pagination={false}
              className={s.table}
              style={{ flexGrow: 1 }}>
              <Column
                title="Статус"
                dataIndex="status"
                key="status"
                showSorterTooltip={false}
                render={(tag) => {
                  const [status, color] = tag;
                  return (
                    <Tag color={color} key={status}>
                      {status.toUpperCase()}
                    </Tag>
                  );
                }}
              />
              <Column title="Монитор" dataIndex="name" key="name" showSorterTooltip={false} />
              <Column title="Причина" dataIndex="reason" key="reason" showSorterTooltip={false} />
              <Column title="Начало" dataIndex="first" key="first" showSorterTooltip={false} />
              <Column
                title="Длительность"
                dataIndex="duration"
                key="duration"
                showSorterTooltip={false}
              />
            </Table>
          </ConfigProvider>
        ) : (
          <div className={`${s.empty} w-full h-full`}>
            <Empty description="">
              <p className="text-white text-center font-medium uppercase mb-4">Нет данных</p>
              <Button onClick={() => setOpen(true)} size="medium" type="primary">
                Создать
              </Button>
            </Empty>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTable;
