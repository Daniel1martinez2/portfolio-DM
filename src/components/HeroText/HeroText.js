import React, {useRef, useEffect} from 'react';
import styles from './HeroText.module.css';
import rhcp from '../../img/rhcp.svg';
import Button from '../Button/Button';
import git from '../../img/git.svg';
import be from '../../img/be.svg';
import linkedIn from '../../img/in.svg';
import download from '../../img/download.svg';
import { gsap, Power3 } from "gsap";

const HeroText = () => {
    const boxRef = useRef();
    useEffect(() => {
      gsap.fromTo(
        boxRef.current,
        {
          'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          opacity: 0,
        },
        {
          opacity: 1,
          'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          ease: Power3.easeInOut,
          duration: 1,
          
        }
      );
    });
    return (
    <div className={styles['hero-text']} ref={boxRef}>
      <img className={styles['rhcp']} src={rhcp} alt="rhcp"/>
      <h1 className={styles['main-text']}>Designing Astonishing <b>Web</b> experiences</h1>
      <h3 className={styles['sub-text']}>I work with the React Ecosystem, and write to teach people how to rebuild and redefine fundamental concepts through mental models.</h3>
      <div className={styles['buttons']}>
        <Button
          text="Github" 
          action={() => console.log("hi")}
          color="no-color"
          icon={git}
          textColor="black"
        />
        <Button
          text="Behance" 
          action={() => console.log("hi")}
          color="no-color"
          icon={be}
          textColor="black"
        />
        <Button
          text="Linkedin" 
          action={() => console.log("hi")}
          color="no-color"
          icon={linkedIn}
          textColor="black"
        />
        <Button
          text="Resume" 
          action={() => console.log("hi")}
          color="green"
          icon={download}
        />
      </div>
    </div>
  )
}

export default HeroText