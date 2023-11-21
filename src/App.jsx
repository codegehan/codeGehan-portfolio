import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Index } from './components/Index';
import { Home } from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import StarryParticlesBackground from './components/assets/StarryParticlesBackground';

function App() {
  return (
    <div className='App'>
     <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
