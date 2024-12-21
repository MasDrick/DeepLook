import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

import s from '../Login/login.module.scss';

const ForgotPass = () => {
  const [notice, setNotice] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.title = 'Восстановление доступа';
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <div className={s.logo}>
          <img src="/img/logo.svg" alt="Logo" />
          <span>DeepLook</span>
        </div>
        {notice ? (
          <div className="w-[400px] min-w-[340px] mx-auto p-8 border rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-bold text-center text-black">Восстановление доступа</h2>
            <p className="text-sm text-gray-700 mt-4 mb-5">
              На указанную почту {email} отправлено письмо с ссылкой для восстановления доступа
            </p>
            <Link to="/login" className="text-blue-500 hover:underline">
              <Button type="primary" htmlType="submit" className="w-full py-2">
                Продолжить
              </Button>
            </Link>
          </div>
        ) : (
          <div className="w-[400px] min-w-[340px] mx-auto p-8 border rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Восстановление доступа
            </h2>
            <form onSubmit={handleSubmit(() => {})} className="space-y-6">
              <div className="w-full max-w-sm min-w-[200px]">
                <div className="relative">
                  <MailOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Пожалуйста, введите почту!',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Пожалуйста, введите корректный адрес электронной почты!',
                      },
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-9 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${
                      errors.email ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="Почта"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Button
                  onClick={() => setNotice(true)}
                  type="primary"
                  htmlType="submit"
                  className="w-full py-2"
                  disabled={!isValid}>
                  Сбросить пароль
                </Button>
              </div>
            </form>
            <p className="text-center text-sm text-gray-700 mt-4">
              Вспомнили пароль?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Войти
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPass;
