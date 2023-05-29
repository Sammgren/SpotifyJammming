import React from 'react';
import { useCallback } from 'react';

import './Track.css';

//Testing Data 

let data = 
    {
        name:"Coil",
        artist:"Opeth",
        album:"Watershed",
        genre:"Metal",
    }



const Track = () => {
    const tracks = data;
    return (
        <div>
          <h4>{tracks.name}</h4>
          <p>{tracks.artist} {tracks.album} {tracks.genre}</p>
        </div>
    );
}

export default Track;