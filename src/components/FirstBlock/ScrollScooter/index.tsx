import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ScrollScooter.module.scss';

interface Scooter {
    id: number;
    image: string;
}

const ScrollScooter = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scooters, setScooters] = useState<Scooter[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchScooters = async () => {
            try {
                const response = await fetch('http://127.0.0.1:2602/api/product?ids=1,2,2,4,5,6,7');
                if (response.ok) {
                    const data: Scooter[] = await response.json();
                    setScooters(data.slice(4, 11));
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

        fetchScooters();
    }, []);

    const handleClick = (index: number) => {
        setCurrentSlide(index);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.slider} style={{ transform: `translateX(-${currentSlide * 432}px)` }}>
                {scooters.map((scooter, index) => (
                    <div className={styles.containerSlide} key={scooter.id}>
                        <Image src={`/assets/images/scooters_pic/${scooter.image}`} alt="Scooter" width={530} height={650} />
                    </div>
                ))}
            </div>
            <div className={styles.indicators}>
                {scooters.map((_, index) => (
                    <div
                        className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
                        key={index}
                        onClick={() => handleClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ScrollScooter;

