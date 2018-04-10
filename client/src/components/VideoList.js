import React from 'react';
import VideoListItem from './VideoListItem'

const VideoList = props => {
  const videoItems = props.videos && props.videos.map((video) => {
    return <VideoListItem key={video.id} video={video} />
  })
  return(
    <ul>
      {videoItems}
    </ul>
  )}

export default VideoList;
