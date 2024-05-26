import React from 'react';
import Image from 'next/image';
import styles from './Gift.module.scss';

const ProtectiveGearSet = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image 
                    src="/assets/images/last_ad_gear_set.png" 
                    alt="Protective Gear Set" 
                    width={278} 
                    height={200} 
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
