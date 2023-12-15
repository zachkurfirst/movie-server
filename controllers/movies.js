const token = process.env.TMDB_TOKEN;
const ROOT_URL = "https://api.themoviedb.org/3";
// const fetch = require("node-fetch");

async function index(req, res) {
  try {
    let endpoint = `${ROOT_URL}/movie/top_rated?language=en-US&page=1&api_key=${token}`;
    console.log(endpoint);
    const res = await fetch(endpoint, {
      method: "GET",
    });
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGM4Y2RmNzljN2U3NmY5YmFlNjAwZjNiNTZmNjUwYiIsInN1YiI6IjY1N2M3ZWIzMTc2YTk0MTczMDYyMzAzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eJTxjvV3CWQ3I7eTyWWAXnDK2ncyVz_RqrJLqU86yBw",
    //   },
    // });
    if (res.ok) {
      //   console.log(res.json());
      console.log("working");
      return res.json();
      // res.send(json);
      //   return "Working"
    }
  } catch (err) {
    console.log(err);
  }
}

//   let endpoint = `${ROOT_URL}/movie/top_rated?language=en-US&page=1&api_key=${token}`;
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGM4Y2RmNzljN2U3NmY5YmFlNjAwZjNiNTZmNjUwYiIsInN1YiI6IjY1N2M3ZWIzMTc2YTk0MTczMDYyMzAzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eJTxjvV3CWQ3I7eTyWWAXnDK2ncyVz_RqrJLqU86yBw",
//     },
//   };

//   fetch(endpoint, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error("error:" + err));
// }

module.exports = {
  index,
};
