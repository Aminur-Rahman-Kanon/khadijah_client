import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './massage.module.css';
import Map from './map/map';
import Button from '../../components/button/button';
import HealthBenefit from '../massage/healthBenefit/healthBenefit';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import { massage } from '../../data/data';

const Massage = ({ selectService }) => {

    const { massageId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const btnHandler = async (value) => {
        await selectService(value);
        return navigate('/bookings/service', { replace: true });
    }

    //create an object of massage type then use it throwout the displayMassage
    const msg = massage[massageId.toLowerCase()] || {};

    const displayMassage = Object.keys(msg).length ?
        <div className={styles.left}>
            <h3 className={styles.headerSmallBlack}>What is {msg.title}</h3>
            <span className={styles.textSmallBlack}>{msg.intro}</span>

            {
                msg.benefit.length ?
                <div className={styles.item}>
                    <h3 className={styles.headerSmallBlack}>Benefits:</h3>
                    {<ul className={styles.listContainer}>
                        {msg.benefit.map((b, i) => <li key={i} className={styles.list}>{b}</li>)}
                    </ul>
                    }
                </div>
                :
                null
            }

            <div className={styles.item}>
                <h3 className={styles.headerSmallBlack}>Does it hurt?</h3>
                <p className={styles.textSmallBlack}>{msg.optional}</p>
            </div>

            {
                msg.preTreatment.length ?
                <div className={styles.item}>
                    <h3 className={styles.headerSmallBlack}>Pre-treatment:</h3>
                    <ul className={styles.listContainer}>
                        {msg.preTreatment.map((p, i) => <li key={i+10} className={styles.list}>{p}</li>)}
                    </ul>
                </div>
                :
                null
            }

            {
                msg.afterCare.length ?
                <div className={styles.item}>
                    <h3 className={styles.headerSmallBlack}>Aftercare:</h3>
                    <ul className={styles.listContainer}>
                        {msg.afterCare.map((c, i) => <li key={i+20} className={styles.list}>{c}</li>)}
                    </ul>        
                </div>
                :
                null
            }
        </div>
        :
        <div className={styles.left}>
            No information
        </div>

    return (
        <div className={styles.wrapper}>
            <div className={styles.singleBgWithText}>
                <div className={styles.singleBgContainer}>
                    <div className={styles.singleBgWithBanner}>
                        <img src={msg.img || null} alt={massageId} className={styles.singleBg} />
                    </div>
                    <div className={styles.banner}>
                        <h1 className={styles.headingLargeWhite}>{massageId || 'no information'}</h1>
                    </div>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.leftContainer}>
                    {displayMassage}
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
                            <Button text={`Book ${massageId} massage`} handler={() => btnHandler(massageId)}/>
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

const mapDispatchToprops = dispatch => {
    return {
        selectService: (value) => dispatch({ type: actions.selectService, payload: value })
    }
}

export default connect(null, mapDispatchToprops) (Massage);
