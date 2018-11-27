console.log('carousel file here');
$(function () {
    // - carousel -
    const //$presentation = $('#presentation'),
        $presentationImgDiv = $('#presentation-image'),
        // .initial by default -- background-color: white;
        $presentationTextDiv = $('#presentation-text'),
        $presentationTextBlock = $presentationTextDiv.find('> div'),
        //$presentationStages = $presentation.find('> section > div'),
        $presentationStages = $('#section-stages > div'), //#presentation-side-bottom-right > section
        activeClass = 'active', stoppedClass = 'stopped',
        sqLen = $presentationStages.length;

    let // inside runCarouselInterval:
        intervalCarousel, timeoutCarouselAfterStart, //timeoutRunCarouselInterval,
        // inside carousel function:
        timeoutCarouselPresentation,
        // an active stage index 
        cnt = 0,
        carouselRun = true;
    // squares
    $presentationStages.on('click', function () {
        cnt = $(this).index();
        stopAllTimers();
        setCarouselInitialState();
        carouselReRun();
    });
    // image block
    $presentationImgDiv.on('click', function () {
        if (carouselRun) {
            stopAllTimers();
            $(this).addClass(stoppedClass);
        } else { // stopped
            carouselReRun(true);
        }
    });

    const classTransparent = 'transparent',
        classNonTransparent = 'non-transparent';
    // * tells that carousel is run
    // * removes stoppedClass from $presentationImgDiv
    // * runs carousel once and then set interval for it to be re-run
    function carouselReRun(checkStage) {
        setStateForCarouselIntervalRun();
        if (checkStage && cnt === sqLen) cnt = 0;
        carousel();
        runCarouselInterval();
    }
    // * toggles class name from 'initial' to 'transparent' on $presentationTextDiv
    // * removes text from text block
    function setCarouselInitialState() {
        $presentationTextDiv.removeClass('initial').addClass(classTransparent);
        $presentationTextBlock.text('');
    }
    // is called inside carouselReRun() and runCarouselInterval()
    // * tells that carousel is run
    // * removes stoppedClass from $presentationImgDiv
    function setStateForCarouselIntervalRun() {
        carouselRun = true;
        $presentationImgDiv.removeClass(stoppedClass);
    }
    // * sets interval for carousel
    function runCarouselInterval(start) {
        console.log('runCarouselInterval');
        setStateForCarouselIntervalRun();
        intervalCarousel = setInterval(() => {
            console.log('intervalCarousel');
            if (cnt === sqLen) {
                cnt = 0;
                clearInterval(intervalCarousel);
                runCarouselInterval();
                // timeoutRunCarouselInterval = setTimeout(runCarouselInterval, 0);
            } else {
                if (start) {
                    setCarouselInitialState();
                    timeoutCarouselAfterStart = setTimeout(carousel, 1500);
                    start = false;
                } else {
                    carousel();
                }
            }
        }, 5000);
    }
    // * runs a presentation
    function carousel() {
        // 1. set text
        try {
            $presentationTextBlock.text(stages[cnt][1]);
            // 2. Set tex block black
            $presentationTextDiv.addClass(classNonTransparent);
        } catch (err) {
            console.trace('%cError', 'background-color:pink', err.message);
            if (location.href.indexOf('://localhost:') !== -1) debugger;
        }
        // after 1.5 sec
        // black, img is invisible by default
        timeoutCarouselPresentation = setTimeout(() => {
            // console.log('setTimeout tmtShow, cnt=>', cnt);
            // cnt is incremented after the function is completed
            $presentationStages.removeClass(activeClass);
            // mark square stage
            $presentationStages.eq(cnt).addClass(activeClass);
            // document.title = 'cnt=' + cnt;
            // 3. set new image
            $presentationImgDiv.css('background-image', `url(${pix[cnt].src})`);
            // 4. toggle image visibility: transparent -> non-transparent
            // set .non-transparent
            $presentationImgDiv.removeClass(classTransparent).addClass(classNonTransparent);
            //
            $presentationTextDiv.removeClass(classNonTransparent).addClass(classTransparent);
            ++cnt;
        }, 2000);
    }
    //
    runCarouselInterval(true);
    // prevents all delayed actions
    function stopAllTimers() {
        // stop carousel
        clearInterval(intervalCarousel);
        // cansel an initial carousel starting
        clearTimeout(timeoutCarouselAfterStart);
        // clearTimeout(timeoutRunCarouselInterval);
        clearTimeout(timeoutCarouselPresentation);
        // $presentationTextDiv.stop(true);
        carouselRun = false;
    }
});