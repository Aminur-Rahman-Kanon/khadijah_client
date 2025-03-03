import React from 'react';
import styles from './banner.module.css';
import 'aos/dist/aos.css';
import banner3 from '../../../assets/banner/banner3.jpg';
import banner4 from '../../../assets/banner/banner3.png';
import banner2 from '../../../assets/banner/banner2.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BookNow from '../../bookNow/bookNow';
import Button from '../../button/button';


const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <Carousel autoPlay={true}
                    infiniteLoop={true}
                    interval={5000}
                    transitionTime={1000}
                    showStatus={false}
                    showThumbs={false}
                    preventMovementUntilSwipeScrollTolerance={true}
                    swipeScrollTolerance={50}
                    className="carousel-container">    
                <div className={styles.main}>
                    <div className={styles.bg}>
                        <img src={ banner3 } alt="massage" className={ styles.bg }/>
                    </div>
                    <div className={styles.banner}>
                        <h1 className={styles.headingLargeWhite}>
                            <span className={styles.headingHead}>Welcome to</span>
                            <span className={styles.headingMiddle}>Divine Touch by</span>
                            <span className={styles.headingTail}>Ola.</span>
                        </h1>
                        <h3 className={styles.headingSmallWhite}>A place of well-being where you Reset, Recharge and Restore.</h3>
                        <div className={styles.btn}>
                            <BookNow path={'/bookings/'}/>
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.bg}>
                        <img src={ banner2 } alt="massage" className={ styles.bg }/>
                    </div>
                    <div className={styles.banner}>
                        <h1 className={styles.headingLargeWhite}>
                            <span className={styles.headingHead}>Welcome to</span>
                            <span className={styles.headingMiddle}>Our</span>
                            <span className={styles.headingTail}>Welness sanctuary.</span>
                        </h1>
                        <h3 className={styles.headingSmallWhite}>You owe yourself this moment. book appointment in just a click!</h3>
                        <div className={styles.btn}>
                            <BookNow path={'/bookings/'}/>
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.bg}>
                        <img src={ banner4 } alt="massage" className={ styles.bg }/>
                    </div>
                    <div className={styles.banner}>
                        <h1 className={styles.headingLargeWhite}>
                            <span className={styles.headingHead}>Experience</span>
                            <span className={styles.headingMiddle}>the Ultimate in</span>
                            <span className={styles.headingTail}>Massage Therapy.</span>
                        </h1>
                        <h3 className={styles.headingSmallWhite}>Treat yourself to this moment—book your appointment with just one click!</h3>
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
