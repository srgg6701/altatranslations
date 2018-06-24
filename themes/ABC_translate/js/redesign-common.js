var $liServiceProviders = $('#li-services-providers'),
    $noteProviders = $('#note-providers'),
    action;
$liServiceProviders
    .on('mouseenter', function(event){
        $noteProviders.slideDown();
    })
    .on('mouseleave', function(){
        $noteProviders.slideUp();
    });