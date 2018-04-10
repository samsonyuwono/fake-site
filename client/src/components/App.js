import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from '../styles/App.css';
import Footer from './Footer';
import Video from './Video';
import VideoList from './VideoList';
import BannerImage from './BannerImage';
import Table from './Table';


class App extends Component {
  render(){
  return (
  <BrowserRouter>
  <div className={styles.App}>
    <div className={styles.hero}>
        <Route exact path='/videos' component={VideoList}/>
        <BannerImage />
        <Video />
        <div className={styles.paragraphContainer}>
        <h2 className={styles.heading}>Ready to have your cake and eat it too?</h2>
        <p className={styles.paragraph}>Start by designing the experience you have in mind.
        We'll guide you through each step. If <br/> your experience meets the quality standards, you'll hear more about what's next.</p>
          <Table />
          <Footer />
        </div>
      </div>
    </div>
  </BrowserRouter>
    )
  }
}

export default App;
