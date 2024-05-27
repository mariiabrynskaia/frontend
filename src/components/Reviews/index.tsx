'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Reviews.module.scss';

const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 5;
    const visibleSlides = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % (totalSlides - visibleSlides + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [totalSlides, visibleSlides]);

    const handleIndicatorClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.Text}>REVIEW</div>
            <div className={styles['slider-container']}>
                <div
                    className={styles.slides}
                    style={{ transform: `translateX(-${activeIndex * (275 + 18)}px)` }}
                >
                    {[...Array(totalSlides)].map((_, index) => (
                        <div className={styles.slide} key={index}>
                            <Image src="/assets/images/review.png" alt="Review" width={275} height={487} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.indicators}>
                {[...Array(totalSlides - visibleSlides + 1)].map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Reviews;
























