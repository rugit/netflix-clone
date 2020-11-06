const API_KEY = "ddfc40846d283d75e11749173ebbcb92";

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,

}

export default requests;