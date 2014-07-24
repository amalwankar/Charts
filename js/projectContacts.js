$(document).ready(function () {

    $(".contact-detail").hide();

    $('.contact-name').click(function () {

        $(this).next().slideToggle();

        if ($(this).children('.contact-position-and-email').children('.show-hide').text().trim().charCodeAt(0) === 9660) {

            $(this).children('.contact-position-and-email').children('.show-hide').html('&#9650;');
        } else {
           $(this).children('.contact-position-and-email').children('.show-hide').html('&#9660;');
        }
    });
});