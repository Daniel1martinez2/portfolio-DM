import React, {useState, useEffect} from 'react'
import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import heury from '../../img/projects/heury.png';
import wetrain from '../../img/projects/wetrain.png';
import artgal from '../../img/projects/artgal.png';
import market from '../../img/projects/market.png';
import dmi from '../../img/projects/dmi.png';
import nodi from '../../img/projects/nodi.png';

import arrowLeft from '../../img/arrow-left.svg';
import arrowRight from '../../img/arrow-right.svg';

const Projects = () => {
  const [backPic, setBackPic] = useState(null);
  const [cards, setCards] = useState([
    {
      state: 'front',
      name: 'c1',
      image: heury,
      title: 'Heury',
      description: 'Web App based on React',
      style:{
      }
    },
    {
      state: 'right',
      name: 'c2',
      image: wetrain,
      title: 'We Train',
      description: 'Social Network App',
      style:{
      }
    },
    {
      state: 'right',
      name: 'c3',
      image: artgal,
      title: 'Art Gallery',
      description: 'E-Commerce',
      style:{
      }
    },
    {
      state: 'right',
      name: 'c4',
      image: market,
      title: 'UX/UI design case',
      description: 'Usability research',
      style:{
      }
    },
    {
      state: 'right',
      name: 'c5',
      image: dmi,
      title: 'Design contest',
      description: 'First place',
      style:{
      }
    },
    {
      state: 'right',
      name: 'c6',
      image: nodi,
      title: 'Community app',
      description: 'HCI research',
      style:{
      }
    },
  ])

  useEffect(() => {
    setCards(prev => prev.map((card, index) => {
      if(card.state === 'front'){
        return {...card,  style:{zIndex: (prev.length)+1}}
      }else if(card.state === 'right'){
        return {...card, style:{zIndex: (prev.length-index)+1}}
      }else{
        return {...card, style:{zIndex: 1}}
      }
    }))
  }, []);

  useEffect(() => {
    setBackPic( cards.find(card => card.state === 'front').image );
  }, [cards]);

  const handleRightClick = () => {
    if(cards[cards.length - 1].state === 'front') return;
    const copy = cards;
    const front =cards.findIndex(card => card.state === 'front');
    copy[front] = {...copy[front], state: 'left'}
    copy[front + 1] = {...copy[front + 1], state: 'front'}
    
    setCards(copy.map((card, index) => {
      if(card.state === 'front'){
        return {...card, style:{zIndex: (copy.length)+1}}
      }else if(card.state === 'right'){
        return {...card, style:{zIndex: (copy.length-index)+1}}
      }else{
        return {...card, style:{zIndex: 1}}
      }
    }))
  }

  const  handleLeftClick = () => {
    // console.log('click')
    if(cards[0].state === 'front') return;
    const copy = cards;
    const front =cards.findIndex(card => card.state === 'front');
    copy[front] = {...copy[front], state: 'right'}
    copy[front - 1] = {...copy[front - 1], state: 'front'}
    setCards(copy.map((card, index) => {
      if(card.state === 'front'){
        return {...card, style:{zIndex: (copy.length)+1}}
      }else if(card.state === 'right'){
        return {...card, style:{zIndex: (copy.length-index)+1}}
      }else{
        return {...card, style:{zIndex: 1}}
      }
    }))
    // console.log(copy, cards)
  }

  return (
    <div className={styles['main-container']} id="projects">
      <h1 className={styles['main-title']}>Highlight Projects</h1>
      <div 
        className={styles['projects-container']}
        style={{
          backgroundImage: 'url(' + backPic +')'
        }}
      >
        <img onClick={handleLeftClick} className={styles['arrow']} src={arrowLeft} alt=""/>
        <div className={styles['card-container']}>  
          {cards.map(card => (
            <ProjectCard 
            img={card.image}
            title={card.title}
            description={card.description}
            key={card.name}
            className={styles[card.state]}
            style={card.style}
            />
            ))}
        </div>
        <img onClick={handleRightClick} className={styles['arrow']} src={arrowRight} alt=""/>
        {/* <img src={backPic} alt="" className={styles['img-back']}/> */}
      </div>
    </div>
  )
}

export default Projects