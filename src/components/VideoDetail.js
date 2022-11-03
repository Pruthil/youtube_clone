import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading .... </div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <>
        <div className="ui embed">
          <iframe title={video.snippet.title} src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <div className="ui content">{video.snippet.description}</div>
        </div>
      </>
    );
  }
};

export default VideoDetail;
