import AccessoryCard from '../AccessoryCard';
import styles from './Accessory.module.scss';

const Accessory = () => {
  const accessoryIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container">
      <section className={styles.catalog}>
        <h2 className={styles.catalogTitle}>ACCESSORY</h2>
        <div className={styles.catalogGrid}>
          {accessoryIds.map(id => (
            <AccessoryCard key={id} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accessory;