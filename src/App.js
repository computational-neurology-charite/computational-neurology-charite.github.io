import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Projects from './components/Projects';
import Team from './components/Team';
import Alumni from './components/Alumni';
import Publications from './components/Publications';
import Footer from './components/Footer';
import Home from './components/Home';
import CompetitionAnouncement from './components/CompetitionAnouncement';
import Competition from './components/Competition';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Navigation /> */}
        {/* <main>
          {/* <Home /> */}
          {/* <CompetitionAnouncement /> */}
          {/* <Projects /> */}
          {/* <Team /> */}
          {/* <Alumni /> */}
          {/* <Publications /> */}
        {/* </main>  */}
<Routes>         
  <Route
    path="/"
    element={
      <main>
        {/* <Home /> */}
        <CompetitionAnouncement />
        <Projects />
        <Team />
        <Alumni />
        <Publications />
      </main>
    }
  />
    <Route path="/video_challenge" element={<Competition />} />
       </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;