import React from 'react';
import styles from './about.module.css';
import bg from '../../assets/about/bg.png';
import { Link } from 'react-router-dom';
import container1 from '../../assets/about/container1.png';
import container2 from '../../assets/about/container2.jpg';
import { massage } from '../../data/data';

const About = () => {

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
            <div className={styles.containerFluid}>
                <div className={styles.left}>
                    <h1 className={styles.headingSmallBlack}>our mission</h1>
                    <h2 className={styles.headingLargeBlack}>your health is our priority</h2>
                    <div className={styles.textContainer}>
                        <span className={styles.text}>Aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</span>
                        <span className={styles.text}>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</span>
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
        </div>
    )
}

export default About;
