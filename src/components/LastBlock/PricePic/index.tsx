'use client';

import styles from './PricePic.module.scss';

function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <p>1 Year - $139</p>
      </div>
      <div className={styles.card}>
        <p>2 Year - $209</p>
      </div>
      <div className={styles.card}>
        <p>3 Year - $279</p>
      </div>
    </div>
  );
}

export default Cards;
