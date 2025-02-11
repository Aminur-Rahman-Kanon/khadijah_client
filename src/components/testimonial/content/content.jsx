import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './content.module.css';

const Content = ({ data }) => {
  return (
    <div className={styles.container}>
        <span className={styles.textContainer}>
            {data.message}
        </span>
        <h2 className={styles.headingLargeBlack}>{data.name}</h2>
    </div>
  )
}

export default Content;
