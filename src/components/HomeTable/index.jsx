import React from 'react';
import { Empty, Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';

import { Link } from 'react-router';

import { useAtom } from 'jotai';
import { activeTabAtom } from '../../atoms';

import s from './hometable.module.scss';

const HomeTable = () => {
  const [, setActive] = useAtom(activeTabAtom);

  return (
    <div className={s.container}>
      <nav>
        <h1>Последние инциденты</h1>
        <button
          className={`flex items-center gap-2 rounded-lg ${s.customButton}`}
          onClick={() => setActive(2)}>
          <Link to="/incidents">
            Все инциденты
            <RightCircleOutlined style={{ marginLeft: '10px' }} />
          </Link>
        </button>
      </nav>
      <div className={s.table}>
        <Empty description="">
          <p className="text-white text-center font-medium uppercase mb-4">Нет данных</p>
          <Button size="medium" type="primary">
            Создать
          </Button>
        </Empty>
      </div>
    </div>
  );
};

export default HomeTable;
