import React, { useEffect } from 'react';
import styles from './about.module.css';
import bg from '../../assets/about/bg.png';
import { Link } from 'react-router-dom';
import container1 from '../../assets/about/container1.png';
import container2 from '../../assets/about/container2.jpg';
import { massage } from '../../data/data';
import admin from '../../assets/others/admin.jpeg';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const displayFlexContainer = Object.values(massage).map(m => <div className={styles.flexItem}>
        <div className={styles.flexBgContainer}>
            <div className={styles.flexRadius}>
                <img src={m.img} alt={m.title} className={styles.flexBg} />
            </div>
        </div>
        <div className={styles.flexTextContainer}>
            <h2 className={styles.headingMediumBlack}>{m.title}</h2>
            <span className={styles.text}>{m.intro}</span>
        </div>
    </div>)

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgContainer}>
                <img src={bg} alt='massage' className={styles.bg}/>
            </div>

            <div className={styles.containerFluidVertical}>
                <div className={styles.top}>
                    <div className={styles.profileContainer}>
                        <img src={admin} alt='ola' className={styles.profile} />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h1 className={styles.headingLargeBlack}>about me - ola</h1>
                    <h2 className={styles.headingSmallBlack}>Sports Massage Therapist & Beauty Expert</h2>
                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            I am an experienced sports therapist and highly skilled beauty expert, with over a decade of
                            expertise in the industry. My signature treatments include an incredible sculpting facial
                            massage and an unrivalled deep tissue massage experience.
                        </p>
                        <p className={styles.text}>With a degree in Sports Science, I specialise in a variety of massage techniques, including
                            rehabilitation, sports massage, and advanced deep tissue and soft tissue methods. I also
                            incorporate Proprioceptive Neuromuscular Facilitation (PNF) stretching into my practice,
                            demonstrating my commitment to holistic well-being and overall physical health.
                        </p>
                        <p className={styles.text}>I have refined my skills through years of experience working in some of the most prestigious
                            spas in the UK. Having worked in and managed five-star hotel spas, I have gained extensive
                            knowledge in luxury treatments and high-end client care. This experience has enabled me to
                            perfect my craft, ensuring that every treatment I offer is delivered with precision and
                            expertise.
                        </p>
                        <p className={styles.text}>
                            Massage is more than just a treatment for me—it is my passion and my purpose. I believe in
                            the profound impact of touch and its ability to heal, restore, and transform both body and
                            mind. My sculpting facial massage is one of my most sought-after treatments, not only for its
                            visible results but for the deep relaxation and rejuvenation it provides. This technique goes
                            beyond skincare; it works to condition and strengthen the facial muscles, improve circulation,
                            and enhance the skin’s natural radiance. The result is a lifted, sculpted, and youthful
                            complexion—a non-invasive facelift effect achieved purely through the power of skilledhands. Every stroke, every technique I use is driven by my love for massage and my
                            dedication to making my clients look and feel their absolute best.
                        </p>
                        <p className={styles.text}>
                            Beyond my expertise in beauty and wellness, I am also a qualified nutritionist, allowing me to
                            take a truly holistic approach to my clients' care. Those who book a session with me can
                            expect a transformative and rejuvenating experience, with treatments tailored to their
                            specific needs. My approach combines personalised care, meticulous attention to detail, and
                            a deep dedication to enhancing overall well-being.
                        </p>
                        <p className={styles.text}>
                            With my diverse skill set, I provide a comprehensive and bespoke therapeutic experience
                            that integrates both physical and nutritional elements, ensuring my clients receive the
                            highest standard of care
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.containerFluidHorizontal}>
                <div className={styles.left}>
                    <h2 className={styles.headingSmallBlack}>our mission</h2>
                    <h2 className={styles.headingLargeBlack}>your health is our priority</h2>
                    <div className={styles.textContainer}>
                        <p className={styles.text}>Aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        <p className={styles.text}>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                    </div>
                    <div className={styles.btnContainer}>
                        <Link to={''} className={styles.btn}>Find out more</Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.multiBgContainer}>
                        <div className={styles.multiBgMain}>
                            <img src={container1} alt='massage' className={styles.multiBg} />
                        </div>
                        <div className={styles.multiBgFloat}>
                            <img src={container2} alt='massage' className={styles.multiBg} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerFlex}>
                <div className={styles.header}>
                    <h2 className={styles.headingSmallBlack}>what we provide</h2>
                    <h2 className={styles.headingLargeBlack}>our services</h2>
                </div>
                <div className={styles.flexBody}>
                    {displayFlexContainer}
                </div>
            </div>

            <div className={styles.faq}>
                <div className={styles.faqTop}>
                    <h2 className={styles.headingLargeBlack}>faqs</h2>
                    <h3 className={styles.headingExtraSmallBlack}>got questions? we've got answers</h3>
                </div>
                <div className={styles.faqBottom}>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>1. What types of massage do you offer?</h3>
                        <p className={styles.text}>
                            - We offer a range of massage services, including Swedish, deep tissue, hot
                            stone, prenatal, and aromatherapy massages. Check our service menu for
                            a full list of treatments.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>2. What is your cancellation policy?</h3>
                        <p className={styles.text}>
                            - We require at least 24 hours' notice for cancellations or rescheduling. If
                            you cancel within this time frame, you will receive a full refund or credit
                            towards a future appointment. Late cancellations or no-shows may be
                            subject to a fee.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>3. Do you offer refunds?</h3>
                        <p className={styles.text}>
                            - Yes, refunds are available if our cancellation policy is met. If you cancel at
                            least 24 hours before your appointment, we will process your refund or
                            issue a credit.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>4. What payment methods do you accept?</h3>
                        <p className={styles.text}>
                            - We accept cash and card payments. You can also prepay online when
                            booking your appointment.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>5. How early should I arrive for my appointment?</h3>
                        <p className={styles.text}>
                            - Please arrive at least 10 minutes before your scheduled appointment to
                            allow time for check-in and consultation.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>6. What should I wear for my massage?</h3>
                        <p className={styles.text}>
                            - Wear comfortable clothing. For most massages, you will undress to your
                            comfort level, and you will always be covered with a sheet or towel.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>7. Do I need to book in advance?</h3>
                        <p className={styles.text}>
                            - While we do accept walk-ins based on availability, we highly recommend
                            booking in advance to secure your preferred time.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>8. Can I request a specific massage therapist?</h3>
                        <p className={styles.text}>
                            - Yes, you can request a preferred therapist when booking, and we will do
                            our best to accommodate your request.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>9. Is gratuity included in the price?</h3>
                        <p className={styles.text}>
                            - No, gratuity is not included. If you are happy with your service, a 15-20%
                            tip is appreciated but not required.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>10. What if I have allergies or medical conditions?</h3>
                        <p className={styles.text}>
                            - Please let us know about any allergies, injuries, or medical conditions
                            before your appointment so we can tailor your treatment accordingly.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>11. Do you offer gift cards?</h3>
                        <p className={styles.text}>
                            - Yes! We offer gift cards that make a perfect gift for any occasion.
                        </p>
                    </div>
                    <div className={styles.faqContainer}>
                        <h3 className={styles.headingExtraSmallBlack}>12. Do you offer massage packages?</h3>
                        <p className={styles.text}>
                            - Yes! We offer massage packages that allow you to save money while
                            enjoying multiple sessions. Be sure to check our Packages tab for the best
                            deals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
