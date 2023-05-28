import React from 'react';
import TrackList from '../TrackList/TrackList';

import './SearchResult.css';

const SearchResult = (props) => {

    return (
        <div class="searchResult column">
            <h3>Search Results</h3>
            <TrackList />
        </div>
    );
}

export default SearchResult;