import React from 'react';
import './testimonial.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import border from '../../assets/others/horizontal_line.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    
    return (
        <div className='wrapper'>
            <div className='top'>
                <h1 className='headingLargeBlack'>What my clients say...</h1>
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
                                <div className='borderContainer'>
                                    <img src={border} alt='border' className='border'/>
                                </div>
                                <h3 className='headingSmallBlack'>Incredible Deep Tissue Massage!</h3>
                                <p className='textSmallBlack'>
                                    "I’ve had many deep tissue massages before, but Ola’s technique is truly next level! She
                                    knew exactly where to focus and worked out all the tension in my back and shoulders. I left
                                    feeling completely refreshed and pain-free. Highly recommend her to anyone looking for a
                                    skilled and knowledgeable therapist!"
                                </p>
                                <div className='borderLineContainer'>
                                    <hr className='borderLine'/>
                                </div>
                                <div className='nameContainer'>
                                    <h3 className='headingMediumGray'>Sarah M.</h3>
                                    <div className='ratingContainer'>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bannerMain'>
                        <div className='bannerBg'>
                                {/* <div className='bgContainer'>
                                    <div className='profileContainer'>
                                        <img src={p2} alt='person' className='profile' />
                                    </div>
                                </div> */}
                                <div className='borderContainer'>
                                    <img src={border} alt='border' className='border'/>
                                </div>
                                <h3 className='headingSmallBlack'>Best Massage I’ve Ever Had!</h3>
                                <p className='textSmallBlack'>
                                    "Ola is a miracle worker! Her deep tissue massage was both therapeutic and deeply
                                    relaxing. She took the time to understand my problem areas and applied just the right
                                    amount of pressure. My muscles feel looser, and the stiffness I had for weeks is gone. I will
                                    definitely be coming back!"
                                </p>
                                <div className='borderLineContainer'>
                                    <hr className='borderLine'/>
                                </div>
                                <div className='nameContainer'>
                                    <h3 className='headingMediumGray'>james l.</h3>
                                    <div className='ratingContainer'>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bannerMain'>
                        <div className='bannerBg'>
                                {/* <div className='bgContainer'>
                                    <div className='profileContainer'>
                                        <img src={p3} alt='person' className='profile' />
                                    </div>
                                </div> */}
                                <div className='borderContainer'>
                                    <img src={border} alt='border' className='border'/>
                                </div>
                                <h2 className='headingSmallBlack'>Sculpting Facial Massage That Works!</h2>
                                <p className='textSmallBlack'>
                                    "I had the sculpting facial massage with Ola, and WOW—what an experience! Not only was
                                    it incredibly relaxing, but I could also see an immediate lift and glow in my skin. My face
                                    looked more defined, and my jawline was noticeably tighter. It’s like a natural facelift without
                                    any needles! Can’t wait for my next session!"
                                </p>
                                <div className='borderLineContainer'>
                                    <hr className='borderLine'/>
                                </div>
                                <div className='nameContainer'>
                                    <h3 className='headingMediumGray'>emily r.</h3>
                                    <div className='ratingContainer'>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                        <div className='rating'>
                                            <FontAwesomeIcon icon={faStar} className='ratingIcon'/>
                                        </div>
                                    </div>
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
  