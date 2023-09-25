import React from "react";
import PropTypes from "prop-types";

const SongCard = ({ data, children }) => {
  const { thumb, title, artist } = data;
  return (
    <div className="song-card">
      <img src={thumb} alt={title} />
      <p className="song-title">
        {title} by {artist}
      </p>
      {children}
    </div>
  );
};

SongCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default SongCard;
