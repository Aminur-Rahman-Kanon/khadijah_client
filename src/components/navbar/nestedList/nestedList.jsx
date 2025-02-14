import React from 'react';
import styles from './nestedList.module.css';
import { massage } from '../../../data/data';

const nestedList = Object.values(massage).map((m, i) => <li key={i} className={styles.list}>
    <a href={`/massage/${m.title}`} className={styles.nestedLink}>{m.title}</a>
</li>)

const NestedList = () => {
    return (
        <ul className={styles.nestedList}>
            {nestedList}
        </ul>
    )
}

export default NestedList
