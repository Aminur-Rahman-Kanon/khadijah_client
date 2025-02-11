import React, { useEffect, useState } from "react";
import styles from './logo.module.css';
import logo1 from '../../assets/logo/logo_10.png';
import sample from '../../assets/logo/logo_sample_2.png';

const Logo = () => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
    }, [])
    
    return (
        <a href="/" className={styles.main}>
            <img src={innerWidth <= 767 ? sample : logo1} alt="massage" className={styles.logo} id="logo" />
        </a>
    )
}

export default Logo;
