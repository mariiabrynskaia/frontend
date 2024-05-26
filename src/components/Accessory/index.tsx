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


















// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import clsx from 'clsx';

// import AccessoryCard from '../AccessoryCard';
// import styles from './Accessory.module.scss';

// export default function Accessory() {
//     const [state, setState] = useState(0);

//     return (
//         <div className="container">
//             <section className={styles.catalog}>

                
//                 {/* <button onClick={() => setState(state - 1)}>-</button>
//                 <div>{state}</div>
//                 <button onClick={() => setState(state + 1)}>+</button> */}


//                 <h2 className={styles.catalogTitle}>ACCESSORY</h2>

//                 <div className={styles.catalogGrid}>
//                     <AccessoryCard />
//                     <AccessoryCard />
//                     <AccessoryCard />
//                     <AccessoryCard />
//                     <AccessoryCard />
//                     <AccessoryCard />
//                     <AccessoryCard />
//                     <AccessoryCard />
//                     <AccessoryCard />
//                 </div>
//             </section>
//         </div>
//     );
// }












// 'use client';

// import AccessoryCard from '../AccessoryCard';
// import styles from './Accessory.module.scss';

// const Accessory = () => {

//     const accessoryIds = [1, 2, 3, 4, 5, 6,];
    
//     return (
//         <div className="container">
//             <section className={styles.catalog}>
//                 <h2 className={styles.catalogTitle}>ACCESSORY</h2>
//                 <div className={styles.catalogGrid}>
//                     {accessoryIds.map(id => (
//                         <AccessoryCard key={id} id={id} />
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Accessory;
