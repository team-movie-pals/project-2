// fetch upcoming movies API ---> store in a variable VAR1 (our list of upcoming movies)

fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US&page=1')
    .then(function() {
    console.log('it worked with movies api');
});

// fetch genres API ---> store in a variable VAR2 (our list of genres)

fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7684a5b607208105f3ec3a694e8e80b5&language=en-US')
    .then(function () {
        console.log('it worked with genres api');
    });

// grab/"listen" to the genres clicked on the form ---> store each option clicked in a variable VAR3 (our list of selected genres by the user)
checkedItems = []
function handleCheckbox(){
    let checkboxField =  document.forms[0].genres;
    console.log(checkboxField, typeof(checkboxField));
    for(let i=0; i< checkboxField.length; i++){
        if(checkboxField[i].checked){
            console.log("The selected options were:", checkboxField[i].value);
            checkedItems.append(checkboxField[i].value)
        }
    }
} // ---> thi didn´t work

// go over each item/genre of VAR3 --> if item also exists inside VAR 1, get the content of "original_title" from inside VAR 1 (upcoming movies API) and store it in a variable VAR4 (=var4 will contain the movie titles according to genres selection)


// console.log VAR4 on the section