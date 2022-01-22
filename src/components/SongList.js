import React, { Component } from "react";

import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return this.props.songs.map((d) => {
      return <div key={d.title}>{d.title}</div>;
    });
  }
}

const stateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(stateToProps)(SongList);
