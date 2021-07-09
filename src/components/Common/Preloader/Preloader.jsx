import preloader from '../../../assets/images/preloader.svg';

import styles from './Preloader.module.scss';

export const Preloader = () => (
    <div className={styles.preloader}>
        <img src={preloader} alt='svg' />
    </div>
);
