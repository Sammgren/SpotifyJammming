import React from 'react';

import './Playlist.css';

const Playlist = (props) => {

    return (
        <div class="playList">
            <h3>Current Playlist</h3>
            <ul>
                <li class="track-one">Track One</li>
                <li class="track-two">Track Two</li>
                <li class="track-two">Track Three</li>
            </ul>
        </div>
    );
}

export default Playlist;