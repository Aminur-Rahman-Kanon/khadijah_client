import React, { useEffect } from 'react';
import styles from './homepage.module.css';
import Banner from '../../components/homepage/banner/banner';
import SecondElement from '../../components/homepage/secondElement/secondElement';
import ThirdElement from '../../components/homepage/thirdElement/thirdElement';
import Services from '../../components/homepage/services/services';
import Map from '../massage/map/map';
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
            {/* <ThirdElement /> */}
            <Testimonial />
            {/* <Map /> */}
            <HowToFindUs />
            {/* <Services /> */}
        </div>
  )
}

export default Homepage;
