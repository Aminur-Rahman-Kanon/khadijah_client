import React from "react";
import styles from './sidedrawer.module.css';
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import Sociallink from "../socialLink/socialLink";
import { connect } from "react-redux";
import { actions } from "../../redux/actions";
import NestedList from "../navbar/nestedList/nestedList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Sidedrawer = (state) => {
    
    return (
        <div className={state.sidedrawer ? `${styles.wrapper} ${styles.open}` : styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.xContainer} onClick={ state.toggleSidedrawer }>
                    <span className={styles.text}>close</span>
                    <span className={styles.x}>x</span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.nav}>
                    <Navbar />
                </div>
                <div className={styles.socialLink}>
                    <Sociallink style={'largePink'}/>
                </div>
                <div className={state.nestedList ? `${styles.slider} ${styles.display}` : styles.slider}>
                    <div className={styles.pBtnLargeWhite}>
                        <span className={styles.pBtn} onClick={state.toggleNestedList}>
                            <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
                        </span>
                    </div>
                    <div className={styles.nestedListContainer}>
                        <NestedList />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sidedrawer: state.sidedrawer,
        nestedList: state.nestedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidedrawer: () => dispatch({ type: actions.TOGGLE_SIDEDRAWER }),
        toggleNestedList: () => dispatch({ type: actions.toggleNestedList })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidedrawer);
