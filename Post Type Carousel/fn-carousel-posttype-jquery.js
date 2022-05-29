var current = 0;
var imagenes = new Array();

jQuery(document).ready(function() {
var numImages = 6;
if (numImages <= 3) {
    jQuery('.right-arrow').css('display', 'none');
    jQuery('.left-arrow').css('display', 'none');
}

jQuery('.left-arrow').on('click',function() {
    if (current > 0) {
        current = current - 1;
    } else {
        current = numImages - 3;
    }

    jQuery(".carrusel").animate({"left": -(jQuery('#service_'+current).position().left)}, 600);

    return false;
});

jQuery('.left-arrow').on('hover', function() {
    jQuery(this).css('opacity','0.5');
}, function() {
    jQuery(this).css('opacity','1');
});

jQuery('.right-arrow').on('hover', function() {
    jQuery(this).css('opacity','0.5');
}, function() {
    jQuery(this).css('opacity','1');
});

jQuery('.right-arrow').on('click', function() {
    if (numImages > current + 3) {
        current = current+1;
    } else {
        current = 0;
    }

    jQuery(".carrusel").animate({"left": -(jQuery('#service_'+current).position().left)}, 600);

    return false;
}); 
});