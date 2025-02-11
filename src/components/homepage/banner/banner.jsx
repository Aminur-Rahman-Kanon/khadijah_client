import React, { useEffect } from 'react';
import styles from './banner.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import banner from '../../../assets/video/video.mp4';
import banner from '../../../assets/banner/banner.jpg';
import banner3 from '../../../assets/banner/banner3.jpg';
import banner4 from '../../../assets/banner/banner4.jpg';
import banner2 from '../../../assets/banner/banner2.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BookNow from '../../bookNow/bookNow';
import Button from '../../button/button';


const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: '1500', once: false });
    }, [])

    return (
        <div className={styles.wrapper}>
            <Carousel autoPlay={true}
                    infiniteLoop={true}
                    interval={3000}
                    transitionTime={1000}
                    showStatus={false}
                    showThumbs={false}
                    preventMovementUntilSwipeScrollTolerance={false}
                    swipeScrollTolerance={50}
                    className="carousel-container">    
                <div className={styles.main}>
                    <div className={styles.bg}>
                        {/* <video src={banner} loop playsInline autoPlay muted className={styles.video} /> */}
                        <img src={ banner3 } alt="massage" className={ styles.bg }/>
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
                            <BookNow path={'/bookings/'}/>
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.bg}>
                        {/* <video src={banner} loop playsInline autoPlay muted className={styles.video} /> */}
                        <img src={ banner2 } alt="massage" className={ styles.bg }/>
                    </div>
                    <div className={styles.banner}>
                        {/* <div className={styles.imgContainer}>
                            <img src={ sample } alt='massage' className={styles.img}/>
                        </div> */}
                        <h1 className={styles.headingLargeWhite}>
                            <span data-aos="fade-right" data-aos-delay="500" data-aos-offset="-200" className={styles.headingHead}>Welcome to</span>
                            <span data-aos="fade-right" data-aos-delay="1000" data-aos-offset="-200" className={styles.headingMiddle}>our</span>
                            <span data-aos="fade-right" data-aos-delay="1500" data-aos-offset="-200" className={styles.headingTail}>massage therapy center</span>
                        </h1>
                        <h3 data-aos="fade-right" data-aos-delay="2000" data-aos-offset="-200" className={styles.headingSmallWhite}>you owe yourself this moment. book appointment in just a click!</h3>
                        <div className={styles.btn}>
                            <BookNow path={'/bookings/'}/>
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.bg}>
                        {/* <video src={banner} loop playsInline autoPlay muted className={styles.video} /> */}
                        <img src={ banner4 } alt="massage" className={ styles.bg }/>
                    </div>
                    <div className={styles.banner}>
                        {/* <div className={styles.imgContainer}>
                            <img src={ sample } alt='massage' className={styles.img}/>
                        </div> */}
                        <h1 className={styles.headingLargeWhite}>
                            <span data-aos="fade-right" data-aos-delay="500" data-aos-offset="-200" className={styles.headingHead}>Explore</span>
                            <span data-aos="fade-right" data-aos-delay="1000" data-aos-offset="-200" className={styles.headingMiddle}>our</span>
                            <span data-aos="fade-right" data-aos-delay="1500" data-aos-offset="-200" className={styles.headingTail}>wide range of massage therapies</span>
                        </h1>
                        <h3 data-aos="fade-right" data-aos-delay="2000" data-aos-offset="-200" className={styles.headingSmallWhite}>you owe yourself this moment. book appointment in just a click!</h3>
                        <div className={styles.btn}>
                            <Button text={'Explore Massages'} handler={() => window.location.href = '/massages'}/>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner;
