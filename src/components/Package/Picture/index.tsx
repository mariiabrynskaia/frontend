'use client';

import React, { useState, useEffect } from 'react';
import styles from './Picture.module.scss';
import Image from 'next/image';

const Picture: React.FC = () => {
  const [width, setWidth] = useState<number>(418);
  const [height, setHeight] = useState<number>(388);

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth > 900 ? 418 : 200);
      setHeight(window.innerWidth > 900 ? 388 : 186);
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className={styles.pictureContainer}>
      <div className={styles.circle}></div>
      <div className={styles.picture}>
        <Image
          src="/assets/images/instruction.png"
          alt="Instruction"
          width={width}
          height={height}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default Picture;

