import React from "react";
import styles from './topbar.module.css';
import Logo from '../logo/logo';
import Navbar from "../navbar/navbar";
import BookNow from "../bookNow/bookNow";

const Topbar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.orderLink}>
                <BookNow />
            </div>
        </div>
    )
}

export default Topbar;
