'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './CatalogCard.module.scss';

interface CatalogCardProps {
  id: number;
}

const CatalogCard = ({ id }: CatalogCardProps) => {
  const [product, setProduct] = useState({ name: "", image: "" });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:2602/api/product/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched Product Data:', data);
          setProduct(data);
        } else {
          console.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={`/assets/images/scooters_pic/${product.image}`}
          alt={product.name}
          width={74}
          height={80}
        />
      </div>
      <span className={styles.cardName}>{product.name}</span>
    </div>
  );
};

export default CatalogCard;