// Control.tsx

import Image from 'next/image';
import styles from './Control.module.scss';

const Control = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photo}>
                <Image
                    src="/assets/images/control.png"
                    alt="control"
                    width={1024}
                    height={720}
                />
            </div>
        </div>
    );
};

export default Control;
