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
    console.log('is mobile? => ', isMobile);
    // set device type class as we need to handle mouseenter event in some cases specifically
    $('body').addClass(isMobile ? 'mobile' : 'desktop');
    const 
        activeClass = 'active',
        displayBlockClass = 'display-block',
        expandedClass = 'expanded',
        passiveClass = 'passive',
        startClass = 'start',
        subMenuClassDot = '.sub-menu',
        menuAside = '#menu-aside',
        $searchForm = $('#searchform'),
        $searchFormField = $searchForm.find('input[type="text"]'),
        $searchFormButton = $searchForm.find('button[type="submit"]'),
        $searchFormClose = $searchForm.find('.close'),
        $liHasChildrenLink = $('.menu-item-has-children').has('ul'),
        $menuAside = $(menuAside),
        $navigationContacts = $('#navigation-contacts'),
        $serviceSubj = $('#section-services > div'),
        $closeBtn = $('.closebtn'),
        $mainNavigationMenu = $('.main-navigation-menu');

    $menuAside.on('transitionend', function () {
        if ($menuAside.hasClass(activeClass)) {
            $navigationContacts.addClass(displayBlockClass);
            $closeBtn.show();
        }
    });
    $('#menu-hamburger').on('click', function () {
        // because of clash with the old css
        $menuAside.toggleClass(activeClass).toggleClass(startClass);
    });

    function closeMenu() {
        $menuAside.removeClass(activeClass);
        $navigationContacts.removeClass(displayBlockClass);
        $closeBtn.hide();
    }
    function handleSubMenuState(obj) {
        // slide toggle!
        $(obj).find(subMenuClassDot)
            // make it expanded
            .slideToggle(function () {
                $(obj).toggleClass(expandedClass);
        });
        $(obj).toggleClass('hovered');
    }

    $closeBtn.on('click', closeMenu);
    // the first click on mobule. Next one is 'click' event
    $liHasChildrenLink.on('mouseenter click', function (event) {
        if ( isMobile && event.type === 'mouseenter' || 
            !isMobile && event.type === 'click' ) {
            handleSubMenuState(this);
        }
    }).find('> a').on('click', function (event) {
        $(this).next(subMenuClassDot).hasClass(expandedClass) || event.preventDefault();
    });

    $serviceSubj.on('click', function () {
        $serviceSubj.removeClass(activeClass);
        $(this).addClass(activeClass);
    });

    $serviceSubj.find('a').on('click', function (event) {
        event.preventDefault();
    });
    // - form handlers -
    // click on the search button
    $searchFormButton.on('click', function (event) {
        if ($searchForm.hasClass(passiveClass)) {
            event.preventDefault();
            $searchForm.removeClass(passiveClass);
        }
    });
    // click on the close form button
    $searchFormClose.on('click', function () {
        $searchFormField.val('');
        $searchForm.addClass(passiveClass);
    })
    // - 
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