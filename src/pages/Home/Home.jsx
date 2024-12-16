import React from 'react';
import Tracking from '../../components/Tracking';
import HomeTable from '../../components/HomeTable';
import { Empty } from 'antd';
import s from './home.module.scss';

const Home = () => {
  return (
    <div className={s.home}>
      <Tracking />
      <HomeTable />
    </div>
  );
};

export default Home;
