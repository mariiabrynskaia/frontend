import { useState } from 'react';
import Image from 'next/image';
import styles from './Instructions.module.scss';

const cards = [
    { image: 'tools.svg', text: 'Assembly and<br/>preparation for the trip' },
    { image: 'socket.svg', text: 'How to charge<br/>a scooter' },
    { image: 'wheel.svg', text: 'How to ride<br/>properly' },
  ];

export default function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.indicatorContainer}>
        {cards.map((cards, index) => (
          <div
            key={index}
          >
            <div className={styles.indicatorImage}>
              <Image src={`/assets/icons/${cards.image}`} alt={cards.image} width={38} height={38} />
            </div>
            <div className={styles.indicatorText} dangerouslySetInnerHTML={{ __html: cards.text }} />
          </div>
        ))}
      </div>
    </div>
  )
}