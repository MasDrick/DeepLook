import React from 'react';
import Tracking from '../../components/Tracking';
import HomeTable from '../../components/HomeTable';
import Favourite from '../../components/Favourite';
import { Empty } from 'antd';
import s from './home.module.scss';

const Home = () => {
  React.useEffect(() => {
    document.title = 'DeepLook';
  }, []);
  return (
    <div className={s.home}>
      <div className={s.homeContainer}>
        <div className={s.tracking}>
          <Tracking />
        </div>
        <div className={s.homeTable}>
          <HomeTable />
        </div>
      </div>
      <div className={s.favourite}>
        <Favourite />
      </div>
    </div>
  );
};

export default Home;
