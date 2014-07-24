$(document).ready(function () {

    $(".issue-detail").hide();

    $('.brief-issue').click(function () {

        $(this).next().slideToggle();

        if ($(this).children('.show-hide').text().trim().charCodeAt(0) === 9660) {

            $(this).children('.show-hide').html('&#9650;');
        } else {
           $(this).children('.show-hide').html('&#9660;');
        }
    });
});