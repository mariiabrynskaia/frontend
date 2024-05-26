import { useState } from 'react';
import Image from 'next/image';
import styles from './ScrollScooter.module.scss';

const ScrollScooter = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.slider} style={{ transform: `translateX(-${currentSlide * 432}px)` }}>
                {[...Array(7)].map((_, index) => (
                    <div className={styles.slide} key={index}>
                        <Image src="/assets/images/scroller_scooter.png" alt="Scooter" width={530} height={650} />
                    </div>
                ))}
            </div>
            <div className={styles.indicators}>
                {[...Array(7)].map((_, index) => (
                    <div
                        className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
                        key={index}
                        onClick={() => handleClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ScrollScooter;
