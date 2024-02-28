import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import CustomFooter from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact /> 
      <CustomFooter />
    </div>
  );
}

export default App;
