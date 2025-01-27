import React, { useEffect, useState } from "react";
import styles from './progress.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Progress = () => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setInnerWidth(window.innerWidth))
    }, [])

    const displayProgress = innerWidth <= 767 ? <div style={{gap: '5px'}} className={styles.container}>
        <div className={styles.circleContainer}>
            <div className={styles.circle}>
                <FontAwesomeIcon icon={faCircle} className={styles.icon} />
            </div>
            <div className={styles.line}></div>
        </div>
        <div className={styles.circleContainer}>
            <div className={styles.circle}>
                <FontAwesomeIcon icon={faCircle} className={styles.icon} />
            </div>
            <div className={styles.line}></div>
        </div>
        <div className={styles.circleContainer}>
            <div className={styles.circle}>
                <FontAwesomeIcon icon={faCircle} className={styles.icon} />
            </div>
            <div className={styles.line}></div>
        </div>
        <div className={styles.circleContainer}>
            <div className={styles.circle}>
                <FontAwesomeIcon icon={faCircle} className={styles.icon} />
            </div>
            <div className={styles.line}></div>
        </div>
        <div className={styles.circleContainer}>
            <div className={styles.circle}>
                <FontAwesomeIcon icon={faCircle} className={styles.icon} />
            </div>
        </div>
    </div>
    :
    <div className={styles.container}>
        <div className={styles.progress}>
            <div className={styles.textSmallProgress}>1. Service</div>
            <div className={styles.progressBar}></div>
        </div>
        <div className={styles.progress}>
            <div className={styles.textSmallProgress}>2. Time</div>
            <div className={styles.progressBar}></div>
        </div>
        <div className={styles.progress}>
            <div className={styles.textSmallProgress}>3. Details</div>
            <div className={styles.progressBar}></div>
        </div>
        <div className={styles.progress}>
            <div className={styles.textSmallProgress}>4. Payment</div>
            <div className={styles.progressBar}></div>
        </div>
        <div className={styles.progress}>
            <div className={styles.textSmallProgress}>5. Done</div>
            <div className={styles.progressBar}></div>
        </div>
    </div>

    return (
        <div className={styles.wrapper}>
            {displayProgress}
        </div>
    )
}

export default Progress;
