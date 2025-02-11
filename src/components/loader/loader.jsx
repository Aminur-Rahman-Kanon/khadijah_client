import React from 'react';
import styles from './loader.module.css';
import loader from '../../assets/others/loader.gif';

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src={ loader } alt="loader" className={styles.loader}/>
            </div>
        </div>
    )
}

export default Loader;
