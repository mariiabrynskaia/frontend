'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

import AccessoryCard from '../AccessoryCard';
import styles from './Accessory.module.scss';

export default function Accessory() {
    const [state, setState] = useState(0);

    return (
        <div className="container">
            <section className={styles.catalog}>

                
                <button onClick={() => setState(state - 1)}>-</button>
                <div>{state}</div>
                <button onClick={() => setState(state + 1)}>+</button>


                <h2 className={styles.catalogTitle}>ACCESSORY</h2>

                <div className={styles.catalogGrid}>
                    <AccessoryCard />
                    <AccessoryCard />
                    <AccessoryCard />
                    <AccessoryCard />
                    <AccessoryCard />
                    <AccessoryCard />
                    <AccessoryCard />
                    <AccessoryCard />
                    <AccessoryCard />
                </div>
            </section>
        </div>
    );
}