import React from 'react';
import { Empty, Button, ConfigProvider, Table, Tag } from 'antd';
import { CircleArrowRight } from 'lucide-react';
import { Link } from 'react-router';

import data from '../../dataTable.json';

import s from '../HomeTable/hometable.module.scss';

const index = () => {
  const [tableData, setTableData] = React.useState(data);

  const handleDelete = (key) => {
    setTableData((prevData) => prevData.filter((item) => item.key !== key));
  };

  const filteredData = tableData.filter((item) => item.favorite);

  const { Column } = Table;

  return (
    <div className={`${s.container} w-full h-full`}>
      <nav>
        <h1>Избранные мониторы</h1>
        <button className={`flex items-center gap-2 rounded-lg ${s.customButton}`}>
          <Link to="/monitoring" className="flex items-center">
            Все мониторы
            <CircleArrowRight
              size={18}
              style={{ marginLeft: '7px', transition: 'transform 0.3s ease' }}
              className={s.circleArrow}
            />
          </Link>
        </button>
      </nav>
      <div className={s.table}>
        {filteredData.length > 0 ? (
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
              dataSource={filteredData}
              pagination={false}
              className={s.table}
              style={{ flexGrow: 1 }}>
              <Column title="Название" dataIndex="name" key="name" showSorterTooltip={false} />
              <Column title="URL" dataIndex="URL" key="URL" showSorterTooltip={false} />
              <Column title="Интервал, мин" dataIndex="time" key="time" showSorterTooltip={false} />
              <Column
                title="Состояние"
                dataIndex="tag"
                key="tag"
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
              <Column
                title="Последний результат"
                dataIndex="lastResult"
                key="res"
                showSorterTooltip={false}
                render={(lastResult) => {
                  const [result, color] = lastResult;
                  return (
                    <Tag color={color} key={result}>
                      {result}
                    </Tag>
                  );
                }}
              />
              <Column title="SSL годен до" dataIndex="SSL" key="SSL" showSorterTooltip={false} />
              <Column
                title="Домен зарегистрирован до"
                dataIndex="domain"
                key="domain"
                showSorterTooltip={false}
              />
              <Column
                title="Действия"
                key="actions"
                render={(_, record) => (
                  <Button onClick={() => handleDelete(record.key)} danger type="text">
                    Удалить
                  </Button>
                )}
              />
            </Table>
          </ConfigProvider>
        ) : (
          <div className={`${s.empty} w-full h-full`}>
            <Empty description="">
              <p className="text-white text-center font-medium uppercase mb-4">Нет данных</p>
            </Empty>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
