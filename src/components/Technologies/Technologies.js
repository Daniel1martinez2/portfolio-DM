import React from 'react';
import styles from './Technologies.module.css';
import mern from '../../img/icons/stack.svg';
import icon1 from '../../img/icons/icon1.svg';
import icon2 from '../../img/icons/icon2.svg';
import icon3 from '../../img/icons/icon3.svg';
import icon4 from '../../img/icons/icon4.svg';
import icon5 from '../../img/icons/icon5.svg';
import icon6 from '../../img/icons/icon6.svg';
import icon7 from '../../img/icons/icon7.svg';
import icon8 from '../../img/icons/icon8.svg';
import icon9 from '../../img/icons/icon9.svg';
import icon10 from '../../img/icons/icon10.svg';
import icon11 from '../../img/icons/icon11.svg';
import mac from '../../img/mac.gif';

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <div className={styles.info}>  
        <h1 className={styles['main-title']}>Technologies</h1>
        <h2 className={styles['sub-text']}>Developer</h2>
        <div className={styles.icons}>
          <img src={icon1} alt=""/>
          <img src={icon2} alt=""/>
          <img src={icon3} alt=""/>
          <img src={icon4} alt=""/>
          <img src={icon5} alt=""/>
          <img src={icon6} alt=""/>
          <img src={icon7} alt=""/>
          <img src={icon8} alt=""/>
          <img src={icon9} alt=""/>
          <img src={icon10} alt=""/>
          <img src={icon11} alt=""/>
        </div>
        <h2 className={styles['sub-text']}>Favorite Stack</h2>
        <img className={styles.stack} src={mern} alt=""/>
      </div>
      <div className={styles.visual}>
        <img src={mac} alt=""/>
        <div className={styles['decoration']}></div>
      </div>
    </div>
  )
}

export default Technologies