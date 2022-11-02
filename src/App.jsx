import './App.css'
import { Route, Routes } from 'react-router-dom';
import {HOME,HEROES,COMICS,SERIES} from "./routes/paths"
import {Inicio,Comics,Series,Heroes} from './pages';

function App() {

  return(
    <>
      <Routes>
        <Route path={HOME} element={<Inicio/>}/>
        <Route path={HEROES} element={<Heroes/>}/>
        <Route path={COMICS} element={<Comics/>}/>
        <Route path={SERIES} element={<Series/>}/>
      </Routes>
    </>
  
  )
}

export default App
