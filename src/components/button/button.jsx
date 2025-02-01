import React from "react";
import styles from './button.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Button = ({ isDisable, isPending, text, handler }) => {
    return (
        <button disabled={isDisable} className={styles.btn} onClick={handler}>
            {
                isPending ? <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.icon} />
                :
                text

            }
        </button>
    )
}

export default Button;
