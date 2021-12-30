import React, {useEffect,useState} from 'react'
import './App.css';
import 'tachyons';
import SearchBox from './SearchBox.js'
import Movieinfo from './Movieinfo';
import movies from './Movies-data.js';

function Movies() {
   const [movie,setMovie] =useState([]);
   const [search,setSearch] =useState('');
   const [sort,setSort] =useState('');
   const [selectMovie,setSelectMovie] = useState(false);
   const [selectMovie1,setSelectMovie1] = useState('');

    useEffect(  () => {
       /* const fetchData = async () =>{
        const url = 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/8cc907c1bb9b404e8cb181825938fc23-data.json';
        //console.log(response.body)
        const response= await fetch(url);
       const resJson = await response.json();*/
         setMovie(movies);
         //console.log("hii");
        
        
      
       
      
    },[search,sort] )

    const OnSearch =  (value) =>{
             setSearch(value);
             setSelectMovie(!selectMovie);
    }

    const OnSort  = (value) =>
    {
        setSort(value);
        //console.log(value);
    }

    const Handleinfo = (index,event) => {
        setSelectMovie(!selectMovie);
        setSelectMovie1(index);
       // console.log(selectMovie);
       // setSelectMovie1(item);
    }

    if (!movie.length) {   
        return <h1>Loading....</h1>
      }
  
  const filtereMovies = movie.filter((items) => {
        return (items.Title.toLowerCase().includes(search.toLowerCase())
        )
    })
   

    const Sorting = () =>{
    if(sort==='year'){   
    let SortMovies = movie.sort((a,b)=>{
                   
            return parseInt(b.Year.substring(0,4))-parseInt(a.Year.substring(0,4));
        })
    
    }
    else if(sort==='title'){
      let SortMovies =  movie.sort(function(a, b) {
            var nameA = a.Title.toUpperCase(); 
            var nameB = b.Title.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
        }

        else if(sort==='Boxoffice'){

           
         
        let SortMovies = movie.sort((a,b)=>{
                   
                  if(a.BoxOffice && b.BoxOffice){
                 if(a.BoxOffice.includes('$') && b.BoxOffice.includes('$')){
                   const p =a.BoxOffice.replace('$',0).replace(',',0);
                   const q =b.BoxOffice.replace('$',0).replace(',',0);
            return parseInt(q)-parseInt(p);}
         } })
    }
    if(sort==='rating'){
        let SortMovies = movie.sort((a,b)=>{
           
                return parseInt(b.imdbRating)-parseInt(a.imdbRating);
            })
        
        }
}
    
    

    {movie.length && Sorting()}

   // console.log(filtereMovies.Title);
    return (
        <div>
            <SearchBox onSearch={OnSearch} OnSort={OnSort}/>
            {selectMovie1 && <Movieinfo item={movie} index={selectMovie1} Handleinfo={Handleinfo}/>}
            <div className='box'>{filtereMovies && (filtereMovies.map((item,index) => 
            (<div className='movie-info tc bg-light-green dib br3 pa3 ma2 bw3 shadow-5' key={index}>
                <img src={item.Poster} className='img' alt='image'/>
                <div><span>Title - </span> {item.Title}</div>
                  <div><span>IMDB Rating - </span> {item.imdbRating}</div>
                  <div><span>Type - </span> {item.Type}</div>
                  <div><span>Language - </span>{item.Language}</div>
                  <div><span>BoxOffice - </span>{item.BoxOffice}</div>
                  <button className='viewMore' onClick={(event)=> Handleinfo(index,event)}>View More..</button>

                  
                  
                  <br/><br/>
            </div>)))}
            
            </div>
        </div>
    )
}

export default Movies;