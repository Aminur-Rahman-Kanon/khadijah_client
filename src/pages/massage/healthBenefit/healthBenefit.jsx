import React, { useState, useEffect } from 'react';
import styles from './healthBenefit.module.css';
import bg from '../../../assets/healthBenefit/bg_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const HealthBenefit = () => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
    }, [])

    const displayEl = innerWidth <= 767 ? <div className={styles.smallerWidth}>
        <div className={styles.bgContainer}>
            <img src={bg} alt='massage' className={styles.bg} />
        </div>
        <div className={styles.itemsContainer}>
            <div className={styles.smallLeftItems}>
                <div className={styles.leftItem}>
                    <span className={styles.dot}>
                        <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                    </span>
                    <span className={styles.textSmallBlackLeft}>It counteracts all that sittings you do</span>
                </div>
                <div className={styles.leftItem}>
                    <span className={styles.dot}>
                        <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                    </span>
                    <span className={styles.textSmallBlackLeft}>It eases muscle pain</span>
                </div>
                <div className={styles.leftItem}>
                    <span className={styles.dot}>
                        <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                    </span>
                    <span className={styles.textSmallBlackLeft}>It soothes anxiety and depression</span>
                </div>
            </div>
            <div className={styles.smallRightItems}>
                <div className={styles.rightItem}>
                    <span className={styles.dot}>
                        <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                    </span>
                    <span className={styles.textSmallBlackLeft}>It relieves headaches</span>
                </div>
                <div className={styles.rightItem}>
                    <span className={styles.dot}>
                        <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                    </span>
                    <span className={styles.textSmallBlackLeft}>It improves sleep</span>
                </div>
                <div className={styles.rightItem}>
                    <span className={styles.dot}>
                        <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                    </span>
                    <span className={styles.textSmallBlackLeft}>It boosts immunity</span>
                </div>
            </div>
        </div>
    </div>
    :
    <div className={styles.largerWidth}>
        <div className={styles.leftItems}>
            <div className={styles.leftItem}>
                <span className={styles.textSmallBlackLeft}>It counteracts all that sittings you do</span>
                <span className={styles.dot}>
                    <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                </span>
            </div>
            <div className={styles.leftItem}>
                <span className={styles.textSmallBlackLeft}>It eases muscle pain</span>
                <span className={styles.dot}>
                    <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                </span>
            </div>
            <div className={styles.leftItem}>
                <span className={styles.textSmallBlackLeft}>It soothes anxiety and depression</span>
                <span className={styles.dot}>
                    <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                </span>
            </div>
        </div>
        <div className={styles.bgContainer}>
            <img src={bg} alt="khadijah" className={styles.bg} />
        </div>
        <div className={styles.rightItems}>
            <div className={styles.rightItem}>
                <span className={styles.dot}>
                    <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                </span>
                <span className={styles.textSmallBlackRight}>It relievs headaches</span>
            </div>
            <div className={styles.rightItem}>
                <span className={styles.dot}>
                    <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                </span>
                <span className={styles.textSmallBlackRight}>It improves sleep</span>
            </div>
            <div className={styles.rightItem}>
                <span className={styles.dot}>
                    <FontAwesomeIcon icon={faCircle} className={styles.icon} />
                </span>
                <span className={styles.textSmallBlackRight}>It boosts immunity</span>
            </div>
        </div>
    </div>

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <h1 className={styles.headingLargeWhite}>Health Benefit</h1>
            </div>

            <div className={styles.body}>
                {displayEl}
            </div>
        </div>
    )
}

export default HealthBenefit;
