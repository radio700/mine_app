import { useState, useEffect } from "react";


function App(){

    /*
    * use state and Effect
    */
    const [loading,setloading] = useState(true);
    const [movies, setMovies] = useState([]);



    useEffect(() =>{
        getMovies();
    },[]);
    /*
    * User Function
    */

    const getMovies = async() =>{
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
        const json = await response.json();
        setMovies(json.data.movies);
        setloading(false);

    }

    /*
    * HTML {javascript}
    */
    return(
        <div>
            {loading ?
                <h1>Loading</h1> :
                <div>
                    {movies.map(movie => 
                        <div key={movie.id}>
                            <h2>{movie.title}</h2>
                            <ul>
                                {/* <li>{movie.genres[0]}</li> */}
                                {movie.hasOwnProperty("genres") ? //장르가 property ->{} 를 가지고 있으면 true else false IndexOf랑 비슷한듯
                                <ul>{movie.genres.map(g =>(<li key={g}>{g}</li>))}</ul> : null
                                }
                            </ul>
                            <img src={movie.medium_cover_image}/>
                            <p>{movie.summary}</p>
                        </div>)}
                </div>}
        </div>
    )
}

export default App;