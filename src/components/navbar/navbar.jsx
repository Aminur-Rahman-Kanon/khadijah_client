import React from 'react';
import styles from './navbar.module.css';
import NestedList from './nestedList/nestedList';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';


const Navbar = ({ toggleNestedList }) => {
    return (
        <div className={styles.main}>
            <ul className={styles.container}>
                <li className={styles.item}>
                    <a href='/' className={styles.link}>
                        home
                    </a>
                </li>
                <li className={styles.item}>
                    <div className={styles.parentList} onClick={toggleNestedList}>
                        <span className={styles.text}>massages</span>
                    </div>
                    <div className={styles.nestedList}>
                        <NestedList />
                    </div>
                </li>
                <li className={styles.item}>
                    <a href='#' className={styles.link}>
                        about us
                    </a>
                </li>
                <li className={styles.item}>
                    <a href='#' className={styles.link}>
                        contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleNestedList: () => dispatch({ type: actions.toggleNestedList }),
    }
}

export default connect(null, mapDispatchToProps) (Navbar);
