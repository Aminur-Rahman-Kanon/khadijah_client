import React from 'react';
import styles from './nestedList.module.css';
import { massages } from '../../../data/data';
import { Link } from 'react-router-dom';

const nestedList = massages.map(m => <li key={m.id} className={styles.list}>
    <Link to={`/massage/${m.type}`} className={styles.nestedLink}>{m.type}</Link>
</li>)

const NestedList = () => {
    return (
        <ul className={styles.nestedList}>
            {nestedList}
        </ul>
    )
}

export default NestedList
