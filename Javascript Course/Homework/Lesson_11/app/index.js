document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();

        let searchString = document.getElementsByName('search-field');

        // console.log('Hello My friend');
        // console.log(e);
        // console.log(searchString[0].value);

        fetch(
            'https://www.googleapis.com/books/v1/volumes?q=' + searchString[0].value,
            {method:'get'},
        ).then( response => {
            // console.log(response);
            return response.json();
        }).then( books => {
            // console.log(books.items);
            let resultBlock = document.getElementById('result');
            books.items.map(elem => {
                console.log(elem);


            // <ol id="list">
            //         <li>0</li>
            //         <li>1</li>
            //         <li>2</li>
            //         </ol>
            //
            //         <script>
            //     var newLi = document.createElement('li');
            //     newLi.innerHTML = 'Привет, мир!';
            //
            //     list.appendChild(newLi);
            // </script>


            });
        });



    });


});
