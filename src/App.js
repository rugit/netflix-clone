import React from 'react';
import './App.css';
import  Row from  './Row';
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchScienceFictionMovies} />



    </div>
  );
}

export default App;
