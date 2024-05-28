'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PricePic from './PricePic';
import SecondRow from './SecondRow';
import Buttons from './Buttons';
import styles from './FirstBlock.module.scss';
import Link from 'next/link';
import ScrollScooter from './ScrollScooter';

export default function FirstBlock() {
    const [showScrollScooter, setShowScrollScooter] = useState(true);
    const [width, setWidth] = useState<number>(494);
    const [height, setHeight] = useState<number>(46);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setShowScrollScooter(false);
                setWidth(164);
                setHeight(50);
            } else {
                setShowScrollScooter(true);
                setWidth(400);
                setHeight(46);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                <div className={styles.fullcontainerPaymentImage}>
                    <Link href="/payment">
                        <Image
                        src="/assets/images/payment_methods.png"
                        alt="Payment Methods"
                        width={width}
                        height={height}
                        layout="responsive"
                        className={styles.pointer}
                        />
                    </Link>
                </div>
            </div>
            {showScrollScooter && <ScrollScooter />}
        </div>
    );
}
