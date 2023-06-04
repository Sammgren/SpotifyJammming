import React from 'react';
import { useCallback } from 'react';

import './Track.css';

//Testing Data 

let data = [
        {
        name:"Coil",
        artist:"Opeth",
        album:"Watershed",
        genre:"Metal"
    },
    {
        name:"Deform to Form A Star",
        artist:"Steven Wilson",
        album:"Grace for Drowning",
        genre:"Progressive Rock"
    },
    {
        name:"Swimming",
        artist:"Mac Miller",
        album:"In Circles",
        genre:"Hip Hop"
    }

]



const Track = () => {
    const tracks = data;
    const tracksList = tracks.map(musicTrack => 
            <li>
                <h4>{musicTrack.name}</h4>
                <p>{musicTrack.artist} {musicTrack.album} {musicTrack.genre}</p>
            </li>
        );
    return (
        <div>
            <ul>{tracksList}</ul>
        </div>
    );
}

export default Track;