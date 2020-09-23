import React from "react";
import styles from './Header.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Nav from "../nav/Nav";

function Header() {
    return <div className={styles.header}>
        <div className={`${styles.container} ${styleContainer.container}`}>
            <Nav/>
        </div>
    </div>
}

export default Header;