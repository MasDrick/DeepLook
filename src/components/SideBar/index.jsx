import React from 'react';
import s from './sidebar.module.scss';
import { Button } from '@material-tailwind/react';

const SideBar = () => {
  return (
    <div className={s.nav}>
      <div className={s.logo}>
        <img src="#" alt="Logo" />
        <h1 className={s.title}>DeepLook</h1>
      </div>
      <Button>Button</Button>
    </div>
  );
};

export default SideBar;
