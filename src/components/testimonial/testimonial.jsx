import React from 'react';
import './testimonial.css';
import styles from './testimonial.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { testimonial } from '../../data/data';
import Content from './content/content';

const Testimonial = () => {

    
    return (
        <div className='wrapper'>
            <div className='top'>
                <h1 className='headingLargeWhite'>What our client says...</h1>
            </div>    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-scrollbar"></div>
            <div className='swiper-wrapper'>
            <Carousel autoPlay={true}
                    infiniteLoop={true}
                    interval={3000}
                    transitionTime={1000}
                    showStatus={false}
                    showThumbs={false}
                    preventMovementUntilSwipeScrollTolerance={true}
                    swipeScrollTolerance={50}
                    className="carousel-container">
                <div className={styles.bannerMain}>
                    <div className={styles.bannerBg}>
                        <h2 >Peter Brance</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam iure voluptates magni eius. Deserunt sunt doloribus a sint necessitatibus, natus nisi quisquam error cum, repellat tenetur commodi delectus hic!
                        Commodi numquam aliquid explicabo dolore aspernatur vero at natus, ipsum aperiam sunt. Blanditiis suscipit rem aliquid nisi ratione delectus consequatur iure nobis, ipsam quod porro doloremque numquam cum quasi odio.</p>
                    </div>
                </div>
                <div className={styles.bannerMain}>
                <div className={styles.bannerBg}>
                        <h2 >Peter Brance</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam iure voluptates magni eius. Deserunt sunt doloribus a sint necessitatibus, natus nisi quisquam error cum, repellat tenetur commodi delectus hic!
                        Commodi numquam aliquid explicabo dolore aspernatur vero at natus, ipsum aperiam sunt. Blanditiis suscipit rem aliquid nisi ratione delectus consequatur iure nobis, ipsam quod porro doloremque numquam cum quasi odio.</p>
                    </div>
                </div>
                <div className={styles.bannerMain}>
                <div className={styles.bannerBg}>
                        <h2 >Peter Brance</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam iure voluptates magni eius. Deserunt sunt doloribus a sint necessitatibus, natus nisi quisquam error cum, repellat tenetur commodi delectus hic!
                        Commodi numquam aliquid explicabo dolore aspernatur vero at natus, ipsum aperiam sunt. Blanditiis suscipit rem aliquid nisi ratione delectus consequatur iure nobis, ipsam quod porro doloremque numquam cum quasi odio.</p>
                    </div>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Testimonial;
  