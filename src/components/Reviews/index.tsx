'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Reviews.module.scss';

const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 5;
    const visibleSlides = 3;
    const [width, setWidth] = useState<number>(275);
    const [height, setHeight] = useState<number>(487);

    useEffect(() => {
        const updateDimensions = () => {
            setWidth(window.innerWidth > 900 ? 275 : 184);
            setHeight(window.innerWidth > 900 ? 487 : 324);
        };

        updateDimensions();

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % (totalSlides - visibleSlides + 1));
        }, 3000);
        
        window.addEventListener('resize', updateDimensions);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', updateDimensions);
        };
    }, [totalSlides, visibleSlides]);

    const handleIndicatorClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.Text}>REVIEWS</div>
            <div className={styles['slider-container']}>
                <div
                    className={styles.slides}
                    style={{ transform: `translateX(-${activeIndex * (width + 18)}px)` }}
                >
                    {[...Array(totalSlides)].map((_, index) => (
                        <div className={styles.slide} key={index}>
                            <Image src="/assets/images/review.png" alt="Review" width={width} height={height} />
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

























