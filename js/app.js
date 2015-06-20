(function () {

    $('header ul.nav').on('click', function (e) {
        var $target = $(e.target),
            oldNumber = $('.content ul li.display')[0].className[4],
            newNumber = $target[0].className[5];

        if (oldNumber !== newNumber) {
            $('#nav-page' + oldNumber)
                .removeClass('display')
                .addClass('no-display');
            $('#nav-page' + newNumber)
                .removeClass('no-display')
                .addClass('display');

            $('.photo' + oldNumber)
                .removeClass('photo' + oldNumber + '-active');
            $('.photo' + newNumber)
                .addClass('photo' + newNumber + '-active');

            $('#page' + oldNumber)
                .removeClass('display')
                .addClass('no-display');
            $('#page' + newNumber)
                .removeClass('no-display')
                .addClass('display');
        }
    });


//    $('#ca-container-1').contentcarousel();
//    $('#ca-container-2').contentcarousel();
//    $('#ca-container-3').contentcarousel();
//    $('#ca-container-4').contentcarousel();
//    $('#ca-container-5').contentcarousel();
//    $('#ca-container-6').contentcarousel();
//    $('#ca-container-7').contentcarousel();
//    $('#ca-container-8').contentcarousel();
//    $('#ca-container-9').contentcarousel();
//    $('#ca-container-10').contentcarousel();


    $('#tabs').tabs();
    $('#textarea').val('');


    $('.content ul.book-list ul img').on('click', function (e) {
        var $el = $(e.target).parent().parent().parent().find('img').first();
        $el.animate({
            opacity: 0
        }, 200, function () {
            $el[0].src = $(e.target)[0].src;
            $el.animate({
                opacity: 1
            }, 200);
        });
    });

})();

function linkTo(rel) {
    $('html, body').animate({
        scrollTop: $('.' + rel).offset().top
    }, 1000);
}