import React from "react";
import PropTypes from "prop-types";

const Rating = ({ stars }) => {
  const roundedStars = Math.round(stars <= 5 ? stars : 0);
  const starIcons = [...Array(roundedStars).keys()].map((i) => (
    <div key={i} className="star"></div>
  ));

  return <div className="rating">{starIcons}</div>;
};

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default Rating;
