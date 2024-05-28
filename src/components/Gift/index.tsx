'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Gift.module.scss';

const ProtectiveGearSet = () => {
    const [width, setWidth] = useState<number>(278);
    const [height, setHeight] = useState<number>(200);

    useEffect(() => {
        const updateDimensions = () => {
            setWidth(window.innerWidth > 900 ? 278 : 200);
            setHeight(window.innerWidth > 900 ? 200 : 144);
        };

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image 
                    src="/assets/images/last_ad_gear_set.png" 
                    alt="Protective Gear Set" 
                    width={width} 
                    height={height} 
                />
            </div>
            <div className={styles.TextContainer}>
                <div className={styles.Title} style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                    Segway Protective<br/>Gear Set as a gift
                </div>
                <div className={styles.Text}>
                    The cost of a protection kit when buying<br/>a scooter is $0 instead of $29.99
                </div>
            </div>
        </div>
    );
}

export default ProtectiveGearSet;

