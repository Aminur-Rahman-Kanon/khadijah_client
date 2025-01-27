import React from "react";
import styles from './services.module.css';
import border from '../../../assets/others/horizontal_line.png';

const Services = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <h3 className={styles.headingSmallPink}>pricing plan</h3>
                <h2 className={styles.headingLargeBlack}>service & pricing</h2>
                <div className={styles.borderContainer}>
                    <img src={border} alt='border' className={styles.border} />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.headingContainer}>
                            <h3 className={styles.headerMediumBlack}>deep tissue massage</h3>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.dot}>...............</span>
                            <span className={styles.price}>£80.00</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        10 - 100 minute session (£80.00 - £132.50 per session).
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.headingContainer}>
                            <h3 className={styles.headerMediumBlack}>swedish massage</h3>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.dot}>...............</span>
                            <span className={styles.price}>£65.00</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        10 – 40 minute session with medium and long gliding strokes.
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.headingContainer}>
                            <h3 className={styles.headerMediumBlack}>therapeutic massage</h3>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.dot}>...............</span>
                            <span className={styles.price}>£50.00</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        If you feel tired and stressed after work.
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.headingContainer}>
                            <h3 className={styles.headerMediumBlack}>luxury group massage</h3>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.dot}>...............</span>
                            <span className={styles.price}>£100.00</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        30 minute session packages are great for bridal parties.
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.headingContainer}>
                            <h3 className={styles.headerMediumBlack}>lomi lomi massage</h3>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.dot}>...............</span>
                            <span className={styles.price}>£60.00</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        It is a traditional Hawaiian relaxing massage.
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.headingContainer}>
                            <h3 className={styles.headerMediumBlack}>prenatal massage</h3>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.dot}>...............</span>
                            <span className={styles.price}>£45.00</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        A relaxing side-lying massage designed to soothe sore muscles.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
