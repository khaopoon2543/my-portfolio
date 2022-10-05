import './App.css'; 
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Projects from './component/projects/Projects';
import Contact from './component/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />      
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
