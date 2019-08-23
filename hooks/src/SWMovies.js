import React, {useState, useEffect} from 'react';
import axios from "axios";

function SWMovies(){
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");

    useEffect( ()=>{
        async function getData(){
            const response = await axios.get(`https://swapi.co/api/films/${number}/`);
            setMovie(response.data);
            console.log(response);
        }

        getData();
    }, [number]);

    const movieNumber = ['1','2','3','4','5','6','7'];
    const movieOption = movieNumber.map((m, index) => <option key ={index} value = {m}>{m}</option>)
        return(
            <div>
                <h1>Pick a Movie</h1>
                <h4>{movie.title}</h4>
                <p>{movie.opening_crawl}</p>
                <select value ={number} onChange={e=> setNumber(e.target.value)}>
                    {movieOption}
                </select>
            </div>
        );
    }

export default SWMovies;