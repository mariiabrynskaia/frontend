import ScooterCatalogCard from '../ScooterCatalogCard';
import styles from './ScooterCatalog.module.scss';

const Scooter = () => {
  const scooterIds = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="container">
      <section className={styles.catalog}>
        <h2 className={styles.catalogTitle}>OTHER MODELS</h2>
        <h3 className={styles.catalogDesc}>Check out the entire line of Segway scooters</h3>
        <div className={styles.catalogGrid}>
          {scooterIds.map(id => (
            <ScooterCatalogCard key={id} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Scooter;