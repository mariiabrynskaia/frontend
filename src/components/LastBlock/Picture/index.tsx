import Image from 'next/image';
import styles from './Picture.module.scss';

const Picture = () => {
    return (
        <div className={styles.picture}>
            <Image
                src="/assets/images/scooter_card.png"
                alt="Scooter"
                width={550}
                height={450}
            />
        </div>
    );
};

export default Picture;
