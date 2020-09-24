import React from "react";
import styles from './Skill.module.css';
import {ISkillType} from "../Skills";


function Skill(props:ISkillType) {
    return <div className={styles.skill}>
        <div className={styles.icon}></div>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
    </div>
}

export default Skill;