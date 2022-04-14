import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({img, title, description, style, className, link}) => {
  const navigate = useNavigate();

  return (
    <div 
      style={style} 
      className={[className || '',styles.card].join(' ')}
      onClick={() => {
        navigate(link)
      }}
    >
      <img src={img} alt="project"/>
      <div className={styles.info}>  
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard