'use client';

import Image from 'next/image';

import styles from './Picture.module.scss';

export default function Picture() {
    return (
        <div className={`container ${styles.picture}`}>
            <div className={styles.logo}>
                <Image fill src="/assets/images/protective_gear_set.png" alt="protect" />
            </div>
        </div>
    );
}