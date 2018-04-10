import React, { Component } from 'react';
import stockimage from '../assets/stockimage.png';
import playButton from '../assets/playbtn.png';
import styles from '../styles/Video.css';
import VideoList from './VideoList';

class Video extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
    }
    this.fetchVimeo()
  }

 fetchVimeo() {
    fetch('https://vimeo.com/api/v2/channel/staffpicks/videos.json')
      .then(res => res.json())
      .then(json=> this.setState({videos: json}));
  }

  handleOnClick() {
    console.log("clicked!")
  }
  render(){
    return(
    <div className={styles.videoContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.videoHeading}>Video Title (from videos.json)</h2>
        <p className={styles.videoParagraph}>Video description (from videos.json)</p>
    </div>

    <div className={styles.videoWrapper}>
      <a href="/test">
        <div className={styles.videoOverlay}>
        </div>
        <img className ={styles.videoImage} src={stockimage} alt="video" />
      </a>
    </div>


    </div>

    )
  }
}

export default Video;
