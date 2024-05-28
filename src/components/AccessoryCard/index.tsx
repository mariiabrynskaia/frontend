'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './AccessoryCard.module.scss';

interface Accessory {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface AccessoryCardProps {
  id: number;
}

const AccessoryCard = ({ id }: AccessoryCardProps) => {
  const [accessory, setAccessory] = useState<Accessory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessoryData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:2602/api/accessory/${id}`);
        if (response.ok) {
          const data: Accessory = await response.json();
          console.log('Fetched Accessory Data:', data);
          setAccessory(data);
        } else {
          const errorText = await response.text();
          console.error('Failed to fetch accessory data:', errorText);
          setError('Failed to fetch accessory data');
        }
      } catch (error) {
        console.error('Error fetching accessory data:', error);
        setError('Error fetching accessory data');
      } finally {
        setLoading(false);
      }
    };

    fetchAccessoryData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!accessory) {
    return <div>No accessory data</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.circle}></div>
      <div className={styles.cardImage}>
        <Image
          src={`/assets/images/accessory_pic/${accessory.image}`}
          alt={accessory.name}
          width={99}
          height={144}
        />
      </div>
      <div className={styles.cardDesc}>
        <span className={styles.cardDescName}>{accessory.name}</span>
        <span className={styles.cardDescText}>{accessory.description}</span>
        <span className={styles.cardDescPrice}>${accessory.price}</span>
        <button className={styles.cardDescBuyBtn}>Add to cart</button>
      </div>
    </div>
  );
};

export default AccessoryCard;