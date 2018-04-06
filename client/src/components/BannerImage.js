import React, { Component } from 'react';
import styles from '../styles/BannerImage.css';
import Navbar from './Navbar';
import Text from './Text';
import Button from './Button';
import heroImage from '../assets/hero-image.png'

class BannerImage extends Component {
  render() {
  return (
    <div>
      <div className={styles.imageContainer}>
      <Navbar />
      <Text />
      <Button/>
    </div>
  </div>
    )
  }
}

export default BannerImage;
