const ROOT_URL = "https://api.themoviedb.org/3";
const fetch = require("node-fetch");

async function index(req, res) {
  try {
    let endpoint = `${ROOT_URL}/movie/top_rated?language=en-US&page=1`;
    console.log(endpoint);
    const movieDbResponse = await fetch(endpoint, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGM4Y2RmNzljN2U3NmY5YmFlNjAwZjNiNTZmNjUwYiIsInN1YiI6IjY1N2M3ZWIzMTc2YTk0MTczMDYyMzAzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eJTxjvV3CWQ3I7eTyWWAXnDK2ncyVz_RqrJLqU86yBw",
      },
    });
    console.log(movieDbResponse);
    // res.send("hitting endpoint");
    const data = await movieDbResponse.json();
    res.json({ message: "api response", data });
  } catch (err) {
    console.log(err);
    res.json({ message: "error", error: res.statusText });
  }
}

module.exports = {
  index,
};
