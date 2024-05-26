'use client';

import Image from 'next/image';
import styles from './DownloadManual.module.scss';

const DownloadManual = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photo}>
                <Image
                    src="/assets/images/download_manual.png"
                    alt="manual download"
                    layout="responsive"
                    width={800}
                    height={794}
                />
            </div>
        </div>
    );
};

export default DownloadManual;