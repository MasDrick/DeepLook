import React from 'react';
import { Check, Crown, Rocket, Star, Brain } from 'lucide-react';
import styles from './tarifs.module.scss';
import { Link } from 'react-router';


const Tarifs = ({ currentTariff = 1 }) => {
  const tariffData = [
    {
      id: 1,
      title: 'Все для начала',
      price: '1500 ₽',
      period: 'в месяц',
      icon: Star,
      benefits: [
        'Отслеживание 5 доменов',
        'Минимальная частота обновления 20 минут',
        'Доступ к минимальной общей статистике',
        'Тех.Поддержка с 10.00 до 22.00 по Москве'
      ],
    },
    {
      id: 2,
      title: 'Продвинутый',
      price: '4000 ₽',
      period: 'в месяц',
      icon: Rocket,
      benefits: [
        'Отслеживание 10 доменов',
        'Минимальная частота обновления 10 минут',
        'Доступ ко всей статистике',
        'Тех.Поддержка с 6.00 до 1.00 по Москве'
      ],
    },
    {
      id: 3,
      title: 'Профессионал',
      price: '6000 ₽',
      period: 'в месяц',
      icon: Brain,
      benefits: [
        'Отслеживание 25 доменов',
        'Минимальная частота обновления 5 минут',
        'Доступ ко всей статистике',
        'Тех.Поддержка 24 на 7 '
      ],
    },
    {
      id: 4,
      title: 'Корпоративный',
      price: '10000 ₽',
      period: 'в месяц',
      icon: Crown,
      benefits: [
        'Отслеживание неограниченного количества доменов',
        'Минимальная частота обновления 5 минут',
        'Доступ ко всей статистике',
        'Тех.Поддержка 24 на 7'
      ],
    },
  ];

  const handleTariffSelect = (tariffId) => {
    if (tariffId !== currentTariff) {
      console.log(`Переход к оплате тарифа ${tariffId}`);
    }

  };
  return (
    <div className={styles.tariffsContainer}>
      {tariffData.map((tariff) => {
        const isActive = currentTariff === tariff.id;
        const Icon = tariff.icon;
        
        return (
          <div
            key={tariff.id}
            className={`${styles.tariffCard} ${isActive ? styles.activeTariff : ''}`}
          >
            {isActive && (
              <div className={styles.activeOverlay}>
                <div className={styles.activeBadge}>
                  <Check size={16} />
                  <span>Активен</span>
                </div>
              </div>
            )}
            
            <div className={styles.tariffHeader}>
              <Icon className={styles.tariffIcon} />
              <h3>{tariff.title}</h3>
              <div className={styles.priceBlock}>
                <span className={styles.price}>{tariff.price}</span>
                <span className={styles.period}>{tariff.period}</span>
              </div>
            </div>
            
            <div className={styles.tariffMain}>
              <ul>
                {tariff.benefits.map((benefit, index) => (
                  <li key={index}>
                    <Check className={styles.checkIcon} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.tariffFooter}>
              <button
                onClick={() => handleTariffSelect(tariff.id)}
                className={`${styles.buyButton} ${isActive ? styles.activeButton : ''}`}
              >
                {isActive ? 'Текущий тариф' : 'Выбрать тариф'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tarifs;