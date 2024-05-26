import React from 'react';
import Image from 'next/image';
import styles from './Features.module.scss';

const Features: React.FC = () => {
  return (
    <div className={styles.Picture}>
      <Image
        src="/assets/images/features.png"
        alt="features"
        layout="responsive"
        width={800}
        height={794}
        objectFit="cover"
      />
    </div>
  );
};

export default Features;