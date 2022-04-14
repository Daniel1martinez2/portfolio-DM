import {Route, Routes} from 'react-router-dom';

import Home from '../../pages/Home';
import styles from './App.module.css';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import {data} from '../../util/data';

function App() {
  return (  
    <Routes>
      <Route path="/" element={<Home styles={styles}/>}/>
      {/* <Route path="/heury" element={<ProjectDetail data={data[0]}/>}/> */}
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
    
  );
}

export default App;