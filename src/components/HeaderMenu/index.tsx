'use client';

import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
    return (
        <nav className={styles.nav}>

            <div className={styles.navList}>
                <div className={styles.navListItem}>
                    <Link href="#">reviews</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="/payment">shipping and payment</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">wholesale</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">blog</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">contacts</Link>
                </div>
            </div>
        </nav>
    );
}
