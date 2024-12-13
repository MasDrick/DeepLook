import React from 'react';
import s from './sidebar.module.scss';
import { useState } from 'react';
import { Link } from 'react-router';

const SideBar = () => {
  const [active, setActive] = useState(0);
  const menuItems = [
    {
      title: 'Обзор',
      icon: <img className="size-4" src="./img/view.svg" alt="settings" />,
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
        <a
          className="font-semibold text-2xl text-center focus:outline-none focus:opacity-80 text-white"
          href="#"
          aria-label="Brand">
          DeepLook
        </a>
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
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Выйти
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
