'use client';

import styles from './SecondRow.module.scss';
import NewPrice from './NewPrice';
import Gift from './Gift';
import Picture from './Picture';

export default function SecondRow() {
    return (
        <div className={styles.nav}>
            <div className={styles.navList}>
                <div className={styles.navListText}>
                    <NewPrice />
                </div>
                <div className={styles.navListGift}>
                    <Gift />
                </div>
                <div className={styles.navListPicture}>
                    <Picture />
                </div>
            </div>
        </div>
    );
}