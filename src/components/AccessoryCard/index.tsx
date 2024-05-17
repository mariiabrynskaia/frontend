import Image from 'next/image';
import { useState } from 'react';

import styles from './AccessoryCard.module.scss';

export default function CatalogCard() {

    return (
        <div className={styles.card}>
            <div className={styles.circle}></div>
            <div className={styles.cardImage}>
                <Image
                    src="/assets/images/accessories/backpack.png"
                    alt="backpack"
                    width={99}
                    height={144}
                />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDescName}>Name</span>
                <span className={styles.cardDescText}>Description</span>

                <span className={styles.cardDescPrice}>$29.99</span>

                <button className={styles.cardDescBuyBtn}>Add to cart</button>

            </div>
        </div>
    );
}