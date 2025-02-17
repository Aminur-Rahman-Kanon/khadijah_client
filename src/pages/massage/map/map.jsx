import React from 'react';
import styles from './map.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';

const Map = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.headerSmallBlack}>Get in touch</h3>
                <div className={styles.item}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faMapPin} className={styles.icon}/>
                    </div>
                    <span className={styles.textExtraSmallBlack}>Beauty Essence as DP, 7 Well Court, London, England, EC4M 9DN</span>
                </div>
                <div className={styles.item}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                    </div>
                    <span className={styles.textExtraSmallBlack}>khadijah.web.service@gmail.com</span>
                </div>
                <div className={styles.item}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faMobile} className={styles.icon}/>
                    </div>
                    <span className={styles.textExtraSmallBlack}>+447950 999 729</span>
                </div>
            </div>
            <div className={styles.mapContainer}>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1629147387425!2d-0.0855446229037804!3d51.51022707181403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca34f55d801%3A0xe708cdf492ddae69!2sA%20to%20Zen%20Therapies!5e0!3m2!1sen!2suk!4v1738632978945!5m2!1sen!2suk"
                        allowFullScreen=""
                        loading="lazy"
                        className={styles.map}
                        referrerPolicy="no-referrer-when-downgrade">
                </iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.996262102519!2d-0.09565942292940594!3d51.51328457181458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035565922d43%3A0x685c1da405f593a9!2sWell%20Ct%2C%20City%20of%20London%2C%20London%20EC4M%209DN!5e0!3m2!1sen!2suk!4v1739225758554!5m2!1sen!2suk"
                     allowFullScreen=""
                     loading="lazy"
                     className={styles.map}
                     referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default Map;
