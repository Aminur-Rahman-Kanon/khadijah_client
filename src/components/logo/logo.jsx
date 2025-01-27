import React from "react";
import styles from './logo.module.css';
import logo1 from '../../assets/logo/logo_1.png';
import face from '../../assets/logo/face.png';

const Logo = () => {

    const innerWidth = window.innerWidth;
    
    return (
        <div className={styles.main}>
            <img src={innerWidth <= 767 ? face : logo1} alt="massage" className={styles.logo} id="logo" />
        </div>
    )
}

export default Logo;
