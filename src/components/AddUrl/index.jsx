import React from 'react';
import { Form, Input, Slider, Collapse } from 'antd';
import s from './addUrl.module.scss';

const { Panel } = Collapse;

const AddUrl = () => {
  const [interval, setInterval] = React.useState('10');
  const [time, setTime] = React.useState(', мин');

  const marks = {
    1: '1 м',
    10: '10 м',
    30: '30 м',
    60: '1 ч',
    75: '6 ч',
    90: '12 ч',
    105: '18 ч',
    120: '24ч',
  };

  const handleSliderChange = (value) => {
    if (value >= 60) {
      setTime(', ч');
      if (value == 60) {
        setInterval('1');
      } else if (value == 75) {
        setInterval('6');
      } else if (value == 90) {
        setInterval('12');
      } else if (value == 105) {
        setInterval('18');
      } else if (value == 120) {
        setInterval('24');
      }
    } else {
      setTime(', мин');
      setInterval(value);
    }
  };

  return (
    <div>
      <Form
        name="urlForm"
        layout="vertical"
        initialValues={{
          timepicker: 10,
        }}
        onFinish={(values) => {
          console.log('Submitted URL:', values);
          setOpen(false);
        }}>
        <Form.Item
          name="url"
          label="URL сайта"
          style={{ marginBottom: 10 }}
          rules={[
            {
              required: false,
              message: 'Пожалуйста, введите URL',
            },
            {
              type: 'url',
              message: 'Пожалуйста, введите корректный URL',
            },
          ]}>
          <Input placeholder="https://example.com" size="large" />
        </Form.Item>
        <Form.Item name="shortName" label="Короткое название" style={{ marginBottom: 10 }}>
          <Input placeholder="Короткое название" size="large" />
        </Form.Item>

        <h4>
          Интервал проверки: {interval}
          {time.replace(', ', ' ')}
        </h4>
        <Form.Item name="timepicker" style={{ marginBottom: 10 }}>
          <Slider
            marks={marks}
            min={1}
            max={120}
            step={1}
            onChange={handleSliderChange}
            tooltip={{ formatter: null }}
          />
        </Form.Item>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Уведомления" key="1">
            <h1>Да есть же</h1>
            <p>Содержимое первой секции</p>
          </Panel>
          <Panel header="Расширенные настройки" key="2">
            <img
              src="https://img-webcalypt.ru/storage/memes/44376/202412/Ix5ECz7SooSkcHNnGyXc5RxWySkNWqJDrC5smz9VS3OvD1Zb2Cftip4oqzhl4QdbJLIR76edebjj1poyh0twdOkgNIxD8UlQL7aHeTk9ucHgq5O6tZ4eY69iyavm03nh-md.jpeg"
              alt=""
            />
          </Panel>
        </Collapse>
      </Form>
    </div>
  );
};

export default AddUrl;