$(document).ready(function () {

    $('#books').focus();

    var books = $('#books');
    var myform = $('#myform');
    var subButton = myform.find(':submit');

    myform.submit(function(){
        $("#order").empty();
        var search = $("#books").val();

        if(search === ""){
            myform.append('<p>Пожалуйста, введите название...</p>');
            books.on('focus', function(){
                $('p').remove();
            });
            books.on('keypress', function(){
                $('p').remove();
            });
        } else {
            var url = "";
            var img = "";
            var title = "";
            var author = "";
            var publishedDate = "";
            var date = "";
            var order = "";
            var description = "";
            var urlApi = "https://www.googleapis.com/books/v1/volumes?q=";
            var jsonFormat = "&format=json&jsoncallback=?";
            var ajaxURL = urlApi + search + jsonFormat;

            $.get(ajaxURL , function(response){
                console.log(response);
                for(var i=0; i<response.items.length; i++){
                    title=$('<p class="title">' + response.items[i].volumeInfo.title + '</p>');
                    if(response.items[i].volumeInfo.authors !== undefined){
                        author=$('<p class="author">' + response.items[i].volumeInfo.authors + '</p>');}
                    date = response.items[i].volumeInfo.publishedDate;
                    if (date !==undefined){
                        var newDate = date.split("-").reverse().join(".");
                        publishedDate=$('<p class="date">' + newDate + '</p>');}
                    img = $('<img class="big">');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;
                    img.attr('src', url);
                    order = $('<button id="'+i+'" class="opener">Заказать</button><br>');

                    img.appendTo('#result');
                    title.appendTo('#result');
                    author.appendTo('#result');
                    publishedDate.appendTo('#result');
                    order.appendTo('#result');
                }

                $('button.opener').click( function(){
                    $('#overlay').fadeIn(400).css('display', 'block');
                    $('#modal_form').css('display', 'flex');

                    $("#description").empty();

                    if(response.items[$(this).attr("id")].volumeInfo.description !== undefined){
                        description = $('<img class="small" src="' +
                            response.items[$(this).attr("id")].volumeInfo.imageLinks.smallThumbnail + '">' +
                            '<p>' + response.items[$(this).attr("id")].volumeInfo.description + '</p>');
                    } else {
                        description = $('<img class="small" src="' +
                            response.items[$(this).attr("id")].volumeInfo.imageLinks.smallThumbnail + '">');
                    }

                    description.appendTo('#modal_form #description');

                    title=$('<p class="title">' + response.items[$(this).attr('id')].volumeInfo.title + '</p>');
                    img = $('<img class="big">');
                    url = response.items[$(this).attr('id')].volumeInfo.imageLinks.thumbnail;
                    img.attr('src', url);

                    img.appendTo('#order');
                    title.appendTo('#order');

                    $('#order').css('display','none');

                });

                $('#form').validate({
                    rules: {
                        name: {
                            required:true,
                            minlength: 2
                        },
                        email: {
                            required:true,
                            email:true
                        },
                        tel: {
                            required:true,
                            pattern: '^\\+380\\d{2}\\d{3}\\d{2}\\d{2}$'
                        }
                    },
                    messages: {
                        name: {
                            required:"Введите Ваше Имя",
                            minlength: "Используйте не менее двух символов"
                        },
                        email: {
                            required:"Введите Ваш email",
                            email:"Используйте правильный формат email"
                        },
                        tel: {
                            required:"Введите Ваш номер телефона",
                            pattern: "Используйте правильный формат телефона"

                        }
                    },

                    submitHandler: function(){

                        $('#overlay').fadeIn(400).css('display', 'none');
                        $('#modal_form').css('display', 'none');

                        var name = $("input[type='text']").val();
                        var email = $("[type='email']").val();
                        var phone = $("input[type='tel']").val();
                        var fullInfo = $('<p class="info">Имя:' + name + '</p>' +
                            '<p class="info">Email:' + email + '</p>' +
                            '<p class="info">Телефон:' + phone + '</p>');

                        fullInfo.appendTo('#order');

                        $('#order').css('display','flex');
                        $("#result").empty();
                        return false;
                    }
                });
            });
        }

        subButton.prop('disabled', true);
        subButton.val('...поиск');

        return false;
    });

    books.on('focus', function(){
        $("#result").empty();
        subButton.prop('disabled', false);
        subButton.val('Отправить');
    });

    books.on('keypress', function(){
        $("#result").empty();
        subButton.prop('disabled', false);
        subButton.val('Отправить');
    });

});