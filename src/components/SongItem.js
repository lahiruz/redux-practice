import React, {Component} from 'react';
import { connect } from 'react-redux';

export class SongItem extends Component{
  render() {
    const {selectedSong} = this.props || {};
    return (
      <div>
        <div>Selected Song Details</div>
        <div>
          <p>Title: {(selectedSong || {}).title || 'please select item'}</p>
          <p>Duration: {(selectedSong || {}).duration || 'please select item'}</p>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  console.log(state)
  return {selectedSong: state.selectedSong};
}

export default connect(stateToProps)(SongItem);