import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from '../styles/App.css';
import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';


const About = () => <h2>About</h2>
const Help = () => <h2>Help</h2>
const Video = () => <h2>Video</h2> //container
const Fakesite = () => <h2>Fakesite</h2> //container

class App extends Component {
  render(){
  return (
  <div className={styles.App}>
    <div className={styles.hero}>
      <BrowserRouter>
        <div>
        <Navbar />
        <Route path="/" component={Home} />
        <Footer />
        </div>
      </BrowserRouter>
    </div>
    </div>
    )
  }
}

export default App;
