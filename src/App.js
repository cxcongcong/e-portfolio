import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
