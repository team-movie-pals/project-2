//psuedocode


// fetch upcoming movies API ---> store in a variable VAR1 (our list of upcoming movies)

// fetch genres API ---> store in a variable VAR2 (our list of genres)

// grab/"listen" to the genres clicked on the form ---> store each option clicked in a variable VAR3 (our list of selected genres by the user)

// go over each item/genre of VAR3 --> if item also exists inside VAR 1, get the content of "original_title" from inside VAR 1 (upcoming movies API) and store it in a variable VAR4 (=var4 will contain the movie titles according to genres selection)

// console.log VAR4 on the section



const movieApp = {};

// save relevant API information
movieApp.apiUrl = "https://api.themoviedb.org/3/movie/upcoming";
movieApp.apiKey = "7684a5b607208105f3ec3a694e8e80b5";


(fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US&page=1')
    .then(res => res.json())
    .then(data => console.log(data)))

function movie() {
    var action = document.getElementById("action");
 
     if(action.checked==true)
     console.log("action movie")  
}


//Attempt 2

// create app object
/*

const movieApp = {};

// save relevant API information
movieApp.apiUrl = "https://api.unsplash.com/photos";
movieApp.apiKey = "Qi9SDpY5MEDJMQvbKtLUlhrGYl4F5a_zSjRWn4e01z8";

// create a method (AKA function on the app object) which requests information from the API
// logs it to the console
movieApp.getMovie = () => {
  //use the URL constructor to specify the parameters we wish to include in our API endpoint (AKA in the request we are making to the API)
  const url = new URL(movieApp.apiUrl);
  url.search = new URLSearchParams({
    // pass in our API key as a parameter
    client_id: movieApp.apiKey
  })

  // using the fetch API to make a request to the TMDB API endpoint
  // pass in new URL featuring params provided by the URLSearchParams constructor
  fetch(url)
    .then((response) => {
      // parse this response into JSON
      // return JSON response so that it can be used in the next function
      return response.json();
    })
    //parse the JSON Promise response and log out readable data (AKA data in JSON format)
    .then((jsonResponse) => {
      console.log(jsonResponse);
      //pass the data into the displayMovies method
      // call the displayMovies within getMovie
      movieApp.displayMovies(jsonResponse);
    })
}
*/

// CREATE APP OBJECT
/*

const moviesApp = {};

// target elements with document.querySelector (save those into variables)
const form = document.querySelector('form');
// listen for form submission (user click)
moviesApp.listenForSubmit = function () {
    moviesApp.form.addEventListener('submit', function(event) {
        // prevent the browser from refreshing (preventDefault)
        event.preventDefault();
        // find out what the user's chosen genre, use value attribute
        // store the user's chosen genre
        const chosenGenre = document.querySelector('input[name=genreButton]:checked').value;
        console.log(chosenGenre)
    })
}

//attempt 3(fetches the api url but doas not display it)
/*
function movie(){

    url = "https://api.themoviedb.org/3/movie/upcoming?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US&page=1"

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        document.write(JSON.stringify(data.results));
    })
    .catch(function(error){
        console.log("Error:" + error)
    });
}
*/

/*
fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US&page=1')
.then(res => {
    return res.json();
})
.then(data => {
    data(user => {
        const markup = `<li>${user.title}</li>`;

        document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
    });
})
.catch(error => console.log(error));
*/

/*

const movieApp = 'https://api.themoviedb.org/3/movie/upcoming?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27, "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }]



const main = document.getElementById('main');
const form = document.getElementById('form')

 setGenre();
 function setGenre(){
    genres.forEach(genre => {
        const t =document.createElement('ul')
        t.classList.add('li');
        t.id=genre.id;
        t.innerText = genre.name;
        form.append(t);
    })
 }

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

function movie(data) {
    main.innerHTML = '';

    data.forEach(movies => {
        const { title, poster_path, vote_average, overview } = movies;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${IMG_URL + poster_path}" alt = "${title}">

             <div class="movie-info">
                 <h4>${title}</h3>
                 <span class="${getColor(vote_average)}">${vote_average}</
                 span>
            </div>

            <div class = "overview">
            
                <h4>Overview</h4>

                  <h3>Overview</h3>
                  ${overview}
            </div>
        `

        main.appendChild(movieEl);
    })
}
*/


