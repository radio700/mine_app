import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [movie,setMovie] = useState([])

    const {id} = useParams();

    useEffect(() =>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setMovie(json.data.movie)
        })
    },[])


    return (
        <div>
            <h1>{movie.title_long}</h1>
            <img src={movie.large_cover_image} alt={movie.id}></img>
            <p>{movie.description_full}</p>
        </div>
    )
}
export default Detail;