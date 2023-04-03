//psuedocode


// fetch upcoming movies API ---> store in a variable VAR1 (our list of upcoming movies)

// fetch genres API ---> store in a variable VAR2 (our list of genres)

// grab/"listen" to the genres clicked on the form ---> store each option clicked in a variable VAR3 (our list of selected genres by the user)

// go over each item/genre of VAR3 --> if item also exists inside VAR 1, get the content of "original_title" from inside VAR 1 (upcoming movies API) and store it in a variable VAR4 (=var4 will contain the movie titles according to genres selection)

// console.log VAR4 on the section

// development
//=======================================

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

