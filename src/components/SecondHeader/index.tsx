'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

import CatalogCard from '../CatalogCard';
import styles from './SecondHeader.module.scss';
import { useCategoriesQuery } from '@/hooks/useCategoriesQuery';

export default function SecondHeader() {
    return (
        <footer className={styles.secondheader}>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.logo}>
                    <Image fill src="/assets/icons/logo-black.svg" alt="logo" />
                </div>
                <div className={styles.director}>
                    <Image src="/assets/images/director.png" alt="Director" width={100} height={100} />
                </div>
                <div className={styles.descriptionWrap}>
                        <div className={styles.descriptionName}>john smith</div>
                        <div className={styles.descriptionContact}>ask a question<br />to the director</div>
                </div>
            </div>
        </footer>
    );
}