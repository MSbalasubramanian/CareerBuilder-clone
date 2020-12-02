import React from 'react';

//Components
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Feedback from './Components/Feedback';
// import FeedbackPopup from './Components/FeedbackPopup';

// Stylings
import './App.scss';

const App = () => (
  <section className="Container-grid">
    <Header />
    <Home />
    <Footer />
    <Feedback />
  </section>
);

export default App;
