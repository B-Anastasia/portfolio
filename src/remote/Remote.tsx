import React from "react";
import styles from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Remote() {
    return <div className={`${styles.remote} ${styleContainer.containerOutside}`}>
        <div className={`${styles.container} ${styleContainer.container}`}>
            <h3>Open for remote positions</h3>
            <button>Hire me</button>
        </div>
    </div>
}

export default Remote;