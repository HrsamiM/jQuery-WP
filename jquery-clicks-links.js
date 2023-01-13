
    jQuery(document).ready(function(){
    var URLs = {
        1: "https://mylink1.com",
        2: "https://mylink2.com",
        3: "https://mylink3.com",
        4: "https://mylink4.com"
    };

    function handleClick(linkNumber) {
        jQuery('.bg-chld-' + linkNumber + ' .elementor-element-populated').css({'background-color':'#3126BB'});
        jQuery('.cclink'+[linkNumber]).find("a").css({'color':'#fff'});
        setTimeout(function(){
            window.location.href = URLs[linkNumber];
        }, 1000);
    }

    jQuery('.cclink1').on('click', function(){handleClick(1)});
    jQuery('.cclink2').on('click', function(){handleClick(2)});
    jQuery('.cclink3').on('click', function(){handleClick(3)});
    jQuery('.cclink4').on('click', function(){handleClick(4)});
    });

