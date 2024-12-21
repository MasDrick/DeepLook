import React, { useState } from 'react';
import AddUrl, { urlAtom, shortNameAtom, intervalAtom } from '../AddUrl';
import s from './tracking.module.scss';
import { Button, Modal, message, Progress, ConfigProvider } from 'antd';
import { atom, useAtom } from 'jotai';
import { modalAtom } from '../../atoms';
import { Link } from 'react-router';
// Создаем атом для хранения состояния модального окна

const green = '#73d13d';
const red = '#ff4d4f';
const yellow = '#ffec3d';

const Tracking = () => {
  const [open, setOpen] = useAtom(modalAtom);
  const [url, setUrl] = useAtom(urlAtom);
  const [shortName, setShortName] = useAtom(shortNameAtom);
  const [interval, setInterval] = useAtom(intervalAtom);
  const [isFormValid, setIsFormValid] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const handleAddClick = () => {
    console.log('URL:', url);
    console.log('Короткое название:', shortName);
    console.log('Интервал проверки:', interval);

    setUrl('');
    setShortName('');
    setInterval('');

    setOpen(false);
    messageApi.open({
      type: 'success',
      content: 'Успешно добавлено',
    });
  };

  const twoGreen = {
    '0%': '#52c41a',
    '100%': '#95de64',
  };

  const twoRed = {
    '0%': '#ff4d4f',
    '20%': '#ff7875',
    '100%': '#ff7875',
  };

  return (
    <div className={s.container}>
      {contextHolder}
      <header>
        <h1>Мониторинг</h1>
        <button
          onClick={() => setOpen(true)}
          className={`flex items-center gap-2 rounded-lg ${s.customButton}`}>
          Добавить URL
          <img src="/img/add.svg" alt="add" />
        </button>
      </header>
      <Modal
        width={800}
        title="Добавить сайт для мониторинга"
        centered
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}>
        <div className={s.wrapper}>
          <AddUrl onFormValidityChange={setIsFormValid} />
        </div>
        <Button
          disabled={!isFormValid}
          style={{ width: '100%', marginTop: '10px' }}
          type="primary"
          onClick={handleAddClick}>
          Добавить
        </Button>
      </Modal>
      <section>
        <div className={s.card}>
          <ConfigProvider
            theme={{
              components: {
                Progress: {
                  circleTextFontSize: '2.5rem',
                  circleTextColor: '#fff',
                  defaultColor: green,
                  colorBgContainer: '#fff',
                },
              },
            }}>
            <div className={s.progress}>
              <Link to="/monitoring">
                <Progress
                  size={150}
                  strokeWidth={8}
                  type="dashboard"
                  percent={90}
                  strokeColor={twoGreen}
                />
              </Link>

              <p>Исправные</p>
            </div>
            <div className={s.progress}>
              <Link to="/incidents">
                <Progress
                  size={150}
                  strokeWidth={8}
                  type="dashboard"
                  percent={10}
                  strokeColor={twoRed}
                  format={() => '2'}
                />
              </Link>
              <p>Проблемы</p>
            </div>
          </ConfigProvider>
        </div>
      </section>
      <div className={s.footer}>
        <div className={s.access}>
          <h2>Доступность</h2>
          <div className={s.statistics}>
            <div className={s.day}>
              <h3 style={{ color: green }}>100%</h3>
              <p>24 часа</p>
            </div>
            <div className={s.week}>
              <h3 style={{ color: yellow }}>95.8%</h3>
              <p>7 дней</p>
            </div>
            <div className={s.month}>
              <h3 style={{ color: red }}>52.72%</h3>
              <p>Месяц</p>
            </div>
          </div>
        </div>
        <div className={s.suspended}>
          <h2>Приостановлены</h2>
          <div className={s.pause}>
            <p>Выключить мониторинг</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
