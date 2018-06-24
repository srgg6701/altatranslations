var $liServiceProviders = $('#li-services-providers'),
    $noteProviders = $('#note-providers'),
    action;
$liServiceProviders.find('>a')
    .on('mouseenter', function(event){
        $noteProviders.slideDown();
    });
$liServiceProviders.on('mouseleave', function(){
        $noteProviders.slideUp();
    });