$(document).ready(function() {

    // magnific popup plugim
    $(".popup").magnificPopup({type:'image'});

    $('.popup_content').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    // animated plugins

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");
    $(".section_header").animated("fadeInUp", "fadeOutDown");
    $(".animation_1").animated("flipInY","fadeOutDown");
    $(".animation_2").animated("fadeInLeft","fadeOutDown");
    $(".animation_3").animated("fadeInRight","fadeOutDown");
    $(".left .resume_item").animated("fadeInLeft","fadeOutDown");
    $(".right .resume_item").animated("fadeInRight","fadeOutDown");

    // минимальная высота - высота документа
    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    });

    // скрипт фильтра портфолио
    $("#portfolio_grid").mixItUp();

    $(".s_portfolio li").click(function(){
       $(".s_portfolio li").removeClass("active");
       $(this).addClass("active");
    });

    // скрипт для id портфолио

   $(".portfolio_item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });

   // плагин валидации формы
    $("input, select, textarea").jqBootstrapValidation();

});

// функция прелоадера
$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");

});