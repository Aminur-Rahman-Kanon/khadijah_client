import React from "react";
import styles from './socialLink.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const stylesPallete = {
    smallPink: {
        fontSize: '15px',
        color: '#DD88CF'
    },
    largePink: {
        fontSize: '20px',
        color: '#DD88CF'
    },
    largeWhite: {
        fontSize: '20px',
        color: 'white'
    }
}

const Sociallink = ({ style }) => {

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <a href='#' style={stylesPallete[style]} className={styles.link}>
                    <FontAwesomeIcon icon={faFacebook} className={styles.svg}/>
                </a>
            </div>
            <div className={styles.item}>
                <a href='#' style={stylesPallete[style]} className={styles.link}>
                    <FontAwesomeIcon icon={faXTwitter} className={styles.svg}/>
                </a>
            </div>
            <div className={styles.item}>
                <a href='#' style={stylesPallete[style]} className={styles.link}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.svg}/>
                </a>
            </div>
            <div className={styles.item}>
                <a href='#' style={stylesPallete[style]} className={styles.link}>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.svg}/>
                </a>
            </div>
        </div>
    )
}

export default Sociallink;
