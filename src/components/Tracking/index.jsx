import React from 'react';
import AddUrl from '../AddUrl';
import s from './tracking.module.scss';
import { Button, Modal } from 'antd';

const Tracking = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={s.container}>
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
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}>
        <div className={s.wrapper}>
          <AddUrl />
        </div>
      </Modal>
      <section>
        <div className={s.card}>
          <h2>URL</h2>
          <p>Статус</p>
        </div>
      </section>
      <footer>
        <Button type="primary">Button</Button>
      </footer>
    </div>
  );
};

export default Tracking;
