'use client';

// index.tsx

import React from 'react';
import Image from 'next/image';
import styles from './Reviews.module.scss';

const Reviews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Text}>REVIEW</div> {/* Uppercase REVIEW */}
            <div className={styles['slider-container']}>
                <div className={styles.slide}>
                    <Image src="/assets/icons/swipe.svg" alt="Swipe" width={70} height={70} />
                </div>
                {[...Array(3)].map((_, index) => (
                    <div className={styles.slide} key={index}>
                        <Image src="/assets/images/review.png" alt="Review" width={275} height={487} />
                    </div>
                ))}
                <div className={styles.slide}>
                    <Image src="/assets/icons/swipe.svg" alt="Swipe" width={70} height={70} style={{ transform: 'rotate(180deg)' }} />
                </div>
            </div>
        </div>
    );
};

export default Reviews;























