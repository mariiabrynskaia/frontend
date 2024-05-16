import Image from 'next/image';
import { useState } from 'react';

import styles from './CatalogCard.module.scss';

export default function CatalogCard() {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                    fill
                    src="/assets/images/pizzas/01.png"
                    alt="pizza"
                />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDescName}>Название</span>
                <span className={styles.cardDescText}>Описание</span>

                <span className={styles.cardDescPrice}>599 руб.</span>

                <button className={styles.cardDescBuyBtn}>Заказать</button>

            </div>
        </div>
    );
}