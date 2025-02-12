import React from 'react';
import styles from './main.module.css';
import Template from '../Template/template';
import SliderComponent from '../../SliderComponent/sliderComponent';
import { testimonial } from '../../../Data/data';

const Testimonial = () => {

    const displaySlider = testimonial.map(slr => <Template key={slr.id} profile={slr}/>)

    return (
        <section className={styles.main}>
            <div className={styles.titleWrapper}>
                <title className={styles.title1}>Client</title>
                <title className={styles.title2}>Testimonial</title>
            </div>
            <div className={styles.testimonial}>
                <SliderComponent item={displaySlider} />
            </div>
        </section>
    )
}

export default Testimonial;
