import React, { Component } from 'react';
import styles from '../styles/BannerImage.css';
import Navbar from './Navbar';
import Text from './Text';
import Button from './Button';

class BannerImage extends Component {
  render() {
  return (
    <div>
      <div className={styles.imageContainer}>
      <Navbar />
      <div className={styles.bannerContent}>
      <Text />
      <Button/>
      </div>
    </div>
  </div>
    )
  }
}

export default BannerImage;
