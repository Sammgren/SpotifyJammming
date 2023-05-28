import React from 'react';
import TrackList from '../TrackList/TrackList';

import './Playlist.css';

const Playlist = (props) => {

    return (
        <div class="playList column">
            <h3>Playlist</h3>
            <TrackList />
            <button class="save-button"> Add Playlist + </button>
        </div>
    );
}

export default Playlist;