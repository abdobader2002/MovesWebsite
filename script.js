document.addEventListener("DOMContentLoaded", () => {
    const ball = document.querySelector(".toggle-ball");
    const items = document.querySelectorAll(
        ".container, .navbar-continer, .toggle, .toggle-ball, .menue-list-item, .profile-text,.profile-container,.original,body"
    );

    ball.addEventListener("click", () => {
        items.forEach(item => {
            item.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const arrows = document.querySelectorAll(".arrow");
    const movieLists = document.querySelectorAll(".movie-list");

    arrows.forEach((arrow, i) => {
        const itemNumber = movieLists[i].querySelectorAll("img").length;
        let clickCounter = 0;

        arrow.addEventListener("click", () => {
            const ratio = Math.floor(window.innerWidth / 270);
            clickCounter++;

            const currentTransform = window.getComputedStyle(movieLists[i]).transform;
            const matrix = new DOMMatrix(currentTransform);

            const currentTranslateX = matrix.m41;

            if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
                movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
            } else {
                movieLists[i].style.transform = "translateX(0)";
                clickCounter = 0;
            }
        });
    });
});

function selectMovie(title, image, releaseDate, videoUrl) {
    const movie = {
        title: title,
        image: image,
        releaseDate: releaseDate,
        videoUrl: videoUrl
    };

    localStorage.setItem('selectedMovie', JSON.stringify(movie));

    window.location.href = "./movie-details.html";
}
function displayMovies() {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    const movieListContainer = document.querySelector('.movie-list-wrapper');

    movieListContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-list-item');
        movieItem.innerHTML = `
            <img class="movie-list-item-img" src="${movie.image}" alt="${movie.title}" class="img-fluid">
            <span class="movie-list-item-title">${movie.title}</span>
            <p class="movie-list-item-desc">${movie.releaseDate}</p>
        `;

        movieItem.addEventListener('click', () => {
            selectMovie(movie.title, movie.image, movie.releaseDate, movie.videoUrl);
        });

        movieListContainer.appendChild(movieItem);
    });
}
window.onload = function () {
    displayMovies();
};



document.addEventListener('DOMContentLoaded', () => {
    const movieButton = document.getElementById('moviebutton');
    const movieSection = document.getElementById('moviescontainer');

    movieButton.addEventListener('click', () => {
        movieSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const movieButton = document.getElementById('trendsbutton');
    const trendsSection = document.getElementById('trendcontainer');

    movieButton.addEventListener('click', () => {
        trendsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const movieButton = document.getElementById('TVbutton');
    const trendsSection = document.getElementById('TVcontainer');

    movieButton.addEventListener('click', () => {
        trendsSection.scrollIntoView({ behavior: 'smooth' });
    });
});



