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
        $liHasChildrenLink = $('.menu-item-has-children').has('ul'),
        $menuAside = $(menuAside),
        $navigationContacts = $('#navigation-contacts'),
        $closeBtn = $('.closebtn'),
        $mainNavigationMenu = $('.main-navigation-menu'),
        classStart = 'start',
        classActive = 'active';

    $menuAside.on('transitionend', function () {
        if ($menuAside.hasClass(classActive)) {
            $navigationContacts.addClass(displayBlockClass);
            $closeBtn.show();
        }
    });
    $('#menu-hamburger').on('click', function () {
        // because of clash with the old css
        $menuAside.toggleClass(classActive).toggleClass(classStart);
    });
    
    function closeMenu() {
        $menuAside.removeClass(classActive);
        $navigationContacts.removeClass(displayBlockClass);
        $closeBtn.hide();
    }

    $closeBtn.on('click', closeMenu);
    // the first click on mobule. Next one is 'click' event
    $liHasChildrenLink.on('mouseover', function(event){
        $(this).find('.sub-menu').slideToggle(function(){
            $(this).toggleClass('expanded');
        });
        $(this).toggleClass('hovered');
    });

    $('.menu-item-has-children > a').on('click', function(event){
        $(this).next('.sub-menu').hasClass('expanded') || event.preventDefault();
    });

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