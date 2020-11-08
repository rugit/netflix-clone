import React, {useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css"
import Youtube from "react-youtube";


const base_url = "https://image.tmdb.org/t/p/original/";
const base_url_video = "https://api.themoviedb.org/3/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [type, setType] = useState("tv");

    // code which runs based on a specific condition
    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl("");
        }
        else{
            axios.get(`/${movie?.name ? "tv" : "movie"}/${movie.id}/videos?api_key=ddfc40846d283d75e11749173ebbcb92&language=en-US`)
            .then( req => {
                setTrailerUrl(req.data.results[0].key);
            }).catch(err => {
                // Handle Error Here
                console.error(err);
            });
            
                
        }
        
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">

                {movies.map( movie =>(
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

export default Row
