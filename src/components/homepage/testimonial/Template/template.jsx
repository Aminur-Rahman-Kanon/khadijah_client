import React from 'react';
import styles from './template.module.css';
import Rating from '../Rating/rating';

const Template = ({ profile }) => {
    return (
        <div className={styles.templateWrapper}>
            <div className={styles.outerBox}></div>
            <div className={styles.innerBox}>
                <div className={styles.textContainer}>
                    <article className={styles.comment}>
                        {profile.comment}
                    </article>
                    <div className={styles.ratings}>
                        <Rating rating={profile.rating}/>
                    </div>
                    <title className={styles.title}>
                        - {profile.name}
                    </title>
                </div>
                <div className={styles.avatarContainer}>
                    <div className={styles.avatarOuter}></div>
                    <div className={styles.avatarMiddle}>
                        <div className={styles.avatarInner}>
                            <img src={profile.avatar} alt="tridiva it user" className={styles.avatar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template;
