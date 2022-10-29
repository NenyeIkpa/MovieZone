

const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=697855141b5a270bfc67144c1c8a2c38&language=en-US&page=1'
      );
      const json = await response.json();
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };