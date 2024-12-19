import React from 'react';
import Tracking from '../../components/Tracking';
import HomeTable from '../../components/HomeTable';
import { Empty } from 'antd';
import s from './home.module.scss';

const Home = () => {
  React.useEffect(() => {
    document.title = 'DeepLook';
  }, []);
  return (
    <div className={s.home}>
      <Tracking />
      <HomeTable />
    </div>
  );
};

export default Home;
