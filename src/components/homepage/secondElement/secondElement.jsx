import React, { useEffect } from "react";
import styles from './secondElement.module.css';
import { useNavigate, Link } from "react-router-dom";
import { massage } from '../../../data/data';
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

    const displayMassage = Object.values(massage).slice(0, 3).map((m, i) => <div key={i} data-aos='fade-down-right' data-aos-easing='ease-out-cubic' data-aos-delay={250*i}className={styles.item}>
        <div className={styles.imgContainer}>
            <div className={styles.imgRadius}>
                <img alt={m.title} src={m.img} className={styles.img}/>
            </div>
        </div>
        <div className={styles.banner}>
            <h3 className={styles.headingMediumBlack}>{m.title}</h3>
            <span className={styles.textExtraSmallBlack}>{m.intro}</span>
            <Button text={'Book now'} handler={() => navigateHandler(m.title)}/>
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
                    <h3 className={styles.headingSmallPink}>Welcome to</h3>
                    <h2 className={styles.headingLargeBlack}>divine touch by ola</h2>
                    <span className={styles.borderContainer}>
                        <img alt='massage' src={border} className={styles.border}/>
                    </span>
                    <span className={styles.textSmallBlack}>Experience the art of true relaxation. At Divine Touch by Ola, every session is tailored to melt away stress, rejuvenate your body, and restore your inner balance—all in a serene space designed for your ultimate comfort."</span>
                </div>
                <div className={styles.body}>
                    <div className={styles.itemContainer}>
                        {displayMassage}
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
