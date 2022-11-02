import './App.css'
import { Route, Routes } from 'react-router-dom';
import {HOME,HEROES,COMICS,SERIES} from "./routes/paths"
import {Inicio,Comics,Series,Heroes} from './pages';
import ScrollToTop from "react-scroll-to-top";

function App() {

  return(
    <>
      <ScrollToTop color={"black"} />
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
