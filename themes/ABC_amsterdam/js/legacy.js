var fb_timeout = null;
var fb_opts = { 'overlayShow': true, 'hideOnOverlayClick': true, 'showCloseButton': true, 'centerOnScroll': true, 'enableEscapeButton': true, 'autoScale': true };
var easy_fancybox_handler = function () {
    /* IMG */
    var fb_IMG_select = 'a[href*=".jpg"]:not(.nofancybox,.pin-it-button), area[href*=".jpg"]:not(.nofancybox), a[href*=".jpeg"]:not(.nofancybox,.pin-it-button), area[href*=".jpeg"]:not(.nofancybox), a[href*=".png"]:not(.nofancybox,.pin-it-button), area[href*=".png"]:not(.nofancybox)';
    jQuery(fb_IMG_select).addClass('fancybox image');
    var fb_IMG_sections = jQuery('div.gallery ');
    fb_IMG_sections.each(function () { jQuery(this).find(fb_IMG_select).attr('rel', 'gallery-' + fb_IMG_sections.index(this)); });
    jQuery('a.fancybox, area.fancybox, li.fancybox a:not(li.nofancybox a)').fancybox(jQuery.extend({}, fb_opts, { 'transitionIn': 'elastic', 'easingIn': 'easeOutBack', 'transitionOut': 'elastic', 'easingOut': 'easeInBack', 'opacity': false, 'hideOnContentClick': false, 'titleShow': true, 'titlePosition': 'over', 'titleFromAlt': true, 'showNavArrows': true, 'enableKeyboardNav': true, 'cyclic': false }));
    /* Auto-click */
    jQuery('#fancybox-auto').trigger('click');
}