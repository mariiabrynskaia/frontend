import Image from 'next/image';
import { useState } from 'react';

import styles from './CatalogCard.module.scss';

export default function CatalogCard() {

    return (
        <div className={styles.card}>
                <div className={styles.cardImage}>
                    <Image
                        fill
                        src="/assets/images/scooters/01.png"
                        alt="scooter"
                    />
                </div>
                    <span className={styles.cardName}>KS E22</span>
            </div>
    );
}