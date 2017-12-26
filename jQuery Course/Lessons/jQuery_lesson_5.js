$(document).ready(function() {


   // Expanding Your Interface


    // The jQuery UI Project
    // $( "#username" ).datepicker();


    // Determining the Size and Position of Page Elements

    // .height()
    // .width()


    // var winH = $(window).height();
    // var winW = $(window).width();

    // var docH = $(document).height();
    // var docW = $(document).width();

    // var divW = $('#banner').width();
    // var divH = $('#banner').height();

    // innerWidth() returns the width + the left and right padding;
    // innerHeight() returns the CSS height + top and bottom padding:

    // var divW = $('#banner').innerWidth();
    // var divH = $('#banner').innerHeight();


    // outerWidth() returns the width + the left and right padding + left and right borders;
    // outerHeight() returns the CSS height + top and bottom padding + top and bottom borders:

    // var divW = $('#banner').outerWidth();
    // var divH = $('#banner').outerHeight();

    // var divW = $('#banner').outerWidth(true);
    // var divH = $('#banner').outerHeight(true);


    // Determining the Position of Elements on a Page

    // offset()

    // var imagePosition = $('#banner').offset();
    //
    // imagePosition.top // number of pixels from the top of the document
    // imagePosition.left // number of pixels from the left edge of the document

    // $('#caption').css({
    //     'position' : 'absolute',
    //     'left' : imagePosition.left,
    //     'top' : imagePosition.top
    // });


    // position()
    // $('.banner-slogan').position()

    // $('.banner-slogan').offset({
    //     left : 100,
    //     top : 200
    // });


    // Determining a Page’s Scrolling Position
    // .scrollTop()
    // .scrollLeft()




    // Ajax: Communication with the Web Server

    // Asynchronous JavaScript and XML


    // Ajax the jQuery Way


    // Using the load() Function
    // $('#banner').click(function () {
    //     //$(this).load('jQuery_lesson_5.html');
    //     $(this).load('jQuery_lesson_5.html #gallery');
    // });


    // The get() and post() Functions
    //
    // $.get(url, data, callback);
    // $.post(url, data, callback);


    // $.get('rateMovie.php','rating=5&user=Bob');
    // $.get('rateMovie.php','favFood=Mac & Cheese' );
    // $.get('rateMovie.php','favFood=Mac%20%26%20Cheese' );
    //
    // ' ' = %20
    // '&' = %26


    // console.log(encodeURIComponent('Mac & Cheese'));

    // console.log(decodeURIComponent('Mac%20%26%20Cheese'));


    // var queryString = 'favFood=' + encodeURIComponent('Mac & Cheese');
    // $.post('foodChoice.php', queryString);

    // $('#signup').submit(function(event) {
    //     event.preventDefault();
    //     var username = $('#username').val();
    //     var planet = $('#planet').val();
    //     $.post('assets/process.php', 'username=' + username + '&planet=' + planet, function () {
    //         alert('response has been received');
    //     });
    // });

    $('#signup').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var planet = $('#planet').val();
        $.post('assets/process.php',
        {
            username: username,
            planet: planet
        },
        function () {
            alert('response has been received');
        });
    });



    console.log();

}); // document ready end

