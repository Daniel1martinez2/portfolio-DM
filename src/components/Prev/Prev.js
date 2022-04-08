import { Application, Ticker, Container, filters, Sprite, Texture } from 'pixi.js';
import React, { useRef } from 'react';
import github from '../../img/github.png';
import styles from './Prev.module.css';

const Prev = () => {
  const divRef = useRef(null);
  const gameRef = useRef(null);
  const ticker = new Ticker();
  const app = new Application({ 
    width: 802,
    height: 400,
    backgroundAlpha: 0,
  });
  const container = new Container();
  app.stage.addChild(container);
  const texture = Texture.from(github);
  const sculpture = new Sprite(texture);
  sculpture.scale.set(0.13)
  container.addChild(sculpture);
  const myFilter = new filters.NoiseFilter(); 
  myFilter.noise = 0.19;
  sculpture.filters = [myFilter];
  const process = (delta) => {
    app.renderer.resize(sculpture.width, sculpture.height);
    myFilter.seed = Math.random();
  }

  ticker.add(process);
  ticker.start();
  
  React.useEffect(() => {
    gameRef.current = app;
    divRef.current?.append(gameRef.current.view);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div>
      <div className={styles.prev} ref={divRef}> </div>
    </div>
  )
}

export default Prev