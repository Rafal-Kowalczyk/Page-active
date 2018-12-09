$(function () {
    // scrollowanie strony
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2500);
    });

    var $window = $(window);
    var $slideAd = $('#slideUp');
    var endZone = $('#footer').offset().top - $window.height() - 500;

    $window.on('scroll', function() {

        if (endZone < $window.scrollTop()) {
            $slideAd.animate({ 'right': '70px' }, 500);
        } else {
        $slideAd.stop(true).animate({ 'right': '-360px' }, 100);
        }

    });

});
