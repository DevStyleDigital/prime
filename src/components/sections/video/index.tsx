import { VideoStyle } from "./style";

const Video = () => {
  return (
    <VideoStyle>
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/BZyq7QnwgWM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </VideoStyle>
  );
};

export default Video;
