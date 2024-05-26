import React from 'react';
import styles from './Package.module.scss';
import LeftColumn from './LeftColumn';
import Picture from './Picture';

const Package: React.FC = () => {
  return (
    <div className={styles.container}>
      <LeftColumn />
      <Picture />
    </div>
  );
};

export default Package;