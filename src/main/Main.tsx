import React from "react";
import styles from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Main() {
    return (
        <div id={'home'} className={`${styles.main} ${styleContainer.containerOutside}`}>
            <div className={`${styles.container} ${styleContainer.container}`}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I am Anastasia Boshniak</h1>
                    <p>I'm a Professional Front-End Developer</p>
                </div>
                <div className={styles.photo}>Photo</div>
            </div>
        </div>)
}

export default Main;

