import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home(){
    /*
    * use state and Effect
    */
    const [loading,setloading] = useState(true);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        .then(response => response.json())
        .then(json => {
                setMovies(json.data.movies);
                setloading(false);
            })

    },[])


    /*
    * User Function
    */

    /*
    * HTML {javascript}
    */
    return(
        <div>
            {loading ? 
                <h1>Loading</h1> : 
                <div>{movies.map(movie => 
                    <Movie
                        key={movie.id}//중요
                        id={movie.id}
                        medium_cover_image={movie.medium_cover_image}
                        title ={movie.title}
                        summary = {movie.summary}
                        genres = {movie.genres}
                    />)}
                </div>
            }
        </div>
    )
}

export default Home;