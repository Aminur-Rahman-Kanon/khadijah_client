import React from "react";
import styles from './logo.module.css';
import logo from '../../assets/logo/logo_1.png';

const Logo = () => {
    return (
        <div className={styles.main}>
            <img src={logo} alt="massage" className={styles.logo}/>
        </div>
    )
}

export default Logo;
