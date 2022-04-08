import React, {useState} from 'react';
import menu from '../../img/menu.svg';
import styles from './MenuBar.module.css';
import Button from '../Button/Button';
import arrow from '../../img/arrow.svg';
import arrowUp from '../../img/arrowUp.svg';
import cancel from '../../img/cancel.svg';

const MenuBar = ({classes}) => {
  const [active, setActive] = useState(false);
  const handleButtonClick = () => {
    setActive(prev => !prev);
  }
  return (
    <div className={[styles.container, classes].join(' ')}>  
      <button onClick={handleButtonClick} className={[styles['menu-btn'], active ? styles.active : ''].join(' ')}>
        <img src={active ? cancel : menu} alt="menu"/>
      </button>
      {active && (
        <div className={styles['drop-down']}>
          <img className={styles['arrow-up']} src={arrowUp} alt="arrow"/>
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Projects</h2>
          <Button 
            text="Contact" 
            action={() => console.log("hi")}
            color="green"
            icon={arrow}
            iconPos="right"
          />
        </div>
      )}
    </div>
  )
}

export default MenuBar