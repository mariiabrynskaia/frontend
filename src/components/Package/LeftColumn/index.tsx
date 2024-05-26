import React from 'react';
import styles from './LeftColumn.module.scss';
import Image from 'next/image';

const ScrollAd: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Text}>
                Packing List
            </div>
            <div className={styles.Picture}>
                <Image src="/assets/images/no_video.png" alt="No Video" width={488} height={278} />
            </div>
        </div>
    );
};

export default ScrollAd;
