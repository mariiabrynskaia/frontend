'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ComparisonCardOne.module.scss';

interface Scooter {
  id: number;
  name: string;
  speed: number;
  distance: number;
  battery: string;
  weight: number;
  payload: string;
  charging_time: number;
  number_of_batteries: string;
  motor_power: string;
  power_output: string;
  incline: number;
  amortization: string;
  safety_light: string;
  atmosphere_light: string;
  price: number;
  image: string;
}

interface ComparisonCardOneProps {
  id: number;
}

const categories = [
  { icon: 'timer.svg', name: 'Max. speed', key: 'speed', unit: 'км/ч' },
  { icon: 'route.svg', name: 'Range (miles)', key: 'distance', unit: 'км' },
  { icon: 'battery.svg', name: 'Battery Capacity', key: 'battery' },
  { icon: 'weight.svg', name: 'Net Weight', key: 'weight', unit: 'кг' },
  { icon: 'arrow.svg', name: 'Payload', key: 'payload' },
  { icon: 'clock.svg', name: 'Charging Time', key: 'charging_time', unit: 'hours' },
  { icon: 'stick.svg', name: 'Number of Batteries', key: 'number_of_batteries' },
  { icon: 'lightning.svg', name: 'Motor power', key: 'motor_power' },
  { icon: 'power.svg', name: 'Power Output', key: 'power_output' },
  { icon: 'incline.svg', name: 'Max. Incline', key: 'incline', unit: '%' },
  { icon: 'schock.svg', name: 'Shock Absorption', key: 'amortization' },
  { icon: 'lock.svg', name: 'Safety', key: 'safety_light' },
  { icon: 'sun.svg', name: 'Atmosphere Light', key: 'atmosphere_light' }
];

const ComparisonCardOne: React.FC<ComparisonCardOneProps> = ({ id }) => {
  const [scooter, setScooter] = useState<Scooter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScooterData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:2602/api/product/${id}`);
        if (response.ok) {
          const data: Scooter = await response.json();
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

  const formatValue = (key: string, value: any) => {
    switch (key) {
      case 'speed':
        return `${value} км/ч`;
      case 'distance':
        return `${value} км`;
      case 'weight':
        return `${value} кг`;
      case 'charging_time':
        return `${value} hours`;
      case 'incline':
        return `${value}%`;
      default:
        return value;
    }
  };

  return (
    <div className={styles.allignAll}>
      <div className={styles.TextImageContainer}>
        <Image
          src={`/assets/images/scooters_pic/${scooter.image}`}
          alt="Scooter"
          className={styles.Picture}
          width={168}
          height={182}
        />
        <div className={styles.Name}>{scooter.name}</div>
      </div>

      {categories.map(({ icon, name, key }) => (
        <div className={styles.containerFullCategory} key={key}>
          <div className={styles.categoryContainer}>
            <Image
              src={`/assets/icons/comparison_pic/${icon}`}
              alt={name}
              className={styles.cactegoryIcon}
              width={18}
              height={18}
            />
            <div className={styles.categoryName}>{name}</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.categoryDesc}>
            {formatValue(key, scooter[key as keyof Scooter])}
          </div>
        </div>
      ))}

      <div className={styles.PriceButtonContainer}>
        <div className={styles.Price}>${scooter.price}</div>
        <button className={styles.Button}>buy it now</button>
      </div>
    </div>
  );
};

export default ComparisonCardOne;





















// import React from 'react';
// import Image from 'next/image';
// import styles from './ComparisonCardOne.module.scss';

// const categories = [
//   { icon: 'timer.svg', name: 'Max. speed' },
//   { icon: 'route.svg', name: 'Range (miles)' },
//   { icon: 'battery.svg', name: 'Battery Capacity' },
//   { icon: 'weight.svg', name: 'Net Weight' },
//   { icon: 'arrow.svg', name: 'Payload' },
//   { icon: 'clock.svg', name: 'Charging Time' },
//   { icon: 'stick.svg', name: 'Number of Batteries' },
//   { icon: 'lightning.svg', name: 'Motor power' },
//   { icon: 'power.svg', name: 'Power Output' },
//   { icon: 'incline.svg', name: 'Max. Incline' },
//   { icon: 'schock.svg', name: 'Shock Absorption' },
//   { icon: 'lock.svg', name: 'Safety' },
//   { icon: 'sun.svg', name: 'Atmosphere Light' }
// ];

// const ComparisonCardOne = () => {
//   return (
//     <div className={styles.allignAll}>
//       <div className={styles.TextImageContainer}>
//         <Image
//           src="/assets/images/scooters_pic/AIR_T15.png"
//           alt="Scooter"
//           className={styles.Picture}
//           width={168}
//           height={182}
//         />
//         <div className={styles.Name}>KS 22</div>
//       </div>

//       {categories.map(({ icon, name }, index) => (
//         <div className={styles.containerFullCategory} key={index}>
//           <div className={styles.categoryContainer}>
//             <Image
//               src={`/assets/icons/comparison_pic/${icon}`}
//               alt={name}
//               className={styles.cactegoryIcon}
//               width={18}
//               height={18}
//             />
//             <div className={styles.categoryName}>{name}</div>
//           </div>
//           <div className={styles.line}></div>
//           <div className={styles.categoryDesc}>22 км</div>
//         </div>
//       ))}

//       <div className={styles.PriceButtonContainer}>
//         <div className={styles.Price}>$599.99</div>
//         <button className={styles.Button}>buy it now</button>
//       </div>
//     </div>
//   );
// };

// export default ComparisonCardOne;


