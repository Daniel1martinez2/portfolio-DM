import React, {useRef, useEffect} from 'react';
import styles from './HeroAside.module.css';
import {OrbitControls} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import Daniel from '../Daniel/Daniel';
import lines from '../../img/lines.svg';
import star from '../../img/star.svg';
import { gsap, Power3 } from "gsap";

const HeroAside = () => {
  const boxRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        x: '100%',        
        opacity: 0,
      },
      {
        opacity: 1,
        x: '0%',        
        ease: Power3.easeInOut,
        duration: .5,
        
      }
    );
  });
  return (
    <div className={styles.app} ref={boxRef}>  
      <img src={lines} alt="lines" className={styles.lines}/>
      <img src={star} alt="star" className={[styles.star, styles.up].join(' ')}/>
      <img src={star} alt="star" className={[styles.star, styles.down].join(' ')}/>
      <Canvas className={styles.canvas}>
        {/* <OrbitControls enableZoom={false} /> */}
        <ambientLight intensity={0.5}/>
        <directionalLight 
          position={[0, 0, 5]} 
          intensity={2}
        />
        
          <Daniel/>
          {/* <Box/> */}
        
      </Canvas>
    </div>
  )
}

export default HeroAside