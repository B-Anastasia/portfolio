import React from "react";
import styles from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Footer() {
    return <div className={`${styles.footer} ${styleContainer.center}`}>
            <a href={'#home'} className={styles.footer__logo}>Anastasia Boshniak</a>
            {/*<div className={styles.social_block}>*/}
            {/*</div>*/}
            <div className={styles.iconsBlock}>
                <ul className={styles.icons}>
                    <li className={styles.icon}>
                        <a target="_blank" href="https://facebook.com" title="Linkedin"
                           className={styles.icon__link}/>
                        Linkedin
                    </li>
                    <li className={styles.icon}>
                        <a target="_blank" href="https://twitter.com" title="Github"
                           className={styles.icon__link}/>
                        Github
                    </li>
                    <li className={styles.icon}>
                        <a target="_blank" href="https://pinterest.com" title="Email"
                           className={styles.icon__link}/>
                        Email
                    </li>
                    <li className={styles.icon}>
                        <a target="_blank" href="https://linkedin.com" title="Phone"
                           className={styles.icon__link}/>
                        Phone
                    </li>
                </ul>
            </div>
            <p className={styles.copyright}>Copyright © PROFI 2017 All Rights Reserved.</p>
        </div>
}

export default Footer;