import React, { useState } from 'react';
import IncidentTable from '../../components/IncidentTable';
import s from '../Monitoring/monitoring.module.scss';
import { Empty, Button } from 'antd';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, RefreshCw } from 'lucide-react';

const Incidents = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isData = true;
  const navigate = useNavigate();

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Симуляция обновления данных
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <button className="flex items-center gap-2" onClick={() => navigate(-1)}>
          <ArrowLeft /> Назад
        </button>
        <h1 className="text-2xl font-bold text-white">Все инциденты</h1>

        <RefreshCw
          className={`cursor-pointer ${isRefreshing ? s.refreshIcon : ''}`}
          onClick={handleRefresh}
        />
      </div>
      {isData ? (
        <IncidentTable />
      ) : (
        <div className={s.emptyContainer}>
          <div className={`${s.empty} w-3/5 h-3/5`}>
            <Empty description="">
              <p className="text-white text-center font-medium uppercase mb-4">Нет данных</p>
              <Button size="medium" type="primary">
                <Link to="/">На главную</Link>
              </Button>
            </Empty>
          </div>
        </div>
      )}
    </div>
  );
};

export default Incidents;
