import React, { useState, useEffect } from 'react';
import { Form, Input, Slider, Collapse, Button } from 'antd';
import { atom, useAtom } from 'jotai';
import s from './addUrl.module.scss';

const { Panel } = Collapse;

// Создаем атомы для хранения значений формы
export const urlAtom = atom('');
export const shortNameAtom = atom('');
export const intervalAtom = atom('10');

const AddUrl = ({ onFormValidityChange }) => {
  const [url, setUrl] = useAtom(urlAtom);
  const [shortName, setShortName] = useAtom(shortNameAtom);
  const [interval, setInterval] = useAtom(intervalAtom);
  const [time, setTime] = useState(' мин');

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
      setTime(' ч');
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
      setTime(' мин');
      setInterval(value.toString());
    }
  };

  const handleSubmit = () => {
    console.log('URL:', url);
    console.log('Short Name:', shortName);
    console.log('Interval:', interval);
  };

  useEffect(() => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator
    const isValid = urlPattern.test(url) && shortName.trim() !== '' && interval !== '';
    onFormValidityChange(isValid);
  }, [url, shortName, interval, onFormValidityChange]);

  return (
    <div>
      <Form
        name="urlForm"
        layout="vertical"
        initialValues={{
          timepicker: 10,
        }}
        onFinish={handleSubmit}>
        <Form.Item
          name="url"
          label="URL сайта"
          style={{ marginBottom: 10 }}
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите URL',
            },
            {
              type: 'url',
              message: 'Пожалуйста, введите корректный URL',
            },
          ]}>
          <Input
            placeholder="https://example.com"
            size="large"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="shortName" label="Короткое название" style={{ marginBottom: 10 }}>
          <Input
            placeholder="Короткое название"
            size="large"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
          />
        </Form.Item>

        <h4>
          Интервал проверки: {interval}
          {time}
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
      </Form>
    </div>
  );
};

export default AddUrl;
