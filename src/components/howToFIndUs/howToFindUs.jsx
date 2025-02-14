import React from 'react';
import styles from './howToFindUs.module.css';

const HowToFindUs = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <h1 className={styles.headingLargeBlack}>How to find us</h1>
            </div>
            <div className={styles.bottom}>
                <div className={styles.container}>
                    <div className={styles.bottomTop}>
                        <h2 className={styles.headingMediumBlack}>Divine Touch by Ola is situated inside <strong>Beauty Essence</strong>. Directions are provided below.</h2>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.headingSmallBlack}>bank tube - northern line</h3>
                        <ul className={styles.lists}>
                            <li className={styles.list}>On the platform head toward the “Bank of England” exit</li>
                            <li className={styles.list}>Exit  – to “Cannon Street'</li>
                            <li className={styles.list}>turn left</li>
                            <li className={styles.list}>Keep walking until you reach the "Pret A Manger" cafe on your right</li>
                            <li className={styles.list}>Keep walking until you reach the "Pure" cafe on your left</li>
                            <li className={styles.list}>Immediately turn left and enter Bow Lane</li>
                            <li className={styles.list}>Walk approx. 30 meters along Bow Lane (pedestrianised) passing ‘Prêt a Manger’ on your left</li>
                            <li className={styles.list}>Well Court is next to “Loake Shoemakers” on the left</li>
                            <li className={styles.list}>Beauty Essence is 10 meters down Well Court on your right</li>
                            <li className={styles.list}>It will take approx. 10 mins. from Bank station</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.headingSmallBlack}>bank tube - central line</h3>
                        <ul className={styles.lists}>
                            <li className={styles.list}>On the platform head toward the “Bank of England” exit</li>
                            <li className={styles.list}>Exit  – to “Cheapside”</li>
                            <li className={styles.list}>Walk straight ahead passing Tesco’s on your left</li>
                            <li className={styles.list}>Cross over Queen Street</li>
                            <li className={styles.list}>Keep walking until you reach the "Pure" cafe on your left</li>
                            <li className={styles.list}>Immediately turn right and enter Bow Lane</li>
                            <li className={styles.list}>Walk approx. 30 meters along Bow Lane (pedestrianised) passing ‘Prêt a Manger’ on your left</li>
                            <li className={styles.list}>Well Court is next to “Loake Shoemakers” on the left</li>
                            <li className={styles.list}>Beauty Essence is 10 meters down Well Court on your right</li>
                            <li className={styles.list}>It will take approx. 10 mins. from Bank station</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.headingSmallBlack}>mansion house tube</h3>
                        <ul className={styles.lists}>
                            <li className={styles.list}>Tube Exit 4 – “Bow Lane Shops”</li>
                            <li className={styles.list}>Turn left onto Bow Lane</li>
                            <li className={styles.list}>Walk until you reach “Paul Smith” on your left</li>
                            <li className={styles.list}>Well Court is opposite “Paul Smith”</li>
                            <li className={styles.list}>Beauty Essence is 10 meters on your right</li>
                            <li className={styles.list}>It will take approx. 5 mins. from Mansion House Station</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.headingSmallBlack}>St. paul's tube</h3>
                        <ul className={styles.lists}>
                            <li className={styles.list}>Exit  – to “Cheapside”</li>
                            <li className={styles.list}>Take the right-hand set of steps</li>
                            <li className={styles.list}>Walk ahead along “Cheapside” until you reach St. Mary Le Bow church on the right</li>
                            <li className={styles.list}>Walk down Bow Lane – a pedestrian street next to St. Mary Le Bow church</li>
                            <li className={styles.list}>Walk until you reach “Paul Smith” on your right</li>
                            <li className={styles.list}>Well Court is opposite “Paul Smith” on the left</li>
                            <li className={styles.list}>Beauty Essence is 10 meters down Well Court on your right</li>
                            <li className={styles.list}>It will take approx. 10 mins. from Bank station</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.996080132067!2d-0.09565942299704551!3d51.513287910272666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035565922d43%3A0x685c1da405f593a9!2sWell%20Ct%2C%20City%20of%20London%2C%20London%20EC4M%209DN!5e0!3m2!1sen!2suk!4v1739298710158!5m2!1sen!2suk"
                                title='map'
                                 allowFullScreen=""
                                 loading="lazy"
                                 className={styles.map}
                                 referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToFindUs
