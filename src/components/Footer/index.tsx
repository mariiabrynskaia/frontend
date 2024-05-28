'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.logo}>
                    <Image fill src="/assets/icons/logo.svg" alt="logo" />
                </div>
                <div className={styles.allignText}>
                    <div className={styles.phone}>
                        <a href="tel:+18887777777">+1 (888) 777-77-77</a>
                    </div>
                    <Link href="https://www.google.com/maps/place/2637+Fairfax+Ave,+Culver+City,+CA+90232/data=!4m2!3m1!1s0x80c2b99f30fea5db:0x7d3cca6198d774f9?sa=X&ved=1t:242&ictx=111" className={styles.address}>
                    2637 Fairfax Ave Culver City, CA 90232
                    </Link>
                    <div className={styles.company}>
                        <a>Segway  California © 2017</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
