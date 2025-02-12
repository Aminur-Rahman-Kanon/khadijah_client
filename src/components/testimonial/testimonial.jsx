import React from 'react';
import './testimonial.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import p1 from '../../assets/testimonial/p1.jpg';
import p2 from '../../assets/testimonial/p2.jpg';
import p3 from '../../assets/testimonial/p3.jpg';
import border from '../../assets/others/horizontal_line.png';

const Testimonial = () => {
    
    return (
        <div className='wrapper'>
            <div className='top'>
                <h1 className='headingLargeBlack'>What our client says...</h1>
            </div>
            <div class="swiper-pagination"></div>
                <div className='swiper-wrapper'>
                    <Carousel autoPlay={true}
                            infiniteLoop={true}
                            interval={4500}
                            transitionTime={1000}
                            showStatus={false}
                            showThumbs={false}
                            preventMovementUntilSwipeScrollTolerance={true}
                            swipeScrollTolerance={50}
                            className="carousel-container">
                        <div className='bannerMain'>
                            <div className='bannerBg'>
                                <div className='bgContainer'>
                                    <div className='profileContainer'>
                                        <img src={p1} alt='person' className='profile' />
                                    </div>
                                </div>
                                <div className='borderContainer'>
                                    <img src={border} alt='border' className='border'/>
                                </div>
                                <p className='textSmallBlack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam iure voluptates magni eius. Deserunt sunt doloribus a sint necessitatibus, natus nisi quisquam error cum, repellat tenetur commodi delectus hic!
                                    Commodi numquam aliquid explicabo dolore aspernatur vero at natus, ipsum aperiam sunt. Blanditiis suscipit rem aliquid nisi ratione delectus consequatur iure nobis, ipsam quod porro doloremque numquam cum quasi odio.\
                                </p>
                                <div className='borderLineContainer'>
                                    <hr className='borderLine'/>
                                </div>
                                <div className='nameContainer'>
                                    <h3 className='headingMediumGray'>Issac newton</h3>
                                    <h3 className='headingMediumGray'>greter london</h3>
                                </div>
                            </div>
                        </div>
                        <div className='bannerMain'>
                        <div className='bannerBg'>
                                <div className='bgContainer'>
                                    <div className='profileContainer'>
                                        <img src={p2} alt='person' className='profile' />
                                    </div>
                                </div>
                                <div className='borderContainer'>
                                    <img src={border} alt='border' className='border'/>
                                </div>
                                <p className='textSmallBlack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam iure voluptates magni eius. Deserunt sunt doloribus a sint necessitatibus, natus nisi quisquam error cum, repellat tenetur commodi delectus hic!
                                    Commodi numquam aliquid explicabo dolore aspernatur vero at natus, ipsum aperiam sunt. Blanditiis suscipit rem aliquid nisi ratione delectus consequatur iure nobis, ipsam quod porro doloremque numquam cum quasi odio.
                                </p>
                                <div className='borderLineContainer'>
                                    <hr className='borderLine'/>
                                </div>
                                <div className='nameContainer'>
                                    <h3 className='headingMediumGray'>albert einstein</h3>
                                    <h3 className='headingMediumGray'>greter london</h3>
                                </div>
                            </div>
                        </div>
                        <div className='bannerMain'>
                        <div className='bannerBg'>
                                <div className='bgContainer'>
                                    <div className='profileContainer'>
                                        <img src={p3} alt='person' className='profile' />
                                    </div>
                                </div>
                                <div className='borderContainer'>
                                    <img src={border} alt='border' className='border'/>
                                </div>
                                <h2 className='headingSmallBlack'>Peter Brance</h2>
                                <p className='textSmallBlack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam iure voluptates magni eius. Deserunt sunt doloribus a sint necessitatibus, natus nisi quisquam error cum, repellat tenetur commodi delectus hic!
                                    Commodi numquam aliquid explicabo dolore aspernatur vero at natus, ipsum aperiam sunt. Blanditiis suscipit rem aliquid nisi ratione delectus consequatur iure nobis, ipsam quod porro doloremque numquam cum quasi odio.
                                </p>
                                <div className='borderLineContainer'>
                                    <hr className='borderLine'/>
                                </div>
                                <div className='nameContainer'>
                                    <h3 className='headingMediumGray'>albert einstein</h3>
                                    <h3 className='headingMediumGray'>greter london</h3>
                                </div>
                            </div>
                        </div>
                </Carousel>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
    )
}

export default Testimonial;
  