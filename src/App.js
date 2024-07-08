import 'bootstrap/dist/css/bootstrap.css';

import { initGA, logPageView } from './analytics';
import React, { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBaar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initGA();
    setIsInitialized(true);
  }, []);
  return (

    <div className="App">
      {isInitialized && <RouteTracker />}
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
