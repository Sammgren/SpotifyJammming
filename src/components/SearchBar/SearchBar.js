import React from 'react';

import './SearchBar.css';

const SearchBar = (props) => {

    return (
        <form>
            <label for="search">Search Bar</label>
            <input type="search" id="search" name="search" placeholder="Begin the search for metal?!?"/>
            <button class="button" type="submit">Search</button>
        </form>
    );
}

export default SearchBar;