import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Checkbox } from 'antd';
import { useAtom } from 'jotai';
import { isAuthenticatedAtom } from '../../atoms';
import { Link, useNavigate } from 'react-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Eye, EyeClosed } from 'lucide-react';

import s from './login.module.scss';

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    document.title = 'Авторизация';

    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData && savedData.rememberMe) {
      setValue('username', savedData.username || '');
      setValue('password', savedData.password || '');
    }
  }, [setValue]);

  const onSubmit = (data) => {
    console.log('Received values of form: ', data);
    console.log('Form is valid:', isValid);
    console.log('Remember me:', remember);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');

    localStorage.setItem(
      'userData',
      JSON.stringify({
        username: data.username,
        password: data.password,
        rememberMe: remember,
      }),
    );
    console.log(remember ? 'Данные сохранены в localStorage' : 'Данные удалены из localStorage');

    navigate('/'); // Перенаправление на главную страницу
  };

  return (
    <div className={s.wrapper}>
      <div className="w-[400px] min-w-[340px] mx-auto p-8 border rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Вход</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <UserOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="username"
                type="text"
                {...register('username', { required: 'Пожалуйста, введите имя пользователя!' })}
                className={`w-full pl-9 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${
                  errors.username ? 'border-red-500 focus:border-red-500' : ''
                }`}
                placeholder="Имя пользователя"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
            )}
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <LockOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: 'Пожалуйста, введите пароль!' })}
                className={`w-full pl-9 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${
                  errors.password ? 'border-red-500 focus:border-red-500' : ''
                }`}
                placeholder="Пароль"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400">
                {showPassword ? <EyeClosed size={16} /> : <Eye size={16} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Checkbox
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="text-gray-700">
              Запомнить меня
            </Checkbox>
            <a className="text-sm text-blue-500 hover:underline" href="">
              Забыли пароль?
            </a>
          </div>
          <div>
            <Button type="primary" htmlType="submit" className="w-full py-2" disabled={!isValid}>
              Войти
            </Button>
            <p className="text-center text-sm text-gray-700 mt-4">
              Еще нет аккаунта?{' '}
              <Link to="/register" className="text-blue-500 hover:underline">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
