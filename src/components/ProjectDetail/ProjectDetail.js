import React, {useState, useRef} from 'react';
import styles from './ProjectDetail.module.css';
import arrow from '../../img/arrow-left-black.svg';
import {Link, useParams} from 'react-router-dom';
import { gsap, Power3 } from "gsap";
import {data as papersData} from '../../util/data.js';
import { Navigate } from 'react-router-dom';

const Video = ({vid, style, isThumb}) => {
  return (
    <video className={style} width="100%" height="100%" loop={true} autoPlay={!isThumb}>
      <source src={vid} type="video/mp4"/>
    </video>
  )
}

const ProjectDetail = () => {
  const {projectId} = useParams(); 
  const data = papersData.find(paper => paper.id === projectId);
  const [currentPrev, setCurrentPrev] = useState(data?.previews[0] || null);
  const [thumbs, setThumbs] = useState(data?.previews.map((p, index) => {
    const state = index === 0 ? true : false;
    return {
      ...p, 
      state
    }
  }) || null);
  const boxRef = useRef();

  if(!data){
    console.log('efe', data);
    return  <Navigate replace to="/" />
  }
  const activateTransition = () => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 1,
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: Power3.easeInOut,
        duration: .8,
        
      },
      {
        'clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        opacity: 1,
      }
    );  
  }
  return (
    <>
      <div className={styles.header}>
        <Link to="/" className={styles.home}>
          <img src={arrow} alt=""/>
          <h2>Home</h2>
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles['title-section']}>
            <h1>{data.name}</h1>
          </div>
          <div className={styles['preview-container']}>
            <div className={styles.preview}>
              <div className={styles.cover} ref={boxRef}></div>
              {
                currentPrev.type === 'vid' ? <Video isThumb={false} style={styles.prev} vid={currentPrev.prev}/> : <img src={currentPrev.prev} alt="" className={styles.prev}/>
              }
            </div>
            <div className={styles.thumbnails}>
              {thumbs.map((prev, index) => {
                return (
                  <div 
                    className={[styles.thumbnail, prev.state? styles.active : ''].join(' ')} 
                    key={Math.random()}
                    onClick={(e) => {
                      activateTransition();
                      setCurrentPrev(prev);
                      setThumbs(prev => {
                        return prev.map((p, i) => {
                          if(index === i){
                            return {...p, state: true}
                          }else{
                            return {...p, state: false}
                          }
                        })
                      })
                    }}
                  >
                    {
                      prev.type === 'vid' ? <Video isThumb={true} style={styles.prev} vid={prev.prev}/> : <img src={prev.prev} alt="" className={styles.prev}/>
                    }
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles['links-container']}>
            <h3>Links</h3>
            <div className={styles['links']}>
              {data.links.map(l => (
                <a key={l.site} target="_blank" rel="noreferrer" href={l.link}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.18639 10.7541C1.02781 10.5955 0.938721 10.3804 0.938721 10.1561C0.938721 9.93188 1.02781 9.7168 1.18639 9.55822L8.11394 2.63066L2.98016 2.63186C2.86898 2.63186 2.75888 2.60996 2.65616 2.56741C2.55344 2.52486 2.4601 2.4625 2.38148 2.38388C2.30286 2.30526 2.2405 2.21192 2.19795 2.1092C2.1554 2.00648 2.1335 1.89638 2.1335 1.7852C2.1335 1.67401 2.1554 1.56392 2.19795 1.4612C2.2405 1.35847 2.30286 1.26514 2.38148 1.18652C2.4601 1.1079 2.55344 1.04553 2.65616 1.00299C2.75888 0.960437 2.86898 0.938538 2.98016 0.938538L10.1553 0.938538C10.2665 0.938398 10.3766 0.960202 10.4794 1.0027C10.5822 1.0452 10.6756 1.10756 10.7542 1.18621C10.8329 1.26485 10.8953 1.35825 10.9378 1.46103C10.9803 1.56382 11.0021 1.67398 11.0019 1.7852V8.96029C11.0019 9.07148 10.98 9.18158 10.9375 9.2843C10.8949 9.38702 10.8326 9.48036 10.7539 9.55898C10.6753 9.63759 10.582 9.69996 10.4793 9.74251C10.3765 9.78506 10.2664 9.80696 10.1553 9.80696C9.93071 9.80696 9.71535 9.71776 9.55657 9.55898C9.47795 9.48036 9.41559 9.38702 9.37304 9.2843C9.33049 9.18158 9.30859 9.07148 9.30859 8.96029L9.30979 3.82651L2.38224 10.7541C2.22366 10.9126 2.00858 11.0017 1.78431 11.0017C1.56005 11.0017 1.34497 10.9126 1.18639 10.7541Z" fill="#46428F"/>
                  </svg>
                  {l.site}
                </a>
              ) )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail