import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import DetailsTable from '../../components/DetailsTable';
import s from '../Monitoring/monitoring.module.scss';
import { ArrowLeft, RefreshCw } from 'lucide-react';

const Details = () => {
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
        <h1 className="text-2xl font-bold text-white">Детали Ютуб</h1>

        <RefreshCw
          className={`cursor-pointer ${isRefreshing ? s.refreshIcon : ''}`}
          onClick={handleRefresh}
        />
      </div>

      <DetailsTable />
    </div>
  );
};

export default Details;
