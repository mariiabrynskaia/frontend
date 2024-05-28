'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './DownloadManual.module.scss';

const DownloadManual = () => {
    const [width, setWidth] = useState<number>(800);
    const [height, setHeight] = useState<number>(794);

    useEffect(() => {
        const updateDimensions = () => {
            setWidth(window.innerWidth > 900 ? 960 : 400);
            setHeight(window.innerWidth > 900 ? 318 : 180);
        };

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.photo}>
                <Image
                    src="/assets/images/download_manual.png"
                    alt="manual download"
                    layout="responsive"
                    width={width}
                    height={height}
                />
            </div>
        </div>
    );
};

export default DownloadManual;
