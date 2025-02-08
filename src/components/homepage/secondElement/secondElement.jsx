import React, { useEffect, useState } from "react";
import styles from './secondElement.module.css';
import { useNavigate, Link } from "react-router-dom";
import { massages } from '../../../data/data';
import border from '../../../assets/others/horizontal_line.png';
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";
import Button from "../../button/button";
import Aos from "aos";
import 'aos/dist/aos.css';

const SecondElement = ({ selectService }) => {

    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: '1000', once: true, disable: () => window.innerWidth < 767 })
    }, [])

    const massage = massages.slice(0, 4).map(m => <div data-aos='fade-down-right' data-aos-easing='ease-out-cubic' data-aos-delay={250*m.id} key={m.id} className={styles.item}>
        <div className={styles.imgContainer}>
            <div className={styles.imgRadius}>
                <img alt={m.type} src={m.img} className={styles.img}/>
            </div>
        </div>
        <div className={styles.banner}>
            <h3 className={styles.headingMediumBlack}>{m.type}</h3>
            <span className={styles.textExtraSmallBlack}>{m.text}</span>
            <Button text={'Book now'} handler={() => navigateHandler(m.type)}/>
        </div>
    </div>)

    const navigateHandler = async (target) => {
        await selectService(target);
        navigate('/bookings/service');
    }
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
                <div className={styles.body}>
                    <div className={styles.itemContainer}>
                        {massage}
                    </div>
                </div>
                <div className={styles.linkContainer}>
                    <Link to={'/massages'} className={styles.link}>Show all massages</Link>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        selectService: (value) => dispatch({ type: actions.selectService, payload: value }),
    }
}

export default connect(null, mapDispatchToProps) (SecondElement);
