var moviesArray = [];
var favouritesArray = [];

function getMovies() {
  fetch("http://localhost:3000/movies")
    .then((resp) => {
      if (resp.ok) {
        let respObj = resp.json();
        return Promise.resolve(respObj);
      } else {
        return new Error("Invalid URL");
      }
    })
    .then((jsonData) => {
      moviesArray = jsonData.movies;
      let result = "";
      moviesArray.forEach((data) => {
        result +=
          '<li><div class="movie"> <div class="movie-info">' +
          "<h3>" +
          data.title +
          "</h3>" +
          "<p> Genre : " +
          data.genre +
          "</p>" +
          "<p> IMDB Rating : " +
          data.rating +
          "</p>" +
          "<p> Run time : " +
          data.runTime +
          "</p>" +
          '</div><div class="movie-image">' +
          '<img src="' +
          data.posterPath +
          '" alt="' +
          data.title +
          '" />' +
          '</div><button class="btn" onclick=addFavourite("' +
          data.id +
          '")>Add to Favoutites</button>' +
          "</div></li>";
      });
      document.getElementById("fetchMovies").innerHTML = result;
      return Promise.resolve(moviesArray);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function getFavourites() {
  fetch("http://localhost:3000/favourites")
    .then((resp) => {
      if (resp.ok) {
        let respObj = resp.json();
        return Promise.resolve(respObj);
      } else {
        return new Error("Invalid URL");
      }
    })
    .then((jsonData) => {
      favouritesArray = jsonData.favourites;
      let result = "";
      favouritesArray.forEach((data) => {
        result +=
          '<li><div class="favourite"> <div class="favourite-info">' +
          "<h3>" +
          data.title +
          "</h3>" +
          "<p> Genre : " +
          data.genre +
          "</p>" +
          "<p> IMDB Rating : " +
          data.rating +
          "</p>" +
          "<p> Run time : " +
          data.runTime +
          "</p>" +
          '</div><div class="favourite-image">' +
          '<img src="' +
          data.posterPath +
          '" alt="' +
          data.title +
          '" />' +
          "</div></div></li>";
      });
      document.getElementById("fetchFavourites").innerHTML = result;
      return Promise.resolve(favouritesArray);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function addFavourite(id) {
  event.preventDefault();

  let pos = moviesArray.findIndex((mov) => mov.id == id);
  let mid = moviesArray[pos].id;
  let mtitle = moviesArray[pos].title;
  let mgenre = moviesArray[pos].genre;
  let mrating = moviesArray[pos].rating;
  let mruntime = moviesArray[pos].runTime;
  let mposter = moviesArray[pos].posterPath;
  var favmovie = {
    id: mid,
    title: mtitle,
    rating: mrating,
    posterPath: mposter,
    genre: mgenre,
    runTime: mruntime,
  };

  fetch("http://localhost:3000/favourites", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(favmovie),
  })
    .then((resp) => {
      if (resp.ok) {
		favouritesArray.push(favmovie);
		console.log(favouritesArray);
		let respObj = resp.json();
		getFavourites();
        return Promise.resolve(favouritesArray);
      } else {
        return new Error("Invalid URL");
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

module.exports = {
  getMovies,
  getFavourites,
  addFavourite,
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution
