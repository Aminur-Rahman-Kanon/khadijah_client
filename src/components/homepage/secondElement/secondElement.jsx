import React from "react";
import styles from './secondElement.module.css';
import { Link } from "react-router-dom";
import m1 from '../../../assets/secondElement/1_1.jpg';
import m2 from '../../../assets/secondElement/2_1.jpg';
import m3 from '../../../assets/secondElement/3.jpg';
import m4 from '../../../assets/secondElement/4.jpg';
import border from '../../../assets/others/horizontal_line.png';

const SecondElement = () => {
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
                        <div className={styles.item}>
                            <div className={styles.imgContainer}>
                                <img alt='massage1' src={m1} className={styles.img}/>
                            </div>
                            <div className={styles.banner}>
                                <h3 className={styles.headingMediumPink}>sports massage</h3>
                                <span className={styles.textExtraSmallBlack}>Innovative bodywork</span>
                                <Link to={''} className={styles.btn}>book now</Link>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imgContainer}>
                                <img alt='massage1' src={m2} className={styles.img}/>
                            </div>
                            <div className={styles.banner}>
                                <h3 className={styles.headingMediumPink}>hs massage</h3>
                                <span className={styles.textExtraSmallBlack}>Uses smooth, heated stones</span>
                                <Link to={''} className={styles.btn}>book now</Link>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imgContainer}>
                                <img alt='massage1' src={m3} className={styles.img}/>
                            </div>
                            <div className={styles.banner}>
                                <h3 className={styles.headingMediumPink}>massage therapy</h3>
                                <span className={styles.textExtraSmallBlack}>Innovative bodywork</span>
                                <Link to={''} className={styles.btn}>book now</Link>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imgContainer}>
                                <img alt='massage1' src={m4} className={styles.img}/>
                            </div>
                            <div className={styles.banner}>
                                <h3 className={styles.headingMediumPink}>physiotherapy</h3>
                                <span className={styles.textExtraSmallBlack}>Innovative bodywork</span>
                                <Link to={''} className={styles.btn}>book now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondElement;
