import React from 'react';
import styles from './Picture.module.scss';
import Image from 'next/image';

const Picture: React.FC = () => {
  return (
    <div className={styles.pictureContainer}>
      <div className={styles.circle}></div>
      <div className={styles.picture}>
        <Image
          src="/assets/images/instruction.png"
          alt="Instruction"
          width={417}
          height={388}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default Picture;
