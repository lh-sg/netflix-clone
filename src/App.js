import { useState,useEffect } from 'react';
import axios from 'axios';
import Movies from "./components/Movies";
import Hero from './components/Hero';
import Header from './components/Header';

const URL = "https://api.themoviedb.org/3";
const API_KEY = "2edad0ccc091bfa7c9aab0a5091af31d";
const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

// let heroMovie = ''

function App() {
  const [originals,setOriginals] = useState([]);
  const [trending,setTrending] = useState([]);
  const [now_playing,setNowPlaying] = useState([]);
  const [popular,setPopular] = useState([]);
  const [top_rated,setTopRated] = useState([]);
  const [upcoming,setUpcoming] = useState([]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     heroMovie = trending[Math.floor(Math.random() * trending.length)];
  //     console.log(heroMovie);
  //   },3000);
  //   return () => {
  //     clearInterval(interval);
  //   }
  // },[]);

  useEffect(() => {
    axios
      .get(`${URL}${endpoints.originals}`,{
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setOriginals(res.data.results));

    axios
      .get(`${URL}${endpoints.trending}`,{
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTrending(res.data.results));

    axios
      .get(`${URL}${endpoints.now_playing}`,{
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setNowPlaying(res.data.results));

    axios
      .get(`${URL}${endpoints.upcoming}`,{
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setUpcoming(res.data.results));

    axios
      .get(`${URL}${endpoints.popular}`,{
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setPopular(res.data.results));

    axios
      .get(`${URL}${endpoints.top_rated}`,{
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTopRated(res.data.results));
  },[]);


  return (
    <>
      <Header />
      <Hero movie={trending[Math.floor(Math.random() * trending.length)]} />
      <Movies title='流行ってるやつ' movies={trending} />
      <Movies title="もうすぐのやつ" movies={upcoming} />
      <Movies title="評価高いやつ" movies={top_rated} />
      <Movies title="テレビもの" movies={originals} />
      <Movies title="人気のやつ" movies={popular} />
      <Movies title='今やってるやつ' movies={now_playing} />
    </>
  );
}
export default App;