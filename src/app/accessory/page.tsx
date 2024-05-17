// import { useEffect, useState } from 'react';
// import AccessoryCard from '@/components/AccessoryCard';
// import { Accessory } from '@/types/types';

// const fetchAccessory = async (): Promise<Accessory[]> => {
//   const res = await fetch('/api/accessory');
//   if (!res.ok) {
//     throw new Error('Failed to fetch accessory');
//   }
//   return res.json();
// };

// const AccessoryPage = () => {
//   const [accessory, setAccessory] = useState<Accessory[]>([]);

//   useEffect(() => {
//     fetchAccessory().then(setAccessory).catch(console.error);
//   }, []);

//   return (
//     <div>
//       <h1>Accessory</h1>
//       <div>
//         {accessory.map((accessory) => (
//           <AccessoryCard key={accessory.id} accessory={accessory} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AccessoryPage;