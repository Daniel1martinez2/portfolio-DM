import React from 'react'
import HeroAside from '../HeroAside/HeroAside';
import HeroText from '../HeroText/HeroText';
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <HeroText/>
      <HeroAside/>
    </div>
  )
}

export default Hero