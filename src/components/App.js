import React, { Component } from "react";

import SongList from "./SongList";
import SongItem from "./SongItem";

class App extends Component {
  render() {
    return (
      <>
        <SongList></SongList>
        <SongItem></SongItem>
      </>
    );
  }
}

export default App;
