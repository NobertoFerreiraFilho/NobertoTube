import React from "react";
import { StyledTimeline } from "./Timeline-styles";

const TimeLine = (props) => {
  const playlistNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section className="playlist">
            <h2 className="playlist__name">{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url} className="playlist__video">
                    <img src={video.thumb} alt="" className="video__image" />
                    <span className="video__name">{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
};

export default TimeLine;
