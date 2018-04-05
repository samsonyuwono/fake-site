import React from 'react';
import heroImage from '../assets/hero-image.png';
import styles from '../styles/Home.css';

const Home = () => {
  return(
  <div>
    <img className={styles.hero} src={heroImage} alt="logo" />
    <h2 className={styles.heading}>Home</h2>
  </div>

  )
}

export default Home;
