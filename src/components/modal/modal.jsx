import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css'

const Modal = ({ children, modal }) => ReactDOM.createPortal(<div className={modal ? `${styles.modal} ${styles.display}` : styles.modal}>
    {children}
</div>, document.getElementById('modal'));

export default Modal;
