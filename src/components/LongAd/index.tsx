'use client';

import React from 'react';
import styles from './LongAd.module.scss';
import Link from 'next/link';

const LongAd: React.FC = () => {
  return (
    <Link href="/payment">
      <div className={styles.longAdContainer}>
        <p className={styles.adText}>
          Free 1 day shipping within California</p>
      </div>
    </Link>
  );
};

export default LongAd;