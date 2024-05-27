import CatalogCard from '../CatalogCard';
import styles from './Catalog.module.scss';

const Catalog = () => {
  const productIds = [1, 2, 3, 4, 5, 6, 7];
  const productIds2 = [8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="catalog">
      <section className={styles.catalog}>
        <div className={styles.catalogGrid}>
          {productIds.map(id => (
            <CatalogCard key={id} id={id} />
          ))}
        </div>
        <div className={styles.separator}></div>
        <div className={styles.catalogGrid}>
          {productIds2.map(id => (
            <CatalogCard key={id} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Catalog;