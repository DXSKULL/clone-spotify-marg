import React from "react";
import { convertMsToTime } from "../../utils/utils";

const TrackItem = ({
  trackName,
  trackAuthor,
  trackIndex,
  trackDuration,
  isExtended = false,
  trackImage,
}) => {
  const classNames = isExtended
    ? "track-line track-line__extended"
    : "track-line";
  return (
    <div className={classNames}>
      <div className="track-number">{trackIndex + 1}</div>
      {isExtended && (
        <div className="track-poster">
          <img src={trackImage} alt="Poster" />
        </div>
      )}
      <div className="track-song">
        <h6 className="track-song__name">{trackName}</h6>
        {!isExtended && (
          <p className="track-song__author">
            {trackAuthor.map((item) => item.name).join(", ")}
          </p>
        )}
      </div>
      <div className="track-duration">{convertMsToTime(trackDuration)}</div>
    </div>
  );
};

export default TrackItem;
