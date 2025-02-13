import React from 'react';
import styles from './massages.module.css';
import bg from '../../assets/massages/5.jpg';
import { massage } from '../../data/data';
import { Link } from 'react-router-dom';
import border from '../../assets/others/horizontal_line.png';

const Massages = () => {

    const displayMassages = Object.values(massage).map(m => <div className={styles.item}>
        <div className={styles.smallBgContainer}>
            <img src={m.img} alt={m.title} className={styles.smallBg} />
        </div>
        <div className={styles.itemBanner}>
            <h2 className={styles.headingMediumBlack}>{m.title}</h2>
            <span className={styles.textSmallBlack}>{m.intro}</span>
            <div className={styles.linkContainer}>
                <Link to={`/massage/${m.title}`} className={styles.link}>Explore more</Link>
            </div>
        </div>
    </div>)
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.bgContainer}>
                    <img src={bg} alt="massages" className={styles.bg} />
                </div>
                <div className={styles.banner}>
                    <h1 className={styles.headingLargeWhite}>Massages</h1>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.headingContainer}>
                    <h2 className={styles.headingMediumBlack}>Welcome to our massages collection</h2>
                    <div className={styles.border}>
                        <img src={border} alt="border" className={styles.borderImg} />
                    </div>
                </div>
                <div className={styles.gridContainer}>
                    {displayMassages}
                </div>
            </div>
        </div>
    )
}

export default Massages;
