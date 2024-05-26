'use client';

import styles from './Buttons.module.scss';

function Buttons() {
  return (
    <div className={styles.buttons}>
      <button className={styles.button}>
        <p>buy it now</p>
      </button>
      <button className={styles.button}>
        <p>add to cart</p>
      </button>
    </div>
  );
}

export default Buttons;