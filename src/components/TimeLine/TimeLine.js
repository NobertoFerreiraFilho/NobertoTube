import React from "react";
import { StyledTimeline } from "./Timeline-styles";

const TimeLine = ({ searchValue, ...props }) => {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];
        return (
          <section className="playlist" key={playlistName}>
            <h2 className="playlist__name">{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video, index) => {
                  return (
                    <a href={video.url} className="playlist__video" key={index}>
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
