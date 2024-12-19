import React from 'react';
import { ConfigProvider, Table, Tag } from 'antd';
import { useNavigate } from 'react-router';
import { ArrowDownUp } from 'lucide-react';
import data from '../../dataTable.json';
import s from './monitorTable.module.scss';

const { Column } = Table;

const MonitorTable = () => {
  const navigate = useNavigate();

  const handleRowClick = (record) => {
    navigate(`/details/${record.key}`);
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
            // bodySortBg: '#eee',
            headerSortActiveBg: '#0068a8',
            headerSortHoverBg: '#0076c0',
          },
        },
      }}>
      <Table
        dataSource={data}
        pagination={false}
        className={s.table}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}>
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
          sorter={(a, b) => new Date(a.SSL) - new Date(b.SSL)}
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
          sorter={(a, b) => new Date(a.domain) - new Date(b.domain)}
          sortIcon={({ sortOrder }) => (
            <ArrowDownUp
              size={16}
              style={{ color: sortOrder ? '#b0d0e4' : 'rgba(0, 0, 0, 0.29)' }}
            />
          )}
          showSorterTooltip={false}
        />
      </Table>
    </ConfigProvider>
  );
};

export default MonitorTable;
