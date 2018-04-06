import React, { Component } from 'react';
import stockimage from '../assets/stockimage.png';
import styles from '../styles/Video.css'

class Video extends Component {
  render(){
    return(
    <div className={styles.videoContainer}>
      <h2 className={styles.videoHeading}>Video Title (from videos.json)</h2>
      <p className={styles.videoParagraph}>Video description (from videos.json)</p>
      <img className ={styles.videoImage} src={stockimage} alt="logo" />
    </div>
    )
  }
}

export default Video;
