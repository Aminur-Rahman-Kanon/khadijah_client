import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './massage.module.css';
import bg2 from '../../assets/massages/2.jpg';
import Map from './map/map';
import Button from '../../components/button/button';

const Massage = () => {

    const { massageId } = useParams();

    return (
        <div className={styles.wrapper}>
            <div className={styles.singleBgWithText}>
                <div className={styles.singleBgContainer}>
                    <div className={styles.singleBgWithBanner}>
                        <img src={bg2} alt={massageId} className={styles.singleBg} />
                    </div>
                    <div className={styles.banner}>
                        <h1 className={styles.headingLargeWhite}>{massageId || 'no information'}</h1>
                    </div>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.left}>
                    <div className={styles.textContainer}>
                        <span className={styles.textSmallBlack}>From muscle-specific deep tissue massage, swedish massage and sports massage, our therapists draw from a variety of modalities to create each session specifically for you. A general health intake before your massage and post-session follow up may include self-care exercises or physician referrals. We keep confidential SOAP notes and individual treatment plans for all clients. Because our massage therapists are licensed and insured by the New York State Office of the Professions, you are in safe hands. For chronic pain management, best results are achieved with regular visits
                        </span>
                        <span className={styles.textSmallBlack}>Find out more about the therapeutic benefits of massage therapy.</span>
                        <h3 className={styles.headerSmallBlack}>Hassle free booking</h3>
                        <ul className={styles.listContainer}>
                            <li className={styles.list}>Tax included in price</li>
                            <li className={styles.list}>24-hour cancellation policy (read our FAQs for more details)</li>
                            <li className={styles.list}>If this is your first visit, make sure to fill out the new patient intake form online before you arrive.</li>
                            <li className={styles.list}>Regular client? Save up to 15% off the regular price with package plans.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.innerRight}>
                        <h3 className={styles.headerSmallBlack}>Our pricing</h3>
                        <ul className={styles.listContainer}>
                            <li className={styles.list}>
                                <span className={styles.label}>30 minutes: </span>
                                <span className={styles.label}>&#163;45</span>
                            </li>
                            <li className={styles.list}>
                                <span className={styles.label}>60 minutes: </span>
                                <span className={styles.label}>&#163;80</span>
                            </li>
                            <li className={styles.list}>
                                <span className={styles.label}>90 minutes: </span>
                                <span className={styles.label}>&#163;115</span>
                            </li>
                        </ul>
                        <div className={styles.btnContainer}>
                            <Button text={`Book ${massageId} massage`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Map />
            </div>
        </div>
    )
}

export default Massage;
