'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

import CatalogCard from '../CatalogCard';
import styles from './Catalog.module.scss';
import { useCategoriesQuery } from '@/hooks/useCategoriesQuery';

export default function Catalog() {
    return (
        <div className="catalog">
            <section className={styles.catalog}>
                <div className={styles.catalogGrid}>
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </section>
        </div>
    );
}