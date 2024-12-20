import React, { useEffect, useState } from 'react';
import s from './sidebar.module.scss';
import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  ShieldAlert,
  Settings,
  ChartLine,
  CircleX,
  LogOut,
  CircleDollarSign,
} from 'lucide-react';

const SideBar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Обзор',
      icon: <LayoutDashboard size={20} />,
      link: '/',
    },
    {
      title: 'Мониторинг',
      icon: <ChartLine size={20} />,
      link: '/monitoring',
    },
    {
      title: 'Инциденты',
      icon: <ShieldAlert size={20} />,
      link: '/incidents',
    },
    {
      title: 'Тарифы',
      icon: <CircleDollarSign size={20} />,
      link: '/tariffs',
    },
    {
      title: 'Настройки',
      icon: <Settings size={20} />,
      link: '/settings',
    },
    {
      title: '404',
      icon: <CircleX size={20} />,
      link: '/asdfasdf',
    },
  ];

  const currentPath = location.pathname;
  const initialActiveIndex = menuItems.findIndex((item) => item.link === currentPath);
  const [active, setActive] = useState(initialActiveIndex);

  useEffect(() => {
    const currentIndex = menuItems.findIndex((item) => item.link === currentPath);
    if (currentIndex !== -1 && currentIndex !== active) {
      setActive(currentIndex);
    }
  }, [currentPath, active]);

  const handleTabClick = (index) => {
    setActive(index);
  };

  return (
    <div
      className={s.nav}
      id="hs-offcanvas-example"
      role="dialog"
      tabIndex={-1}
      aria-label="Sidebar">
      <div className="px-6 flex items-center">
        <img src="/img/logo.svg" alt="Logo" className="h-8 w-8 mr-3" />
        <Link
          className="font-semibold text-2xl focus:outline-none focus:opacity-80 text-white"
          to="/"
          aria-label="Brand"
          onClick={() => setActive(0)}>
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
                onClick={() => handleTabClick(i)}
                className={`${active === i ? s.active : ''} ${s.categories}`}
                to={item.link}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link className={s.categories} to="/login">
          Выйти
          <LogOut size={20} />
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
