import React, { useEffect } from 'react';
import styles from './homepage.module.css';
import Banner from '../../components/homepage/banner/banner';
import SecondElement from '../../components/homepage/secondElement/secondElement';
import Testimonial from '../../components/testimonial/testimonial';
import HowToFindUs from '../../components/howToFIndUs/howToFindUs';

const Homepage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
        <div className={styles.main}>
            <Banner />
            <SecondElement />
            <Testimonial />
            <HowToFindUs />
        </div>
  )
}

export default Homepage;
