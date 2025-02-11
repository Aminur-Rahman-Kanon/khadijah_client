import React from 'react';
import styles from './additionalTopbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import Sociallink from '../socialLink/socialLink';

const AdditionalTopbar = () => {
  return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.icon} style={{color: '#DD88CF'}}>
                        <FontAwesomeIcon icon={faClock} className={styles.svg}/>
                    </div>
                    <span className={styles.text}>Mon & Sat: 10:00 - 20:00</span>
                </div>
                <div className={styles.item}>
                    <a href="tel:00447950999729" className={styles.link}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faPhone} className={styles.svg}/>
                        </div>
                        <span className={styles.text}>+447950 999 729</span>
                    </a>
                </div>
                <div className={styles.item}>
                    <a target='_blank' href="https://www.google.com/maps/place/Well+Ct,+City+of+London,+London+EC4M+9DN/@51.5132846,-0.0956594,17z/data=!3m1!4b1!4m6!3m5!1s0x4876035565922d43:0x685c1da405f593a9!8m2!3d51.5133514!4d-0.0930239!16s%2Fg%2F1tjdwcpt?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D" className={styles.link}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faMapPin} className={styles.svg}/>
                        </div>
                        <span className={styles.text}>7 well court, london, ec4m 9dn</span>
                    </a>
                </div>
            </div>
            <div className={styles.container}>
                <Sociallink style={'smallPink'}/>
            </div>
        </div>
  )
}

export default AdditionalTopbar;
