import React from 'react';
import './App.css';

const SearchBox = ({onSearch,OnSort}) => {
    return (
        <div className='search-field'>
            <span className='app-name'>My Movies.com</span>
            <input placeholder='Search Movie Name' type='text' className="search-input pa3 ba b--green bg-lightest-blue" onChange={(event) => onSearch(event.target.value)} />
           <select defaultValue='sort' placeholder='sort' className='sort-by' onChange={(event) => OnSort(event.target.value)}>
               <option disabled value='sort' >Sort</option>
               <option value='title'>Title</option>
               <option value='year'>Year</option>
               <option value='Boxoffice'>BoxOffice</option>
               <option value='rating'>IMDB Rating</option>
               </select> 

        </div>
    )
    //Using fields "Title", "Year", "BoxOffice", "imdbRating").
}

export default SearchBox
