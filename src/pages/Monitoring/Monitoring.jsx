import React, { useState } from 'react';
import s from './monitoring.module.scss';
import MonitorTable from '../../components/MonitorTable';
import AddUrl, { urlAtom, shortNameAtom, intervalAtom } from '../../components/AddUrl';
import { modalAtom } from '../../atoms';
import { Empty, Button, Modal, message } from 'antd';
import { useAtom } from 'jotai';

const Monitoring = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useAtom(modalAtom);
  const [isFormValid, setIsFormValid] = useState(false);
  const [url, setUrl] = useAtom(urlAtom);
  const [shortName, setShortName] = useAtom(shortNameAtom);
  const [interval, setInterval] = useAtom(intervalAtom);
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

  return (
    <div className={s.container}>
      {contextHolder}
      <div className={s.header}>
        <h1 className="text-2xl font-bold text-white">Мониторинг сайтов</h1>

        <div className={s.management}>
          <button
            onClick={() => setOpen(true)}
            className={`flex items-center gap-2 rounded-lg ${s.customButton}`}>
            Добавить URL
            <img src="/img/add.svg" alt="add" />
          </button>
        </div>
      </div>

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

      {isLoading ? (
        <MonitorTable />
      ) : (
        <div className={s.emptyContainer}>
          <div className={`${s.empty} w-3/5 h-3/5`}>
            <Empty description="">
              <p className="text-white text-center font-medium uppercase mb-4">Нет данных</p>
              <Button onClick={() => setIsLoading(!isLoading)} size="medium" type="primary">
                Создать
              </Button>
            </Empty>
          </div>
        </div>
      )}
    </div>
  );
};

export default Monitoring;
