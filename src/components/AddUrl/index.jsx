import React from 'react';
import { Form, Input } from 'antd';
import s from './addUrl.module.scss';

const AddUrl = () => {
  return (
    <div>
      <Form
        name="urlForm"
        layout="vertical"
        onFinish={(values) => {
          console.log('Submitted URL:', values);
          setOpen(false);
        }}>
        <Form.Item
          name="url"
          label="URL сайта"
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
      </Form>
    </div>
  );
};

export default AddUrl;
