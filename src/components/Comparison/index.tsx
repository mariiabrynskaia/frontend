'use client';

import React, { useState } from 'react';
import ComparisonCardOne from './ComparisonCardOne';
import styles from './Comparison.module.scss';

const scooterIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Comparison = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.ComparisonContainer}>
      <div
        className={styles.CardContainer}
        style={{ transform: `translateX(-${activeIndex * (188 + 60)}px)` }}
      >
        {scooterIds.map((id) => (
          <ComparisonCardOne key={id} id={id} />
        ))}
      </div>
      <div className={styles.CircleIndicatorContainer}>
        {scooterIds.slice(0, 6).map((_, index) => (
          <div
            key={index}
            className={`${styles.CircleIndicator} ${
              index === activeIndex ? styles.active : ''
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Comparison;






