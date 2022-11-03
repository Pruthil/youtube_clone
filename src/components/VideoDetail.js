import React from "react";

class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return <div>Loading .... </div>;
    } else {
      const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
      return (
        <>
          <div className="ui embed">
            <iframe
              title={this.props.video.snippet.title}
              src={videoSrc}
            ></iframe>
          </div>
          <div className="ui segment">
            <h4 className="ui header">{this.props.video.snippet.title}</h4>
            <div className="ui content">
              {this.props.video.snippet.description}
            </div>
          </div>
        </>
      );
    }
  }
}

export default VideoDetail;
