// taken from CMS bundle (270cc.js)
$(document).ready(function () {
    var mySidenavId = '#mySidenav',
        $mySidenav = $(mySidenavId),
        $plash = $('.dark-overlay'),
        classStart = 'start',
        classActive = 'active',
        speedOverlay = 600;
    $('#menu-hamburger').on('click', function () {
        //if ($mySidenav.hasClass(classStart)) $mySidenav.removeClass(classStart);
        // because of clash with the old css
        $mySidenav.toggleClass(classActive).toggleClass(classStart);
        $plash.fadeIn(speedOverlay);
    });
    function closeMenu() {
        $mySidenav.removeClass(classActive);
        $plash.fadeOut(speedOverlay);
    }
    $plash.mousedown(function (e) {
        var clicked = $(e.target);
        if (clicked.is(mySidenavId) || clicked.parents().is(mySidenavId)) {
            return;
        } else {
            closeMenu();
        }
    });
    $('.main-navigation-menu li a').click(closeMenu);
    $('.closebtn').on('click', closeMenu);
    $("body").niceScroll();
    $('.main-navigation-menu > li:nth-child(3) > a').on('click', function (e) {
        e.preventDefault();
    });
    $(window).scroll(function () { }).on('resize', function(){
        document.title = $('body')[0].getBoundingClientRect().width;
    });
    /* $(window).load(function() {
        $(".load_block").delay(400).fadeOut("slow");
    }); */
});


/* var $liServiceProviders = $('#li-services-providers'),
    $noteProviders = $('#note-providers'),
    action;
$liServiceProviders.find('>a')
    .on('mouseenter', function(event){
        $noteProviders.slideDown();
    });
$liServiceProviders.on('mouseleave', function(){
        $noteProviders.slideUp();
    }); */