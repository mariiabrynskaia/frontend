'use client';

import React from 'react';
import styles from './LongAd.module.scss';

const LongAd: React.FC = () => {
  return (
    <div className={styles.longAdContainer}>
      <p className={styles.adText}>Free 1 day shipping within California</p>
    </div>
  );
};

export default LongAd;