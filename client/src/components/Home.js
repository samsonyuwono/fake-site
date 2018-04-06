import React, { Component } from 'react';
// import heroImage from '../assets/hero-image.png';
import styles from '../styles/Home.css';
import Button from './Button'
import BannerImage from './BannerImage'
// import Navbar from './Navbar'

class Home extends Component {
  render(){
    return(
    <div>
      <BannerImage />
      <div className={styles.bannerContainer}>
      <h2 className={styles.heading}>The world's greatest fake site</h2>
      <p className={styles.paragraph}>Create the world's greatest fake site and
      enjoy the breeze of fresh air when you complete it</p>
      <Button onClick={this.handleOnClick} />
      </div>
    </div>
    )
  }
}

export default Home;
