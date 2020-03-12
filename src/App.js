import React, { Fragment } from 'react';
import NavBar from './components/nav.js';
import IntroductionSection from'./components/IntroductionSection.js';
import Card from './components/Servicessection.js';
import Stats from './components/Stats.js';
import Offices from './components/OfficesSection.js';
import Footer from './components/Footer.js';
import {list,offices,card,stats} from "./components/data.js";
import './App.css';




function App() {
  return (
    <div className="App">
      <NavBar items={list} />
      <IntroductionSection />
      <Card card={card} />
      <Stats stats={stats} />
      <Offices offices={offices} />
      <Footer />
    </div>

  );
}

export default App;
