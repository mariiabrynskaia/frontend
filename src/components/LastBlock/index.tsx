'use client';

// LastBlock.tsx

import Image from 'next/image';
import styles from './LastBlock.module.scss';
import Picture from './Picture';
import PricePic from './PricePic';
import SecondRow from './SecondRow';
import Buttons from './Buttons';

export default function FirstBlock() {
    return (
        <div className={styles.fullcontainer}>
            <div className={styles.container}>
                <div className={styles.instock}>
                    In stock
                </div>
                <div className={styles.titleText}>
                    SEGWAY Ninebot<br/>Kickscooter<br/>MAX
                </div>
                <div className={styles.innerContainer}>
                    <div className={styles.Text}>
                        Add an extended warranty from <span style={{ fontWeight: 'bold' }}>Extend</span>
                    </div>
                    <div className={styles.centeredContent}>
                        <div>
                            <PricePic />
                        </div>
                        <div>
                            <SecondRow />
                        </div>
                        <div>
                            <Buttons />
                        </div>
                    </div>
                </div>
                <div className={styles.paymentImage}>
                    <Image src="/assets/images/payment_methods.png" alt="Payment Methods" width={494} height={46} />
                </div>
            </div>
            <Picture />
        </div>
    );
}






// export default function FirstBlock() {
//     return (
//         <div className={styles.fullcontainer}>
//             <div className={styles.container}>
//                 <div className={styles.instock}>
//                     In stock
//                 </div>
//                 <div className={styles.titleText}>
//                     SEGWAY Ninebot<br/>Kickscooter<br/>MAX
//                 </div>
//             </div>
//             <div  className={styles.fullcontainer}>
//                 <div className={styles.lastContainer}>
//                     <div className={styles.innerContainer}>
//                         <div className={styles.Text}>
//                             Add an extended warranty from <span style={{ fontWeight: 'bold' }}>Extend</span>
//                         </div>
//                             <div className={styles.centeredContent}>
//                                 <div>
//                                     <PricePic />
//                                 </div>
//                                 <div>
//                                     <SecondRow />
//                                 </div>
//                                 <div>
//                                     <Buttons />
//                                 </div>
//                                 <div className={styles.paymentImage}>
//                                 <Image src="/assets/images/payment_methods.png" alt="Payment Methods" width={494} height={46} />
//                             </div>
//                     </div>
//                     </div>
//                 </div>
//                 <Picture/>
//             </div>
//         </div>
//     );
// }
