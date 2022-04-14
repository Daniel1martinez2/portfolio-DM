import React from 'react'
import anima2 from '../../img/anima2.gif';
import styles from './About.module.css';
const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles['hands-container']}>
        <img src={anima2} alt="hands"/>
      </div>
      <div className={styles.text}>
        <h1>
          Designer & Developer
        </h1>
        <p>As Interactive Media Designer I'm highly qualified for designing and developing applications and experiences which positively impact the business value.</p>
        <div className={styles['tag-container']}>
          <div className={[styles.tag, styles.violet].join(' ')}>
            <p>Frontend</p>
          </div>
          <div className={[styles.tag, styles.red].join(' ')}>
            <p>Backend</p>
          </div>
          <div className={[styles.tag, styles.green].join(' ')}>
            <p>Scrum</p>
          </div>
          <div className={[styles.tag, styles.yellow].join(' ')}>
            <p>Ux/UI</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About