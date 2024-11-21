import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

import Projects from './components/Projects';
import Team from './components/Team';
import Alumni from './components/Alumni';
import Publications from './components/Publications';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Navigation /> */}
        <main>
          <Home />
          <Projects />
          <Team />
          <Alumni />
          <Publications />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;