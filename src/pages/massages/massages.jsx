import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './massages.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import bg1 from '../../assets/massages/1.jpg';
import bg2 from '../../assets/massages/2.jpg';
import bg3 from '../../assets/massages/3.jpg';
import bg4 from '../../assets/massages/4.jpg';
import bg5 from '../../assets/massages/5.jpg';
import bg6 from '../../assets/massages/6.jpg';

const Massages = () => {

    const { massageId } = useParams();
    console.log(massageId);
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.headingLargeBlack}>{massageId || 'no information'}</h1>
            </div>

            <div className={styles.singleBgWithText}>
                <div className={styles.singleBgContainer}>
                    <img src={bg1} alt={massageId} className={styles.singleBg} />
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptates, id quibusdam rerum voluptatibus minima quo, placeat asperiores obcaecati molestiae soluta velit quos, delectus blanditiis explicabo ad dolore nulla maxime?
                        Soluta veniam, dolorum libero eos assumenda exercitationem itaque animi deserunt? Incidunt delectus optio est temporibus placeat aut molestiae dolores, illo quod amet, consequuntur ullam explicabo rem aspernatur aliquid laboriosam harum.
                        Quaerat aliquam esse sapiente eaque nesciunt delectus est, at aut illum, temporibus aspernatur natus voluptatem, dolor mollitia cum maxime ea reprehenderit! Aut laboriosam consectetur eligendi id a illo culpa incidunt?
                    </span>
                    <h3 className={styles.headerSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero culpa ab nulla libero eveniet, quae deleniti</h3>
                    <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque similique quod praesentium ad porro modi minus corporis deleniti odio quae sint, doloremque tenetur beatae voluptate, ea impedit itaque dignissimos.
                        Quo similique labore temporibus facere, consequuntur neque rerum aliquam, aperiam numquam odio soluta itaque dolorum eos atque excepturi vitae repellat voluptatum. Earum nam accusantium commodi suscipit rerum reiciendis recusandae? Id.
                    </span>
                </div>
            </div>

            <div className={styles.multiBgWithText}>
                <div className={styles.multiBgContainer}>
                    <div className={styles.bgContainer}>
                        <img src={bg2} alt={massageId} className={styles.multiBg}/>
                    </div>
                    <div className={styles.bgContainer}>
                        <img src={bg3} alt={massageId} className={styles.multiBg}/>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ad, odio tenetur corrupti, libero, dolorem iste eum corporis nemo accusamus eius adipisci maiores totam! Praesentium dolorum omnis voluptates modi rerum?
                        Possimus numquam autem mollitia omnis hic et consequuntur temporibus dignissimos sit ducimus quaerat at quo nobis, fuga id cumque ut sunt tempora molestias eveniet saepe placeat! Earum eius modi repellendus.
                    </span>
                    <h3 className={styles.headerSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis deserunt tenetur, sint distinctio atque non expedita ad consequatur laudantium molestiae tempora assumenda officia alias quo quod maxime cupiditate modi!</h3>
                    <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, corporis vero in facilis omnis consectetur temporibus ab autem, provident corrupti deserunt rerum placeat animi sit possimus maiores cumque explicabo quae?
                        Dolor omnis neque corrupti amet possimus, atque exercitationem libero deserunt magnam deleniti soluta doloremque ipsa repellat, voluptatem fuga. Nostrum cumque tenetur aperiam quae quo perferendis libero atque aut quis amet.
                        Vel voluptas cumque consequuntur? Repellendus labore, perferendis sunt doloribus perspiciatis aspernatur dolor autem dolorem quia expedita, cum consequatur quaerat quam deserunt earum error. Assumenda rem nulla quis optio nostrum iste!
                    </span>
                </div>
            </div>

            <div className={styles.singleBgWithText}>
                <div className={styles.singleBgContainer}>
                    <img src={bg4} alt={massageId} className={styles.singleBg} />
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptates, id quibusdam rerum voluptatibus minima quo, placeat asperiores obcaecati molestiae soluta velit quos, delectus blanditiis explicabo ad dolore nulla maxime?
                        Soluta veniam, dolorum libero eos assumenda exercitationem itaque animi deserunt? Incidunt delectus optio est temporibus placeat aut molestiae dolores, illo quod amet, consequuntur ullam explicabo rem aspernatur aliquid laboriosam harum.
                        Quaerat aliquam esse sapiente eaque nesciunt delectus est, at aut illum, temporibus aspernatur natus voluptatem, dolor mollitia cum maxime ea reprehenderit! Aut laboriosam consectetur eligendi id a illo culpa incidunt?
                    </span>
                    <h3 className={styles.headerSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero culpa ab nulla libero eveniet, quae deleniti, aperiam voluptas obcaecati fuga est placeat autem quaerat ipsam vel in quos earum?</h3>
                    <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque similique quod praesentium ad porro modi minus corporis deleniti odio quae sint, doloremque tenetur beatae voluptate, ea impedit itaque dignissimos.
                        Quo similique labore temporibus facere, consequuntur neque rerum aliquam, aperiam numquam odio soluta itaque dolorum eos atque excepturi vitae repellat voluptatum. Earum nam accusantium commodi suscipit rerum reiciendis recusandae? Id.
                    </span>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.container}>
                    <h3 className={styles.headerSmallBlack}>Get in touch</h3>
                    <div className={styles.item}>
                        <div className={styles.iconContainer}>
                            <FontAwesomeIcon icon={faMapPin} className={styles.icon}/>
                        </div>
                        <span className={styles.textExtraSmallBlack}>Ground Floor, Light centre Monument, 36 St Mary at Hill, City of London, London EC3R 8DU</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.iconContainer}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        </div>
                        <span className={styles.textExtraSmallBlack}>khadijah.web.service@gmail.com</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.iconContainer}>
                            <FontAwesomeIcon icon={faMobile} className={styles.icon}/>
                        </div>
                        <span className={styles.textExtraSmallBlack}>+447950 999 729</span>
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1629147387425!2d-0.0855446229037804!3d51.51022707181403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca34f55d801%3A0xe708cdf492ddae69!2sA%20to%20Zen%20Therapies!5e0!3m2!1sen!2suk!4v1738632978945!5m2!1sen!2suk"
                            allowfullscreen=""
                            loading="lazy"
                            className={styles.map}
                            referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Massages;
