import React from 'react';
import Image from 'next/image';
import styles from './RealLifeBanner.module.scss';

const RealLifeBanner: React.FC = () => {
  return (
    <div className={styles.Picture}>
      <Image
        src="/assets/images/pr_photo.png"
        alt="Real Life Banner"
        layout="responsive"
        width={800}
        height={794}
        objectFit="cover"
      />
    </div>
  );
};

export default RealLifeBanner;


