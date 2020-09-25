import React from "react";
import styles from './Project.module.css';
import {IProjectType} from "../Projects";


function Project(props: IProjectType) {

    return (
        <div className={styles.project}>
            <div className={styles.image}>
                Hover me
                <div className={styles.icon}>Link</div>
            </div>
            <div className={styles.project__about}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Project;