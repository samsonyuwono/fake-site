import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from '../styles/App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Video from './Video'
import BannerImage from './BannerImage';


const About = () => <h2>About</h2>
const Help = () => <h2>Help</h2>
const Fakesite = () => <h2>Fakesite</h2> //container

class App extends Component {
  render(){
  return (
  <div className={styles.App}>
    <div className={styles.hero}>
      <BrowserRouter>
        <div>
        <BannerImage />
        <Video />
        <h2 className={styles.heading}>Ready to have your cake and eat it too?</h2>
        <p className={styles.paragraph}>Start by designing the experience you have in mind.
        We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.</p>
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  </div>
    )
  }
}

export default App;
