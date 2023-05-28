import React from 'react';
import Track from '../Track/Track';

import './TrackList.css';

const TrackList = (props) => {

    return (
        <div class="trackList">
            <h3>The TrackList</h3>
            <Track />
        </div>
    );
}

export default TrackList;