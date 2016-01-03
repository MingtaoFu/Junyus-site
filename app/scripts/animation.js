$(window).on('scroll', function() {
    var top = $(window).scrollTop();
    if (top >= 3) {
        $('#navbar').addClass('small');
    } else {
        $('#navbar').removeClass('small');
    }
});

$('.navA').on('click', function() {
    if(window.innerWidth < 768) {
        $('.navbar-toggle').click();
    }
});
