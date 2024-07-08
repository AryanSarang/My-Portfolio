import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBaar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { initGA, logPageView } from './analytics';
import { useLocation } from 'react-router-dom';


function App() {
  useEffect(() => {
    initGA();
  }, []);
  return (

    <div className="App">
      <RouteTracker />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};
export default App;
