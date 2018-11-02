$(function(){
    $('#services-container .service-item h3')
        .on('mouseenter mouseleave', function(){
            const $menuPoint = $(this).prev();
            console.log('$menuPoint', $menuPoint);
            $menuPoint.toggleClass('active');
        });
});