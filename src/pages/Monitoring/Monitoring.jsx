import React, { useState } from 'react';
import s from './monitoring.module.scss';
import MonitorTable from '../../components/MonitorTable';
import AddUrl from '../../components/AddUrl';
import { Empty, Button } from 'antd';

const Monitoring = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1 className="text-2xl font-bold text-white">Мониторинг сайтов</h1>

        <div className={s.management}>
          <button
            onClick={() => setOpen(true)}
            className={`flex items-center gap-2 rounded-lg ${s.customButton}`}>
            Добавить URL
            <img src="/img/add.svg" alt="add" />
          </button>
        </div>
      </div>

      {isLoading ? (
        <MonitorTable />
      ) : (
        <div className={s.emptyContainer}>
          <div className={`${s.empty} w-3/5 h-3/5`}>
            <Empty description="">
              <p className="text-white text-center font-medium uppercase mb-4">Нет данных</p>
              <Button onClick={() => setIsLoading(!isLoading)} size="medium" type="primary">
                Создать
              </Button>
            </Empty>
          </div>
        </div>
      )}
    </div>
  );
};

export default Monitoring;
