import logo from '../../logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';

function App() {
  return (
    <div class="App">
      <h1>\m/</h1>
      <SearchBar />
      <div class="metal">
        <SearchResult />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
