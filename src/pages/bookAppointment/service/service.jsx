import React from "react";
import styles from './service.module.css';

const Service = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h3 className={styles.headingSmallBlack}>Please select a service</h3>
            </div>
            <div className={styles.container}>
                <select defaultValue={'Select service'} className={styles.select}>
                    <option disabled className={styles.option}>Select service</option>
                    <option className={styles.option} value={'Sports massage'}>Sports massage</option>
                    <option className={styles.option} value={'HS massage'}>HS massage</option>
                    <option className={styles.option} value={'Massage therapy'}>Massage therapy</option>
                    <option className={styles.option} value={'Physiotherapy'}>Physiotherapy</option>
                </select>
            </div>
        </div>
    )
}

export default Service;
