'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.wrapper}`}>
                <Link href="/" className={styles.logo}>
                    <Image fill src="/assets/icons/logo-invert.svg" alt="logo" />
                </Link>
                <div className={styles.phone}>
                    <a href="tel:+79184326587">+7 (918) 432-65-87</a>
                    <span>Ежедневно с&nbsp;9:00 до&nbsp;23:00</span>
                </div>
                <Link href="/" className={styles.confidencial}>
                    Политика конфиденциальности
                </Link>
            </div>
        </footer>
    );
}