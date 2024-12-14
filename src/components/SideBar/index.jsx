import React from 'react';
import s from './sidebar.module.scss';
import { useState } from 'react';
import { Link } from 'react-router';
import { AppstoreOutlined, LogoutOutlined } from '@ant-design/icons';

const SideBar = () => {
  const [active, setActive] = useState(0);
  const menuItems = [
    {
      title: 'Обзор',
      icon: <AppstoreOutlined style={{ fontSize: '20px', color: '#fff' }} />,
      link: '/',
    },
    {
      title: 'Мониторинг',
      icon: <img className="size-5" src="./img/monitoring.svg" alt="settings" />,
      link: '/monitoring',
    },
    {
      title: 'Тарифы',
      icon: <img className="size-5" src="./img/monitoring.svg" alt="settings" />,
      link: '/tariffs',
    },
    {
      title: 'Настройки',
      icon: <img className="size-5" src="./img/settings.svg" alt="settings" />,
      link: '/settings',
    },
  ];

  return (
    <div
      className={s.nav}
      id="hs-offcanvas-example"
      role="dialog"
      tabIndex={-1}
      aria-label="Sidebar">
      <div className="px-6">
        <Link
          className="font-semibold text-2xl text-center focus:outline-none focus:opacity-80 text-white"
          to="/"
          aria-label="Brand">
          DeepLook
        </Link>
      </div>
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap justify-between h-full mt-16"
        data-hs-accordion-always-open="">
        <ul className="space-y-1.5">
          {menuItems.map((item, i) => (
            <li key={item.title}>
              <Link
                onClick={() => setActive(i)}
                className={`${active === i ? s.active : ''} ${s.categories}`}
                to={item.link}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <a className={s.categories} href="#">
          <LogoutOutlined style={{ fontSize: '18px', color: '#fff' }} />
          Выйти
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
