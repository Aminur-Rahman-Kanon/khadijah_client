import React from "react";
import styles from './sidedrawer.module.css';
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import Sociallink from "../socialLink/socialLink";
import { connect } from "react-redux";

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
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sidedrawer: state.sidedrawer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidedrawer: () => dispatch({ type: 'toggleSidedrawer' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidedrawer);
