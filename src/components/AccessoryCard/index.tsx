import Image from 'next/image';
import { useState } from 'react';

import styles from './AccessoryCard.module.scss';

export default function CatalogCard() {

    return (
        <div className={styles.card}>
            <div className={styles.circle}></div>
            <div className={styles.cardImage}>
                <Image
                    src="/assets/images/accessories/backpack.png"
                    alt="backpack"
                    width={99}
                    height={144}
                />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDescName}>Name</span>
                <span className={styles.cardDescText}>Description</span>

                <span className={styles.cardDescPrice}>$29.99</span>

                <button className={styles.cardDescBuyBtn}>Add to cart</button>

            </div>
        </div>
    );
}

















// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import styles from './AccessoryCard.module.scss';

// interface AccessoryCardProps {
//     id: number;
// }

// const AccessoryCard = ({ id }: AccessoryCardProps) => {
//     const [accessory, setAccessory] = useState({
//         id: 1,
//         name: 'Name',
//         description: 'Description',
//         price: 29.99,
//         image: 'backpack.png',
//     });

//     useEffect(() => {
//         const fetchAccessoryData = async () => {
//             try {
//                 const response = await fetch(`/api/accessory/${id}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setAccessory(data);
//                 } else {
//                     console.error('Failed to fetch accessory data');
//                 }
//             } catch (error) {
//                 console.error('Error fetching accessory data:', error);
//             }
//         };

//         fetchAccessoryData();
//     }, [id]);

//     return (
//         <div className={styles.card}>
//             <div className={styles.circle}></div>
//             <div className={styles.cardImage}>
//                 <Image
//                     src={`/assets/images/accessories/${accessory.image}`}
//                     alt={accessory.name}
//                     width={99}
//                     height={144}
//                 />
//             </div>
//             <div className={styles.cardDesc}>
//                 <span className={styles.cardDescName}>{accessory.name}</span>
//                 <span className={styles.cardDescText}>{accessory.description}</span>
//                 <span className={styles.cardDescPrice}>${accessory.price}</span>
//                 <button className={styles.cardDescBuyBtn}>Add to cart</button>
//             </div>
//         </div>
//     );
// };

// export default AccessoryCard;








// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import styles from './AccessoryCard.module.scss';

// interface Accessory {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     image: string;
// }

// interface AccessoryCardProps {
//     id: number;
// }

// const AccessoryCard: React.FC<AccessoryCardProps> = ({ id }) => {
//     const [accessory, setAccessory] = useState<Accessory | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchAccessory = async () => {
//             try {
//                 const res = await fetch(`/api/accessory/${id}`);
//                 if (!res.ok) {
//                     throw new Error('Failed to fetch accessory');
//                 }
//                 const data = await res.json();
//                 setAccessory(data);
//                 setLoading(false);
//             } catch (err) {
//                 if (err instanceof Error) {
//                     setError(err.message);
//                 } else {
//                     setError('An unknown error occurred');
//                 }
//                 setLoading(false);
//             }
//         };

//         fetchAccessory();
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!accessory) {
//         return <div>No accessory found</div>;
//     }

//     return (
//         <div className={styles.card}>
//             <div className={styles.circle}></div>
//             <div className={styles.cardImage}>
//                 <Image
//                     src={`/assets/images/accessories/${accessory.image}`}
//                     alt={accessory.name}
//                     width={99}
//                     height={144}
//                 />
//             </div>
//             <div className={styles.cardDesc}>
//                 <span className={styles.cardDescName}>{accessory.name}</span>
//                 <span className={styles.cardDescText}>{accessory.description}</span>
//                 <span className={styles.cardDescPrice}>${accessory.price}</span>
//                 <button className={styles.cardDescBuyBtn}>Add to cart</button>
//             </div>
//         </div>
//     );
// };

// export default AccessoryCard;