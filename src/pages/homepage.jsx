import React from 'react';
import styles from './homepage.module.css';
import Banner from '../components/banner/banner';

const Homepage = () => {
  return (
        <div className={styles.main}>
            <Banner />
        </div>
  )
}

export default Homepage;
