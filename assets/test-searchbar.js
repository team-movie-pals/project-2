// Defining values for my API
const apiKey = '7684a5b607208105f3ec3a694e8e80b5';
const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=7684a5b607208105f3ec3a694e8e80b5'; 
// const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=7684a5b607208105f3ec3a694e8e80b5&query=flower'; // endpoint for movies search (all movies). This url will always make a search with the query=flower. Further on we´re gonna make it dynamic, so the query can be changed according to what the user inputs.
const imageUrl = 'https://image.tmdb.org/t/p/w500';
// the images for the movie covers can be fetched on the api poster_path right after following: https://image.tmdb.org/t/p/w500/ (info available at https://developers.themoviedb.org/3/getting-started/images) . For ex: https://image.tmdb.org/t/p/w500/m1fgGSLK0WvRpzM1AmZu38m0Tx8.jpg

// to search for movies (in general) the link is
// https://api.themoviedb.org/3/search/movie --> the endpoint is /search/movie
// now, for ex, to go to the upcoming movies api, the link with my api key is
// https://api.themoviedb.org/3/movie/upcoming?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US&page=1 --->
// an this link is DYNAMIC, meaning I can change what´s in between the "3" and the "?", changing the endpoint to get different types of data. I.e. for upcoming movies I´ll use /movie/upcoming (this endpint is specified here: https://developers.themoviedb.org/3/movies/get-upcoming)
// for the upcoming movies, under QUERY STRING we can see the extra parameters we cna pass (in this case, they are only:  langua, page and regions. There is no query string for a text search.
// now, when I go to the API info on how to SEARCH, and to the option on how to search for MOVIES, the query string information shows under "query" that I can pass a text to search. So, if I want to add a query to make a text search, I add at the end of the path (where my API key ends) a "&query=word to search", for example: &query=spider. So this will work for the search for movies api, like this:
// general link: https://developers.themoviedb.org/3/search/search-movies and then
// link with  my query added:
// https://api.themoviedb.org/3/search/movie?api_key=7684a5b607208105f3ec3a694e8e80b5&query=flower




// Selecting elements from the DOM (why: to get the input value typed and also select the search button and apply an onClick event on it)
const selectButton = document.querySelector('#btn1');
const selectInput = document.querySelector('#inputValue');
const moviesSearchable = document.querySelector('#movies-searchable');

/* we´re gonna create the below using a function createMovieContainer
<div class="movie">
             <!-- the section below will be listing every single movie -->
             <section class="section">
             </section>
             <!-- the div below is where we´ll have every single video of the particular movie we clicked on -->
             <div class="content">
                <p id="content-close">X</p>
             </div>
        </div>
*/

function createMovieContainer(movies) {
    // the below if going to be our div with the class of ´movie´
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    //creating a function to handle the following:
    // we´re gonna dynamically include the images. We´re gonna loop inside the movie (movies.map) and we´re gonna return a backtick `` containing the source of that image (img src) and the data-movie-id (movie.id)
    //to get the img of the poster path, we included movie.poster_path, and poster_past is given on the api (like a key-value pair key: value, poster_path is the key)
    function movieSection(movies) {
        return movies.map((movie) => {
            return `
                    <img src=${imageURL + movie.poster_path} data-movie-id=${movie.id}/>
                `;
        })
    }

    /// our  section listing every single movie (with images)
    
    const movieTemplate = `
        <section class="section">
            ${ movieSection(movies)}
        </section>
        <div class="content">
        <p id="content-close">X</p>
        </div>
    `;

    // what´s inside the backticks is a big string. So we´re going to append it to the movieElement (that bg div with the class of 'movie') variable by doing the following:
    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

// creating a movid container to add posters 2452

// applying an onClick event to out button, now named selectButton
selectButton.onClick = function(event) {
    // to prevent the default behaviour of the browser refreshing the page every time we click the form submit button
    event.preventDefault();
    // to get the input value (selectInput, using .value method) and store it to a variable (named "value")
    const value = selectInput.value; // whichever value the user gives

    // setting a variable to hold a dynamic URL, dynamic in the sense it will accept the input from the user and add to the end of my api  url a &query= with the input given by the user
    const newUrl = url + '&query=' + value;

    // pass the url you want to get the api data from, which we stored to the url variable
    fetch(url)
        // to make the fetch return as json:
        .then((res) => res.json())
        // to get the now converted data, we use another .then and pass a parameter with a name we define and in this case we defined with the name of 'data'. This data will be that huge array of movied and other infos that we got from the api.
        // also, tis data will represent an object composed by a huge array. If we expand that object, we´ll get every single movie from the value "result" that is in that huge array
        .then((data) => {
            // creating a variable to represent the movies
            const movies = data.results;
            // call the below function to create the container passing the variable we just created, movies
            const movieBlock = createMovieContainer(movies);
            moviesSearchable.appendChild(movieBlock);
            console.log('Data: ', data)
        })
        // we use the catch portion in case there is an error. We need to pass a parameter with a name we can define and in this case we defined as 'error'
        .catch((error) => {
            console.log('Error: ', error)
        })
    console.log('input value is: ', value);
    console.log('button selection is working');
}

// Using the fetch() build-in JS funuction to make a request to the API and get it into our app:
