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

    const displayFlexContainer = Object.values(massage).map((m, i) => <div key={i} className={styles.flexItem}>
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
        </div>
    )
}

export default About;
