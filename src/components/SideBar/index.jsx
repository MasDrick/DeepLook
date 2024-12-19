import React from 'react';
import { useLocation } from 'react-router';
import s from './sidebar.module.scss';
import { Link } from 'react-router';
import { LayoutDashboard, ShieldAlert, Settings, ChartLine, CircleX, LogOut } from 'lucide-react';
import { useAtom } from 'jotai';
import { activeTabAtom } from '../../atoms';

const SideBar = () => {
  const location = useLocation();
  const [, setActive] = useAtom(activeTabAtom);

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

  const activeIndex = menuItems.findIndex((item) => item.link === location.pathname);

  return (
    <div
      className={s.nav}
      id="hs-offcanvas-example"
      role="dialog"
      tabIndex={-1}
      aria-label="Sidebar">
      <div className="px-6">
        <Link
          className="flex items-center gap-2 font-semibold text-2xl text-center focus:outline-none focus:opacity-80 text-white"
          to="/"
          aria-label="Brand"
          onClick={() => setActive(0)}>
          <img width={40} src="/img/Logo.svg" alt="logo" />
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
                className={`${activeIndex === i ? s.active : ''} ${s.categories}`}
                to={item.link}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className={s.categories}
          to="/login"
          onClick={() => {
            localStorage.setItem('isAuthenticated', 'false');
          }}>
          Выйти
          <LogOut size={20} />
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
