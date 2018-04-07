import React, { Component } from 'react';
import stockimage from '../assets/stockimage.png';
import playButton from '../assets/playbtn.png';
import styles from '../styles/Video.css'

class Video extends Component {
  render(){
    return(
    <div className={styles.videoContainer}>
      <div className={styles.imageContainer}>
      <img className ={styles.videoImage} src={stockimage} alt="video" />
      <img className ={styles.playButton} src={playButton} alt="playbtn" />
      </div>
      <h2 className={styles.videoHeading}>Video Title (from videos.json)</h2>
      <p className={styles.videoParagraph}>Video description (from videos.json)</p>
    </div>
    )
  }
}

export default Video;
