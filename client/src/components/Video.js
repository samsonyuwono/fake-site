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
      selectedVideo: null
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
      <div className={styles.imageContainer}>
      <img className ={styles.videoImage} src={stockimage} alt="video" />
      <a href="/test"><img onClick={this.handleOnClick} className ={styles.playButton} src={playButton} alt="playbtn" /></a>

      </div>
      <h2 className={styles.videoHeading}>Video Title (from videos.json)</h2>
      <p className={styles.videoParagraph}>Video description (from videos.json)</p>
    </div>
    )
  }
}

export default Video;
