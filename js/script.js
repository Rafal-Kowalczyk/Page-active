$(function () {
    // scrollowanie strony
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2500);
    });

    $(document).on('click','.navbar-collapse',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    var $window = $(window);
    var $slideAd = $('#slideUp');
    var endZone = $('#actions').offset().top;

    $window.on('scroll', function() {

        if (endZone < $window.scrollTop()) {
            $slideAd.animate({ 'right': '30px' }, 500);
        } else {
        $slideAd.stop(true).animate({ 'right': '-360px' }, 100);
        }

    });

});
