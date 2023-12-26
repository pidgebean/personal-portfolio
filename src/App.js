
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="wrapper">
     <div className='body'>
      
      <Navbar/>
      <div className='page-sections'>
        <About/>
        <Projects/>
        <Skills/>
        
      </div>
      

      

     </div>
    </div>
  );
}

export default App;
