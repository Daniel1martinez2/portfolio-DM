import styles from './App.module.css';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import About from '../About/About';
import hand from '../../img/hand.svg';
import Projects from '../Projects/Projects';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Hero/>
      <div className={styles.animation}>
        <img className={styles.hand} src={hand} alt=""/>
      </div>
      <About/>
      <Projects/>
    </BrowserRouter>
  );
}

export default App;