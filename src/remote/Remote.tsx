import React from "react";
import styles from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Remote() {
    return <div className={styles.remote}>
        <div className={`${styles.container} ${styleContainer.container}`}>
            Open for remote positions
        </div>
    </div>
}

export default Remote;