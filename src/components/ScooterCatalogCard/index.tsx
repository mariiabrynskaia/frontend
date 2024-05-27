'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './ScooterCatalogCard.module.scss';

interface Scooter {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ScooterCatalogCardProps {
  id: number;
}

const ScooterCard = ({ id }: ScooterCatalogCardProps) => {
  const [scooter, setScooter] = useState<Scooter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScooterData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:2602/api/product/${id}`);
        if (response.ok) {
          const data: Scooter = await response.json();
          console.log('Fetched Scooter Data:', data);
          setScooter(data);
        } else {
          const errorText = await response.text();
          console.error('Failed to fetch scooter data:', errorText);
          setError('Failed to fetch scooter data');
        }
      } catch (error) {
        console.error('Error fetching scooter data:', error);
        setError('Error fetching scooter data');
      } finally {
        setLoading(false);
      }
    };

    fetchScooterData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!scooter) {
    return <div>No scooter data</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.circle}></div>
      <div className={styles.cardImage}>
        <Image
          src={`/assets/images/scooters_pic/${scooter.image}`}
          alt={scooter.name}
          width={124}
          height={133}
        />
      </div>
        <span className={styles.cardText}>{scooter.name}</span>
        <span className={styles.cardPrice}>${scooter.price}</span>
        <button className={styles.cardBuyBtn}>See more</button>
    </div>
  );
};

export default ScooterCard;