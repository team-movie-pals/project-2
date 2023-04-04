
app.genres = {
    nameAndId: [
            {
                genreId: '28',
                genreName: 'Action',
            },
                
            {
                genreId: '12',
                genreName: 'Adventure',
            },

            {
                genreId: '16',
                genreName: 'Animation',
            },

            {
                genreId: '35',
                genreName: 'Comedy',
            },

            {
                genreId: '80',
                genreName: 'Crime',
            },

            {
                genreId: '99',
                genreName: 'Documentary',
            },

            {
                genreId: '18',
                genreName: 'Drama',
            },

            {
                genreId: '10751',
                genreName: 'Family',
            },

            {
                genreId: '14',
                genreName: 'Fantasy',
            },

            {
                genreId: '36',
                genreName: 'History',
            },

            {
                genreId: '10402',
                genreName: 'Music',
            },

            {
                genreId: '9648',
                genreName: 'Mistery',
            },

            {
                genreId: '210749',
                genreName: 'Romance',
            },

            {
                genreId: '878',
                genreName: 'Science Fiction',
            },

            {
                genreId: '10770',
                genreName: 'TV Movie',
            },

            {
                genreId: '53',
                genreName: 'Thriller',
            },

            {
                genreId: '28==10752',
                genreName: 'War',
            },

            {
                genreId: '37',
                genreName: 'Western',
            }
        ]
    };


// CREATE APP OBJECT
const app = {};

// target elements with document.querySelector (save those into variables)
// const form = document.querySelector('form');
// listen for form submission (user click)
app.listenForSubmit = function () {
    app.form.addEventListener('submit', function(event) {
        // prevent the browser from refreshing (preventDefault)
        event.preventDefault();
        // find out what the user's chosen genre, use value attribute
        // store the user's chosen genre
        const chosenGenre = document.querySelector('input[name=genreButton]:checked').value;
        console.log(chosenGenre)
    })
}




// SAVING RELEVANT API INFORMATION
app.apiUrl = "https://api.themoviedb.org/3/movie/upcoming";
app.apiKey = "7684a5b607208105f3ec3a694e8e80b5";

// CREATING A METHOD THAT REQUESTS INFO FROM THE API AND LOGS IT TO THE CONSOLE
app.getMovies = () => {
    // USE THE URL CONSTRUCTOR TO SPECIFY THE PARAMETERS WE WISH TO INCLUDE IN OUR API ENDPOINT
    const url = new URL(moviesApp.apiUrl);
    url.search = new URLSearchParams({
        // PASS IN OUR APY KEY AS A PARAMETER
        api_key: app.apiKey
    })

    // USING THE FETCH API TO MAKE A REQUEST TO THE themoviedb API MOVIES ENDPOINT
    fetch(url)
    .then((response) => {
        //PARSE THIS RESPONSE INTO JSON
        // RETURN JSON RESPONSE SO THAT IT CAN BE USED IN THE NEXT FUNCTION
        return response.json();
    })
    // PARSE THE JSON PROMISE RESPONSE AND LOG OUT READABLE DATA (IN JSON FORMAT)
    .then((jsonResponse) => {
        console.log(jsonResponse);
        // PASSING THE DATA INTO THE displayMovies method = CALLING THE displayMovies within getMovies
        app.displayMovies(jsonResponse);
    })
}

// DEFINING A METHOD DO DISPLAY MOVIES ON THE FRONT-END
// I THINK AT THIS POINT WE NEED AN IF STATEMENT TO SELECT ONLY THE MOVIES WHOSE GENRE-IDS CORRESPONT TO THE SELECTED GENRE
app.displayMovies = (dataFromApi) => {
    // QUERY THE DOCUMENT AND FIND THE FIRST UL
    const ul = document.querySelector('ul');
    // take the data from the apu and iterates through it
    // for each object in the apu we will
    dataFromApi.forEach((item) => {
        // create list elements
        const listElement = document.createElement('li');
        // create description elements
        const movieTitle = document.createElement('h4');
        // ADD CONTENT FOR DESCRIPTION
        movieTitle = item.title;
        // APPEND THE H4 ELEMENT TO ITS PARENT LI
        listElement.appendChild(h4);
        // APPEND THE LI TO THE GALLERY UL
        ul.appendChild(listElement);
    })
}


// CREATE AN INITIALIZATION METHOD
app.init = () => {
    // callling the method that makes the request to the api
    app.getMovies();
}

// CALL THE INIT METHOD TO KICKSTART OUR APP
app.init(); 
    


