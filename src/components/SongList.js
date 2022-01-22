import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends Component {
  render() {
    return this.props.songs.map((d) => {
      return (
        <div key={d.title}>
          <span>{d.title}</span>
          <button onClick={() => this.props.selectSong(d)}>Select</button>
        </div>
      );
    });
  }
}

const stateToProps = (state) => {
  return { songs: state.songs };
};

// set the dispatch functions
const dispatchToProps = {
  selectSong,
};

export default connect(stateToProps, dispatchToProps)(SongList);
