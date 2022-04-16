import React from 'react';
import brandLarge from '../../img/logo-large.svg';
import styles from './Header.module.css';
import Button from '../Button/Button';
import arrow from '../../img/arrow.svg';
import MenuBar from '../MenuBar/MenuBar';
// import {Link} from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={brandLarge} alt="logo"/>
      <div>  
        <div className={styles.links}>
          <Link to="#about" smooth className={styles.link}>About</Link>
          <Link to="#projects" smooth className={styles.link}>Projects</Link>
          <Button 
            text="Contact" 
            action={() => window.open('mailto:daniel.martinezvillegas2001@gmail.com', '_blank')}
            color="green"
            icon={arrow}
            iconPos="right"
          />
        </div>
        <MenuBar classes={styles['menu-btn']}/>
      </div>
    </div>
  )
}

export default Header