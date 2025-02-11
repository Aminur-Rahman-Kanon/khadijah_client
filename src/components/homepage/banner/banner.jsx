import React, { useEffect } from 'react';
import styles from './banner.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import banner from '../../../assets/video/video.mp4'

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: '1500', once: false });
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.bg}>
                <video src={banner} loop playsInline autoPlay muted className={styles.video} />
            </div>
            <div className={styles.banner}>
                {/* <div className={styles.imgContainer}>
                    <img src={ sample } alt='massage' className={styles.img}/>
                </div> */}
                <h1 className={styles.headingLargeWhite}>
                    <span data-aos="fade-right" data-aos-delay="500" data-aos-offset="-200" className={styles.headingHead}>DIVINE TOUCH</span>
                    <span data-aos="fade-right" data-aos-delay="1000" data-aos-offset="-200" className={styles.headingMiddle}>BY</span>
                    <span data-aos="fade-right" data-aos-delay="1500" data-aos-offset="-200" className={styles.headingTail}>OLA</span>
                </h1>
                <h3 data-aos="fade-right" data-aos-delay="2000" data-aos-offset="-200" className={styles.headingSmallWhite}>A place of well-being where you reset, recharge and restore. </h3>
                <div className={styles.btn}>
                    {/* <BookNow path={'/bookings/'}/> */}
                </div>
            </div>
        </div>
    )
}

export default Banner;
