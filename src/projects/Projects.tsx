import React from "react";
import styles from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import styleTitle from '../common/styles/FontStyles.module.css'
import Project from "./project/Project";


export type IProjectType = {
    title: string
    description: string
}

const projects: IProjectType[] = [
    {
        title: 'Todolist with Redux',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae consequuntur dolorum  eaque et'
    },
    {
        title: 'Social network',
        description: 'Adipisci aliquid consequuntur dolores dolorum eius enim eos facilis illum mollitia obcaecati officiis'
    },
]

function Projects() {

    const projectsList = projects.map(s => (
        <Project title={s.title} description={s.description} key={(Math.random() * 10)}/>
    ))

    return <div className={`${styles.projectsBlock} ${styleContainer.containerOutside}`}>
        <div className={`${styles.container} ${styleContainer.container}`}>
            <h2 className={styleTitle.title}>My projects</h2>
            <div className={styles.projects}>
                {projectsList}
            </div>
        </div>
    </div>
}

export default Projects;