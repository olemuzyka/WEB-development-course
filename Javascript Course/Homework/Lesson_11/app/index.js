document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();

        let searchString = document.getElementsByName('search-field');

        console.log('Hello My friend');
        console.log(e);
        console.log(searchString);
    })






})
