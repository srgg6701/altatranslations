const stages = [
    ['businessman-1', 'You need a translation.'],
    ['elegant-woman-inviting', 'We are happy to help!'],
    ['professionals', 'There are professionals to solve your problems.'],
    ['flight', 'You may relax. We will take care of your stuff.'],
    ['giving-woman', 'We will deliver your translation.'],
    ['happy-michelle', 'You\'ll get it just in time.'],
    ['happy-duch', 'Enjoy your documents perfectly translated!'],
    ['old-and-glad', 'The highest quality allways!']
];
const pix = stages.map(stage => {
    const pic = new Image();
    pic.src = `images/${stage[0]}.jpg`;
    return pic;
});
// taken from CMS bundle (270cc.js)
$(function () {
    const displayBlockClass = 'display-block',
        menuAside = '#menu-aside',
        $menuAside = $(menuAside),
        $navigationContacts = $('#navigation-contacts'),
        $closeBtn = $('.closebtn'),
        $mainNavigationMenu = $('.main-navigation-menu'),
        classStart = 'start',
        classActive = 'active',
        speedOverlay = 600;

    $menuAside.on('transitionend', function () {
        $navigationContacts.toggleClass(displayBlockClass);
        $closeBtn.show();
    });
    $('#menu-hamburger').on('click', function () {
        // because of clash with the old css
        $menuAside.toggleClass(classActive).toggleClass(classStart);
    });
    function closeMenu() {
        $menuAside.removeClass(classActive);
        $closeBtn.hide();
    }

    $mainNavigationMenu.find('li a').click(closeMenu);

    $closeBtn.on('click', closeMenu);

    $("body").niceScroll();
    // FIXME: optimize this!
    $mainNavigationMenu.find('> li:nth-child(3) > a').on('click', function (e) {
        e.preventDefault();
    });

    $(window)./* scroll(function () { }). */on('resize', function () {
        document.title = $('body')[0].getBoundingClientRect().width;
    });
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