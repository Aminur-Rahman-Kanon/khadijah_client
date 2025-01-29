import React from "react";
import styles from './drawtoggle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { actions } from "../../redux/actions";

const Drawtoggle = (state) => {
    
    return (
        <div className={styles.wrapper} onClick={state.toggleSidedrawer}>
            <FontAwesomeIcon icon={faBarsStaggered} className={styles.icon} />
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
        toggleSidedrawer: () => dispatch({ type: actions.TOGGLE_SIDEDRAWER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Drawtoggle);
