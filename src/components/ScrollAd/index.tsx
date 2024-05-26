'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ScrollAd.module.scss';

const slides = ['box.png', 'list.png', 'instruments.png', 'route_charge.png'];

const indicators = [
  { image: 'box.svg', text: 'Delivery within<br/>1 business day' },
  { image: 'list.svg', text: 'Basic 1 year<br/>warranty' },
  { image: 'instruments.svg', text: 'After Sales<br/>Support' },
  { image: 'route_charge.svg', text: 'Up to 40 miles<br/>per charge' },
];

export default function ScrollAd() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.indicatorContainer}>
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${activeSlide === index ? styles.active : ''}`}
            onClick={() => handleSlideChange(index)}
          >
            <div className={styles.indicatorImage}>
              <Image src={`/assets/icons/${indicator.image}`} alt={indicator.image} width={38} height={38} />
            </div>
            <div className={styles.indicatorText} dangerouslySetInnerHTML={{ __html: indicator.text }} />
          </div>
        ))}
      </div>
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div key={index} className={`${styles.slide} ${activeSlide === index ? styles.active : ''}`}>
            <Image src={`/assets/images/${slide}`} alt={slide} width={957} height={192} />
          </div>
        ))}
      </div>
    </div>
  );
}



