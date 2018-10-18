const stages = [
    ['businessman-1', 'You need a translation.'],
    ['elegant-woman-inviting', 'We are happy to help!'],
    ['professionals', 'There are professionals to solve your problems.'],
    ['flight', 'You can relax. We will take care of your stuff.'],
    ['giving-woman', 'We will deliver your translation.'],
    ['happy-michelle', 'You\'ll get it just in time.'],
    ['happy-duch', 'Enjoy your documents perfectly translated!'],
    ['old-and-glad', 'The highest quality allways!']
];
const pix = stages.map(stage => {
    const pic = new Image();
    pic.src = `images/${stage[0]}.jpg`;
    return pic;
}); console.log(pix);
// taken from CMS bundle (270cc.js)
$(document).ready(function () {
    const mySidenavId = '#mySidenav',
        $mySidenav = $(mySidenavId),
        $closeBtn = $('.closebtn'),
        $presentation = $('#presentation'),
        $presentationImgDiv = $('#presentation-image'),
        // .initial by default -- background-color: white;
        $presentationTextDiv = $('#presentation-text'),
        $presentationTextBlock = $presentationTextDiv.find('> div'),
        $presentationStages = $presentation.find('> section > div'),
        $mainNavigationMenu = $('.main-navigation-menu'),
        $plash = $('.dark-overlay'),
        classStart = 'start',
        classActive = 'active',
        speedOverlay = 600;
    $('#menu-hamburger').on('click', function () {
        // because of clash with the old css
        $mySidenav.toggleClass(classActive).toggleClass(classStart);
        $plash.fadeIn(speedOverlay);
        $closeBtn.show();
    });
    function closeMenu() {
        $mySidenav.removeClass(classActive);
        $plash.fadeOut(speedOverlay);
        $closeBtn.hide();
    }
    $plash.mousedown(function (e) {
        var clicked = $(e.target);
        if (clicked.is(mySidenavId) || clicked.parents().is(mySidenavId)) {
            return;
        } else {
            closeMenu();
        }
    });

    $mainNavigationMenu.find('li a').click(closeMenu);

    $closeBtn.on('click', closeMenu);

    $("body").niceScroll();
    // FIXME: optimize this!
    $mainNavigationMenu.find('> li:nth-child(3) > a').on('click', function (e) {
        e.preventDefault();
    });
    $(window).scroll(function () { }).on('resize', function () {
        document.title = $('body')[0].getBoundingClientRect().width;
    });

    // - carousel -
    const activeClass = 'active', stoppedClass = 'stopped',
        sqLen = $presentationStages.length;

    let int, tmt, tmtShow, tmtShow2, cnt = 0, carouselRun = true;

    function stopTime() {
        /* clearInterval(int);
        clearTimeout(tmt);
        clearTimeout(tmtShow);
        clearTimeout(tmtHandle);
        clearTimeout(tmtHide); */
        $presentationTextDiv.stop(true);
        carouselRun = false;
    }
    // squares
    $presentationStages.on('click', function () {
        stopTime();
        cnt = $(this).index();
        console.log('cnt', cnt);
        runCaruselInterval('restart');
    });
    // image block
    $presentationImgDiv.on('click', function () {
        if (carouselRun) {
            stopTime()
            $(this).addClass(stoppedClass);
        } else { // stopped
            //cnt++;
            runCaruselInterval('restart');
        }
    });
    const classTransparent = 'transparent',
        classNonTransparent = 'non-transparent';
    function setBlack() {
        console.log('setBlack');
        $presentationTextDiv.removeClass(classTransparent).addClass(classNonTransparent);
    }
    function removeBlack() {
        console.log('removeBlack');
        $presentationTextDiv.removeClass(classNonTransparent).addClass(classTransparent);
    }
    function setImgVisible() {
        console.log('setImgVisible');
        $presentationImgDiv.removeClass(classTransparent).addClass(classNonTransparent);
    }
    function setImgInvisible() {
        console.log('setImgInvisible');
        $presentationImgDiv.removeClass(classNonTransparent).addClass(classTransparent);
    }

    function runCaruselInterval(start) {
        console.log('runCaruselInterval');
        carouselRun = true;
        $presentationImgDiv.removeClass(stoppedClass);
        int = setInterval(() => {
            if (cnt === sqLen) {
                cnt = 0;
                clearInterval(int);
                tmt = setTimeout(runCaruselInterval, 0);
            } else {
                if (start) {
                    $presentationTextDiv.removeClass('initial');
                    $presentationTextBlock.text('');
                    $presentationTextDiv.addClass(classTransparent);
                    var tmtRunCarousel = setTimeout(carousel, 1500);
                    start = false;
                } else {
                    ++cnt;
                    carousel();
                }
            }
        }, 5000);
    }

    function carousel(start) {
        console.log(`
-----------------------------------
carousel
===================================`);
        // 1. set text
        $presentationTextBlock.text(stages[cnt][1]);
        // 2. Set tex block black
        $presentationTextDiv.addClass(classNonTransparent);
        // after 1.5 sec
        // black, img is invisible by default
        tmtShow = setTimeout(() => {
            console.log('setTimeout tmtShow');
            // cnt is incremented after the function is completed
            $presentationStages.removeClass(activeClass);
            // mark square stage
            $presentationStages.eq(cnt).addClass(activeClass);
            document.title = 'cnt=' + cnt;
            // 3. set new image
            $presentationImgDiv.css('background-image', `url(${pix[cnt].src})`);
            // 4. toggle image visibility: transparent -> non-transparent
            // set .non-transparent
            setImgVisible();
            removeBlack();
        }, 2000);
    }
    //
    runCaruselInterval(true);
    const started = true;
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