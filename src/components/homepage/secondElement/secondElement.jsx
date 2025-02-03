import React from "react";
import styles from './secondElement.module.css';
import { Link } from "react-router-dom";
import { massages } from '../../../data/data';
import border from '../../../assets/others/horizontal_line.png';

const SecondElement = () => {
    const massage = massages.map(m => <div key={m.id} className={styles.item}>
        <div className={styles.imgContainer}>
            <img alt={m.type} src={m.img} className={styles.img}/>
        </div>
        <div className={styles.banner}>
            <h3 className={styles.headingMediumPink}>{m.type}</h3>
            <span className={styles.textExtraSmallBlack}>{m.text}</span>
            <Link to={''} className={styles.btn}>book now</Link>
        </div>
    </div>)
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <h3 className={styles.headingSmallPink}>Welcome to Our</h3>
                    <h2 className={styles.headingLargeBlack}>massage therapy center</h2>
                    <span className={styles.borderContainer}>
                        <img alt='massage' src={border} className={styles.border}/>
                    </span>
                    <span className={styles.textSmallBlack}>You deserve better than a rushed massage by a rookie herapist in a place that makes you feel more stressed</span>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.itemContainer}>
                        {massage}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondElement;
