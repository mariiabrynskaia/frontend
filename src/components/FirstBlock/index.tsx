'use client';

import Image from 'next/image';
import PricePic from './PricePic';
import SecondRow from './SecondRow';
import Buttons from './Buttons';
import ScrollScooter from './ScrollScooter';
import styles from './FirstBlock.module.scss';
import Link from 'next/link';

export default function FirstBlock() {
    return (
        <div className={styles.fullcontainer}>
            <div className={styles.container}>
                <div className={styles.instock}>
                    In stock
                </div>
                <div className={styles.titleText}>
                    SEGWAY<br/>Ninebot<br/>Kickscooter<br/>MAX
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
                    <Link href="/payment">
                        <Image src="/assets/images/payment_methods.png" alt="Payment Methods" width={494} height={46} className={styles.pointer} />
                    </Link>
                </div>
            </div>
            <ScrollScooter />;
        </div>
    );
}
