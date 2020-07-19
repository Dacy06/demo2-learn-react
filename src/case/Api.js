import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Api.css";

function Films() {
  const [films, setFilms] = useState([]);
  // 请求数据部分
  useEffect(()=>{
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then(res=>{
      const newFilms = res.data;
      setFilms(newFilms);
    })
  }, []);
  return (
    <div>
      <h1>Films of Studio Ghibli</h1>
      <ul>
        {films.map(film=>(
          <div className="container">
            <li key={film.id}>{film.title}</li>
            <p>{film.description}<a href={film.url}>see more</a></p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Films;