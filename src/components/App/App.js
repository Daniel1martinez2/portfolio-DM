import {Route, Routes, useLocation} from 'react-router-dom';

import Home from '../../pages/Home';
import styles from './App.module.css';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import {data} from '../../util/data';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  return (  
    <AnimatePresence>
      <Routes location={location} key={location.path}>
        <Route path="/" element={<Home styles={styles}/>}/>
        <Route path="/projects/:projectId" element={
          <ProjectDetail data={data[0]}/>
        }/>
        <Route path="/not-found" element={
            <h1>404</h1>
          }
        >
        </Route>
        <Route path="*" element={
          <>
            <h1>Not found</h1>
          </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;