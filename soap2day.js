
const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://soap2dayx2.to';

async function getMovies() {
  try {
    const response = await axios.get(`${baseUrl}/homepage`);
    const $ = cheerio.load(response.data);
    let movies = [];

    $('a.film-poster').each((index, element) => {
      let title = $(element).attr('title');
      let url = baseUrl + $(element).attr('href');
      movies.push({ title, url });
    });

    console.log(movies);
    return movies;
  } catch (error) {
    console.error(error);
  }
}

// Example usage
getMovies();
