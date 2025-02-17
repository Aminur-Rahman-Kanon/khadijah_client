import React, { useEffect } from 'react';
import styles from './faq.module.css';

const Faq = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.faq}>
                <div className={styles.faqTop}>
                    <h2 className={styles.headingLargeBlack}>faqs</h2>
                    <h3 className={styles.headingExtraSmallBlack}>Got questions? We've got answers</h3>
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

export default Faq;
