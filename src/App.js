import React, { Component } from "react";
import PropTypes from "prop-types";
import songs from "./services/songs";
import SongCard from "./components/SongCard";
import Rating from "./components/Rating";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: songs,
    };
  }

  sortByTitle = () => {
    const sortedSongs = [
      ...this.state.songs.sort((a, b) =>
        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
      ),
    ];
    this.setState({ songs: sortedSongs });
  };

  sortByRating = () => {
    const sortedSongs = [
      ...this.state.songs.sort((a, b) => b.rating - a.rating),
    ];
    this.setState({ songs: sortedSongs });
  };

  render() {
    return (
      <div id="super-tunes">
        <header>
          <h1 id="st-title">SuperTunes - Songs of the Week</h1>
          <div className="sort-buttons">
            <button className="st-btn" onClick={this.sortByTitle}>
              Sort by Title
            </button>
            <button className="st-btn" onClick={this.sortByRating}>
              Sort by Rating
            </button>
          </div>
        </header>
        <main>
          {this.state.songs.map((song) => (
            <div key={song.id}>
              <SongCard data={song}>
                <Rating stars={song.rating} />
              </SongCard>
            </div>
          ))}
        </main>
      </div>
    );
  }
}

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

export default App;
