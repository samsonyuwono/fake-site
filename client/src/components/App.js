import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from '../styles/App.css';
import Footer from './Footer';
import Video from './Video';
import VideoList from './VideoList';
import VideoListItem from './VideoListItem';
import BannerImage from './BannerImage';
import Table from './Table';


class App extends Component {
  render(){
  return (
  <div className={styles.App}>
    <div className={styles.hero}>
      <Router>
        <div>
        <BannerImage />
        <Video />
        <Route exact path="/test" render={ VideoList } />

        <div className={styles.paragraphContainer}>
        <h2 className={styles.heading}>Ready to have your cake and eat it too?</h2>
        <p className={styles.paragraph}>Start by designing the experience you have in mind.
        We'll guide you through each step. If <br/> your experience meets the quality standards, you'll hear more about what's next.</p>
        </div>
        <Table />
        <Footer />
        </div>
      </Router>
    </div>
  </div>
    )
  }
}

export default App;
