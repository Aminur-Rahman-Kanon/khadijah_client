import React, { useEffect, useState } from "react";
import styles from './progress.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { connect } from "react-redux";

const elIndex = {
    service: 1, time: 2, details: 3, payment: 4, done: 5
}

const Progress = ({ serviceElement }) => {
    
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setInnerWidth(window.innerWidth))
    }, [])

    useEffect(() => {
        const parent = document.querySelector(`.${styles.container}`);
        const  elements = parent.children;
        
        for (let i=0; i<elIndex[serviceElement]; i++){
            elements[i].children[1].style.backgroundColor = '#f9aab4'
        }
        
    }, [serviceElement])

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

const mapStateToProps = (state) => {
    return {
        serviceElement: state.serviceElement
    }
}

export default connect(mapStateToProps) (Progress);
