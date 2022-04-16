import React from 'react';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import hand from '../img/hand.svg';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import {motion} from 'framer-motion';

const Home = ({styles}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: 0,
      }}
      animate={{
        opacity: 1,
        width: "100%",
      }}
      exit={{
        opacity: 0,
        x: window.innerWidth, 
        transition: {duration: 0.1}
      }}
    >
      <Header/>
      <Hero/>
      <div className={styles.animation}>
        <img className={styles.hand} src={hand} alt=""/>
      </div>
      <About/>
      <Projects/>
      <Technologies/>
    </motion.div>
  )
}

export default Home