import React from 'react';
import styles from './Button.module.css';


const Button = ({icon, iconPos, text, action, color, textColor}) => {
  const verifyProp = (prop) => prop ? styles[prop] : '';
  return (
    <button 
      className={[styles.button, verifyProp(color), verifyProp(iconPos), verifyProp(textColor)].join(" ")}
      onClick={action}
    >
      <img src={icon} alt="arrow"/>
      <p>{text}</p>
    </button>
  )
}

export default Button