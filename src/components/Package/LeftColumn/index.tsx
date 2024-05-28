'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './LeftColumn.module.scss';

const LeftColumn: React.FC = () => {
    const [width2, setWidth2] = useState<number>(488);
    const [height2, setHeight2] = useState<number>(278);
  
    useEffect(() => {
      const updateDimensions = () => {
        setWidth2(window.innerWidth > 900 ? 488 : 200);
        setHeight2(window.innerWidth > 900 ? 278 : 100);
      };
  
      updateDimensions();
  
      window.addEventListener('resize', updateDimensions);
  
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.Text}>
                Packing List
            </div>
            <div className={styles.Picture}>
                <Image src="/assets/images/no_video.png" alt={'picture'} width={width2} height={height2} />
            </div>
        </div>
    );
};

export default LeftColumn;

