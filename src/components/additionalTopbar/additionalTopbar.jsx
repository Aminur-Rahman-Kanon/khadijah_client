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
                    <div className={styles.icon} style={{color: '#f9aab4'}}>
                        <FontAwesomeIcon icon={faClock} className={styles.svg}/>
                    </div>
                    <span className={styles.text}>Mon-Fri: 8:00 - 20:00</span>
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
                    <a target='_blank' href="https://www.google.com/maps/place/A+to+Zen+Therapies/@51.5102271,-0.0855446,17z/data=!3m1!4b1!4m6!3m5!1s0x48761ca34f55d801:0xe708cdf492ddae69!8m2!3d51.5102271!4d-0.0829697!16s%2Fg%2F11cr_z3hpw?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" className={styles.link}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faMapPin} className={styles.svg}/>
                        </div>
                        <span className={styles.text}>36 St Mary at Hill, City of London, EC3R 8DU</span>
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
