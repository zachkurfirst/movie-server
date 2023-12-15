const token = process.env.TMDB_BEARER_TOKEN;
const ROOT_URL = "https://api.themoviedb.org/3";
const fetch = require("node-fetch");

async function index(req, res) {
  try {
    let endpoint = `${ROOT_URL}/movie/top_rated?language=en-US&page=1`;
    console.log(endpoint);
    console.log(token)
    const movieDbResponse = await fetch(endpoint, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
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
