import ReactPlayer from "react-player/youtube";


const VideoPlayer = (props) => {
    const videoPlayerStyle = {
        display: 'block',
        margin: 'auto',
    }
  return (
    <div>
      <ReactPlayer url={props.url} style={videoPlayerStyle} controls />
    </div>
  );
}

export default VideoPlayer;