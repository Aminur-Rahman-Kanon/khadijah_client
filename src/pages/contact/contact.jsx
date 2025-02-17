import React, { useEffect, useState } from 'react'
import styles from './contact.module.css';
import Button from '../../components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/modal/modal';

const Contact = () => {

    const [spinner, setSpinner] = useState(false);
    const [isBtnDisable, setIsbtnDisable] = useState(true);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('');

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (name && email && message) {
            setIsbtnDisable(false);
        }
        else {
            setIsbtnDisable(true);
        }
    }, [name, email, message])

    const submitHandler = async (e) => {
        e.preventDefault();
        setSpinner(true);

        await fetch('https://khadijah-server.onrender.com/contact-query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        }).then(res => res.json())
        .then(resp => {
            setSpinner(false);
            if (resp.status === 'success'){
                setModal(true);
                setStatus('success');
            }
        }).catch(error => {
            setSpinner(false);
            setModal(true);
            setStatus('failed')
        })
    }

    const displayMessage = status === 'success' ? <div className={styles.messageContainer}>
        <h2 className={styles.headingLargeBlack}>Submitted!</h2>
        <span className={styles.textSmallBlack}>We will get back to you soon.</span>
        <div className={styles.btnContainer}>
            <Button text={'Ok'} handler={() => window.location.reload()}/>
        </div>
    </div>
    :
    <div className={styles.messageContainer}>
        <h2 className={styles.headingLargeBlack}>Something went wrong!</h2>
        <span className={styles.textSmallBlack}>Please try again.</span>
        <div className={styles.btnContainer}>
            <Button text={'Ok'} handler={() => {
                setModal(false);
            }}/>
        </div>
    </div>
    return (
        <>
        <Modal modal={modal}>
            {displayMessage}
        </Modal>

        <div className={styles.wrapper}>
            <div className={styles.containerFluid}>
                <div className={styles.top}>
                    <div className={styles.mapContainer}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.996262102519!2d-0.09565942292940594!3d51.51328457181458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035565922d43%3A0x685c1da405f593a9!2sWell%20Ct%2C%20City%20of%20London%2C%20London%20EC4M%209DN!5e0!3m2!1sen!2suk!4v1739225758554!5m2!1sen!2suk"
                                allowFullScreen=""
                                loading="lazy"
                                className={styles.map}
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.header}>
                            <h1 className={styles.headingMediumBlack}>Contact us</h1>
                            <h2 className={styles.headingSmallBlack}>Reach out to us for any inquiry</h2>
                        </div>
                        <form className={styles.form}>
                            <div className={styles.inputContainer}>
                                <input type='text' placeholder='Your name' className={styles.input} onChange={(e) => setname(e.target.value)}/>
                            </div>
                            <div className={styles.inputContainer}>
                                <input type='email' placeholder='Your email' className={styles.input} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className={styles.textInputContainer}>
                                <textarea rows={10} placeholder='Message' className={styles.textInput} onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                            <div className={styles.btnContainer}>
                                <Button text={'submit'} isDisable={isBtnDisable} isPending={spinner} handler={ submitHandler } />
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.iconFluid}>
                        <div className={styles.iconContainer}>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                        </div>
                        <a href='' className={styles.textContainer}>
                            <h3 className={styles.headingExtraSmallBlack}>Location</h3>
                            <span className={styles.textExtraSmallBlack}>Beauty Essense as DP, 7 well court, london, england, EC4M 9DN</span>
                        </a>
                    </div>
                    <div className={styles.iconFluid}>
                        <div className={styles.iconContainer}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        </div>
                        <a href='' className={styles.textContainer}>
                            <h3 className={styles.headingExtraSmallBlack}>Email</h3>
                            <span className={styles.textExtraSmallBlack}>info@khadijah.net</span>
                        </a>
                    </div>
                    <div className={styles.iconFluid}>
                        <div className={styles.iconContainer}>
                            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                        </div>
                        <a href='tel:00447950999729' className={styles.textContainer}>
                            <h3 className={styles.headingExtraSmallBlack}>Phone</h3>
                            <span className={styles.textExtraSmallBlack}>+447950 999 729</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.border}></div>
        </div>
        </>
    )
}

export default Contact;
