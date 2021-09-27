import React from 'react';
import './Search.css'

const Search = (props) => {
    const {  hendleSearch } = props;

    return (
        <div>

            <div className="form d-flex overflow-hidden">
                <input type="search" placeholder="Type here..." onChange={(e) => hendleSearch(e)} />
                <button className="btn-regular">Search</button>
            </div>
        </div>
    );
};

export default Search;