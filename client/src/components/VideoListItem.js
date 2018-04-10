import React from 'react';
import styles from '../styles/VideoListItem.css';

const VideoListItem = ({video}) => {
  const videoTitle = video.title
  const videoUrl = video.url
  const videoThumbnail = video.thumbnail_medium
  return(
    <li className={styles.videoListItem}>
      <a href={videoUrl}><img src={videoThumbnail}/></a>
      <div>{videoTitle}</div>
    </li>
  )
}

export default VideoListItem
