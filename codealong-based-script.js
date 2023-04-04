
// console.log VAR4 on the section


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
    
// fetch upcoming movies API ---> store in a variable VAR1 (our list of upcoming movies)

// fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US&page=1')
//     .then(function () {
//         console.log('it worked with movies api');
//     });

// fetch genres API ---> store in a variable VAR2 (our list of genres)

// fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US')
//     .then(function () {
//         console.log('it worked with genres api');
//     });
        
// store the movies of that chosen genre (API)

// go over the whole list of movies and get the movies whose genre correspond to the selected genre (API)


// ABAIXO É A LÓGICA DO EXERCÍCIO DO COFFEE SHOP. TENTAR USAR SE NÃO FUNCIONAR O QUE EU FOR USAR COM O CODEALONG DE API
// // find where we are appending the information
// const moviesContainer = document.querySelector('.moviesList');
// // create a new element to append to the page
// const displayText = document.createElement('h2');
// // add the text to the created element
// displayText.textContent = optionToDisplay;
// // add the class for styles
// displayText.classList.add('choice');
//     }
// }
// // clear out what's in the resultsContainer if anything
// resultsContainer.innerHTML = '';
// // append result to page
// resultsContainer.appendChild(displayText);
// });

