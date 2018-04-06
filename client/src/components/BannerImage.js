import React from 'react';
import styles from '../styles/BannerImage.css';
import heroImage from '../assets/hero-image.png';
import Navbar from './Navbar';

const BannerImage = () => {
  return (
  <div className={styles.imageContainer}>
    <Navbar />
    <img className={styles.hero} src={heroImage} alt="logo" />
  </div>
    )
  }

export default BannerImage;
