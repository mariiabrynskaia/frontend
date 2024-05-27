'use client';

import Image from 'next/image';
import HeaderMenu from '../HeaderMenu';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.wrapper}`}>
                <HeaderMenu />

                <div className={styles.cart}>
                    <div className={styles.cartIcon}>
                        <div className={styles.cartWrapImage}>
                            <Image fill src="/assets/icons/cart.svg" alt="cart" />
                        </div>
                        <div className={styles.cartIconBadge}>0</div>
                    </div>
                </div>

                <div className={styles.media}>
                    <div className={styles.mediaIcon}>
                        <div className={styles.mediaWrapImage}>
                            <Image fill src="/assets/icons/media.svg" alt="media" />
                        </div>
                        <div className={styles.cartIconBadge}>0</div>
                    </div>
                </div>

                <div className={styles.phone}>
                    <div className={styles.phoneWrap}>
                        <div className={styles.phoneText}>+1 (888) 888-88-88</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;