// User needs to make a choice.
// On userSubmit, store user selection in a variable.
// Step 1: Target the form
// Step 2: Set Up an EventListener for the submit button
// Step 3: Store User Choice in a variable

// Make API Call
// Step 1: Setup Fetch Call
// Step 2: Pass USER CHOICE as a parameter in my fetch call
// Step 3: Store Results in a variable

const genreForm = document.querySelector('form');

genreForm.addEventListener('submit', function (event) {
    // First Turn off the Default Behaviour
    event.preventDefault();
    // Look for which radio button has been checked and store it in a variable
    const userChoice = document.querySelector("input:checked")

    // Store the radio button's VALUE in a variable as well.
    const userSelection = userChoice.value;

    // INSERT this variable into a FETCH call to the TMDB!


    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7684a5b607208105f3ec3a694e8e80b5&query=${userSelection}`)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            // const movieArray = data.results;
            console.log(data)
        })
})