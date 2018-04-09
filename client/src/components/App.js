import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import styles from '../styles/App.css';
import Footer from './Footer';
import Video from './Video';
import BannerImage from './BannerImage';
import Table from './Table';


class App extends Component {
  render(){
  return (
  <div className={styles.App}>
    <div className={styles.hero}>
      <BrowserRouter>
        <div>
        <BannerImage />
        <Video />
        <div className={styles.paragraphContainer}>
        <h2 className={styles.heading}>Ready to have your cake and eat it too?</h2>
        <p className={styles.paragraph}>Start by designing the experience you have in mind.
        We'll guide you through each step. If <br/> your experience meets the quality standards, you'll hear more about what's next.</p>
        </div>
        <Table />
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  </div>
    )
  }
}

export default App;
