'use client';

import Image from 'next/image';
import styles from './StatisticBanners.module.scss';
import RealLifeBanner from './RealLifeBanner';
import Features from './Features';

export default function FirstBlock() {
    return (
        <div className={styles.fullcontainer}>
        <div>
            <RealLifeBanner />
        </div>
        <div>
            <Features />
        </div>
        </div>
    );
}