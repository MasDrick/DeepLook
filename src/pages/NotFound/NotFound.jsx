import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <img width={400} src="/img/404.jpg" alt="404" />
      {/* <h1 className="text-6xl font-bold text-black mb-4">404</h1> */}
      <h2 className="text-xl font-bold text-black mb-4">Ошибка 404. Нет такой страницы!</h2>
      <Button type="primary">
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
};

export default NotFound;
