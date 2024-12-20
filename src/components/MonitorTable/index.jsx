import React from 'react';
import { ConfigProvider, Table, Tag, Button, Empty } from 'antd';
import { useNavigate } from 'react-router';
import { ArrowDownUp } from 'lucide-react';
import data from '../../dataTable.json';
import s from '../../pages/Monitoring/monitoring.module.scss';
import { Link } from 'react-router';

const { Column } = Table;

const MonitorTable = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = React.useState(data);

  const handleDelete = (key) => {
    setTableData((prevData) => prevData.filter((item) => item.key !== key));
  };

  return (
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
      {tableData.length === 0 ? (
        <div className={s.emptyContainer}>
          <div className={`${s.empty} w-3/5 h-3/5`}>
            <Empty description="">
              <p className="text-white text-center font-medium uppercase mb-4">Нет данных</p>
              <Link to="/">
                <Button size="medium" type="primary">
                  На главную
                </Button>
              </Link>
            </Empty>
          </div>
        </div>
      ) : (
        <Table dataSource={tableData} pagination={false} className={s.table}>
          <Column
            title="Название"
            dataIndex="name"
            key="name"
            sorter={(a, b) => a.name.localeCompare(b.name)}
            sortIcon={({ sortOrder }) => (
              <ArrowDownUp
                size={16}
                style={{ color: sortOrder ? '#b0d0e4' : 'rgba(0, 0, 0, 0.29)' }}
              />
            )}
            showSorterTooltip={false}
          />
          <Column
            title="URL"
            dataIndex="URL"
            key="URL"
            sorter={(a, b) => a.URL.localeCompare(b.URL)}
            sortIcon={({ sortOrder }) => (
              <ArrowDownUp
                size={16}
                style={{ color: sortOrder ? '#b0d0e4' : 'rgba(0, 0, 0, 0.29)' }}
              />
            )}
            showSorterTooltip={false}
          />
          <Column
            title="Интервал, мин"
            dataIndex="time"
            key="time"
            sorter={(a, b) => a.time - b.time}
            sortIcon={({ sortOrder }) => (
              <ArrowDownUp
                size={16}
                style={{ color: sortOrder ? '#b0d0e4' : 'rgba(0, 0, 0, 0.29)' }}
              />
            )}
            showSorterTooltip={false}
          />
          <Column
            title="Состояние"
            dataIndex="tag"
            key="tag"
            sorter={(a, b) => a.tag[0].localeCompare(b.tag[0])}
            sortIcon={({ sortOrder }) => (
              <ArrowDownUp
                size={16}
                style={{ color: sortOrder ? '#b0d0e4' : 'rgba(0, 0, 0, 0.29)' }}
              />
            )}
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
            sorter={(a, b) => a.lastResult[0].localeCompare(b.lastResult[0])}
            sortIcon={({ sortOrder }) => (
              <ArrowDownUp
                size={16}
                style={{ color: sortOrder ? '#b0d0e4' : 'rgba(0, 0, 0, 0.29)' }}
              />
            )}
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
          <Column
            title="SSL годен до"
            dataIndex="SSL"
            key="SSL"
            sorter={(a, b) => {
              const dateA = new Date(a.SSL.split('.').reverse().join('-'));
              const dateB = new Date(b.SSL.split('.').reverse().join('-'));
              return dateA - dateB;
            }}
            sortIcon={({ sortOrder }) => (
              <ArrowDownUp
                size={16}
                style={{ color: sortOrder ? '#b0d0e4' : 'rgba(0, 0, 0, 0.29)' }}
              />
            )}
            showSorterTooltip={false}
          />
          <Column
            title="Домен зарегистрирован до"
            dataIndex="domain"
            key="domain"
            sorter={(a, b) => {
              const dateA = new Date(a.domain.split('.').reverse().join('-'));
              const dateB = new Date(b.domain.split('.').reverse().join('-'));
              return dateA - dateB;
            }}
            sortIcon={({ sortOrder }) => (
              <ArrowDownUp
                size={16}
                style={{ color: sortOrder ? '#b0d0e4' : 'rgba(0, 0, 0, 0.29)' }}
              />
            )}
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
      )}
    </ConfigProvider>
  );
};

export default MonitorTable;
