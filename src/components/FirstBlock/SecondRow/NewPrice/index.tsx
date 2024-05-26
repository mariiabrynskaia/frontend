'use client';

import styles from './NewPrice.module.scss';

function NewPrice() {
  return (
    <div className={styles.cards}>
      <div className={styles.TextCrossed}>
        <p>$1049.99</p>
      </div>
      <div className={styles.Text}>
        <p>$949.99</p>
      </div>
    </div>
  );
}

export default NewPrice;