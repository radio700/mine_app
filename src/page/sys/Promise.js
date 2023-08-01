import { useState, useEffect } from "react";

function Movies({qwer,id,title, summary, img}){
  return (
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
      <img src={img} alt={title}/>
    </div>
  )
}


function Promise(){

  /*
  * use state and Effect
  */
  const [movies, setMovies] = useState([]);
  

  useEffect(() =>{
    fetch(url)
    .then(response => response.json())
    .then(json => {
        setMovies(json.data.movies);
    })
  },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

  /*
  * User Function
  */
  let url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";

  /*
  * HTML {javascript}
  */
  return(
    <div>
      {
        movies.map((movie) => (
          <Movies
            qwer = "tlqkf"
            id={movie.id}
            title={movie.title}
            summary = {movie.summary}
            img = {movie.large_cover_image}

          ></Movies>
        ))
      }
    </div>
  )
}

export default Promise;