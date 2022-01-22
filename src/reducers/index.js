import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "title_1", duration: "1.20" },
    { title: "title_2", duration: "5.60" },
    { title: "title_3", duration: "6.20" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
