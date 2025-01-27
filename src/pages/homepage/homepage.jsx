import React from 'react';
import styles from './homepage.module.css';
import Banner from '../../components/homepage/banner/banner';
import SecondElement from '../../components/homepage/secondElement/secondElement';
import ThirdElement from '../../components/homepage/thirdElement/thirdElement';
import Services from '../../components/homepage/services/services';

const Homepage = () => {
  return (
        <div className={styles.main}>
            <Banner />
            <SecondElement />
            <ThirdElement />
            <Services />
        </div>
  )
}

export default Homepage;
