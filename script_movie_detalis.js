'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



// /**
//  * go top
//  */

// const goTopBtn = document.querySelector("[data-go-top]");

// window.addEventListener("scroll", function () {

//   window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

// });

// get movie data
var current_movie = JSON.parse(localStorage.getItem('selectedMovie'));
var current_movie_title = current_movie.title;

const storedMovie = JSON.parse(localStorage.getItem('movies'));
var movieData = storedMovie.find(obj => obj.title === current_movie_title);

///////////////////////////////////////////////
// movie image
var movie_image = document.getElementById("movie_img");
movie_image.src = movieData.image;

//movie title
var movie_title = document.getElementById("movie_title");
movie_title.innerText = movieData.title;

//movie category
var movie_cat = document.getElementById("movie_cat");
movie_cat.innerText = movieData.category;

//movie rating
var movie_rat = document.getElementById("movie_rat");
movie_rat.innerText = movieData.rating;

//movie description
var movie_des = document.getElementById("movie_des");
movie_des.innerText = movieData.description;

//movie year
var movie_year = document.getElementById("movie_year");
movie_year.innerText = movieData.releaseDate;

//movie video
var video = document.getElementById("myVideo");
var movie_video = document.getElementById("movie_video");
movie_video.src = movieData.video;

video.load();

//movie actor

document.getElementById("actors").innerText = movieData.actors;


video.addEventListener('play', () => {
  // Apply styles when video is playing
  video.classList.add('playing');

});
video.addEventListener("pause", () => {
  // Apply styles when video is playing
  video.classList.remove('playing');

});


// login

let currentUsersRole = localStorage.getItem('currentUserRole');
let currentUsers = localStorage.getItem('currentUsername');
if (currentUsers) {
  document.getElementById('login_btn').style.display = 'none';
}

document.getElementById('login_btn').addEventListener('click', myFunction);
function myFunction() {
  window.location.href = "./index.html";
}





