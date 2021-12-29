import React from 'react'

const Movieinfo = ({item,Handleinfo,index}) => {
  const HandleClose = () =>{
      Handleinfo();
   
  }

     //console.log(item);
    const filtereMovies = item.filter((items,i)=>{ return i==index})
    return (
        <div className='movie-info-box'>
               <div className='info-image'> <img src={filtereMovies[0].Poster} className='img' alt='image' className='info-img'/></div>
            <div className='info-details'>    <div><span>Title - </span> {filtereMovies[0].Title}</div>
                  <div className='info'><span>IMDB Rating - </span> {filtereMovies[0].imdbRating}</div>
                  <div className='info'><span>Type - </span> {filtereMovies[0].Type}</div>
                  <div className='info'><span>Released - </span>{filtereMovies[0].Released}</div> 
                  <div  className='info'><span>Run Time - </span>{filtereMovies[0].Runtime}</div>
                  <div className='info'><span>Actors  - </span>{filtereMovies[0].Actors }</div>
                  <div className='info'><span>Country - </span>{filtereMovies[0].Country}</div>
                  <div className='info'><span>Awards - </span>{filtereMovies[0].Awards}</div>
                  <div className='info'><span>Production - </span>{filtereMovies[0].Production}</div>
          </div>
            <button className='close-btn' onClick={HandleClose}>X</button>
        </div>
    )
}
/* const filtereMovies = movie.filter((items) => {"Released": "18 Dec 2009",
    "Runtime  Actors  Country Awards Production
    return (items.Title.toLowerCase().includes(search.toLowerCase())
    )
})*/

export default Movieinfo
