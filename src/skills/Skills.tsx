import React from "react";
import styles from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import styleTitle from "../common/styles/FontStyles.module.css";


export type ISkillType = {
    title: string
    description: string
}

const skills: ISkillType[] = [
    {
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae consequuntur dolorum  eaque et'
    },
    {
        title: 'Redux',
        description: 'Adipisci aliquid consequuntur dolores dolorum eius enim eos facilis illum mollitia obcaecati officiis'
    },
    {
        title: 'Typescript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae consequuntur eaque et'
    },
]

function Skills() {

    const skillsList = skills.map(s => (
        <Skill title={s.title} description={s.description} key={(Math.random() * 10)}/>
    ))

    return <div className={`${styles.skillsBlock} ${styleContainer.containerOutside}`}>
        <div className={`${styles.container} ${styleContainer.container}`}>
            <h2 className={styleTitle.title}>My skills</h2>
            <div className={styles.skills}>
                {skillsList}
            </div>
        </div>
    </div>
}

export default Skills;