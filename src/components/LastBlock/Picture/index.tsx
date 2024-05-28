'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Picture.module.scss';

const Picture = () => {
    const [width, setWidth] = useState<number>(550);
    const [height, setHeight] = useState<number>(450);

    useEffect(() => {
        const updateDimensions = () => {
            setWidth(window.innerWidth > 900 ? 550 : 275);
            setHeight(window.innerWidth > 900 ? 450 : 225);
        };

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div className={styles.picture}>
            <Image
                src="/assets/images/scooter_card.png"
                alt="Scooter"
                width={width}
                height={height}
            />
        </div>
    );
};

export default Picture;

