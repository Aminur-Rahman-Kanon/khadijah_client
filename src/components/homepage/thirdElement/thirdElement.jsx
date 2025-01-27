import React, { useEffect } from "react";
import styles from './thirdElement.module.css';
import bg from '../../../assets/thirdElement/element3_bg.jpg';
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const ThirdElement = () => {

    useEffect(() => {
        Aos.init({ duration: '1500', once: false, disable: () => window.innerWidth < 1024  })
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.bgContainer}>
                    <img src={bg} alt="massage" className={styles.bg}/>
                    <div className={styles.floatContainer}>
                        <div data-aos='fade-up' data-aos-delay='50' className={styles.floatLeft}>
                            <h2 className={styles.headingLargeBlack}>open hours</h2>
                            <span className={styles.textSmallBlack}>Welcome to the best massage studio! We are happy to help you!</span>
                            <ul className={styles.listContainer}>
                                <li className={styles.li}>Mon-Sat: 10AM - 8PM</li>
                                <li className={styles.li}>Sunday: Closed</li>
                            </ul>
                        </div>
                        <div data-aos='fade-down' data-aos-delay='50' className={styles.floatRight}>
                            <h2 className={styles.headingLargeWhite}>relax now</h2>
                            <span className={styles.textSmallWhite}>If you feel stressed about an idea, we will make it work for you.</span>
                            <Link to={''} className={styles.link}>about us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdElement;
