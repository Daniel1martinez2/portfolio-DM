import React from 'react';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import hand from '../img/hand.svg';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';

const Home = ({styles}) => {
  return (
    <>
      <Header/>
      <Hero/>
      <div className={styles.animation}>
        <img className={styles.hand} src={hand} alt=""/>
      </div>
      <About/>
      <Projects/>
      <Technologies/>
    </>
  )
}

export default Home