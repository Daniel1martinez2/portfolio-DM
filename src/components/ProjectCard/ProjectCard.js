import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({img, title, description, style, className}) => {
  return (
    <div style={style} className={[className || '',styles.card].join(' ')}>
      <img src={img} alt="project"/>
      <div className={styles.info}>  
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard