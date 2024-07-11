import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Team from './components/Team';
import Publications from './components/Publications';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Navigation /> */}
        <main>
          <Projects />
          <Team />
          <Publications />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;