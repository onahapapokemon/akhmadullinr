$(document).ready(function() {

    // toggle-menu button function
    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
    });

    // toggle-menu button click
    $(".top_mnu li a").click(function(){
        $(".top_mnu").fadeOut(600);
        $("#sandwich").toggleClass("active");
        $(".toggle_mnu").css("background-color","rgba(0,0,0,.1)");
    });


    $(".toggle_mnu").click(function(){
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").removeClass("h1_opacify");
            $(".top_mnu").fadeOut(600);
            $(".toggle_mnu").css("background-color","rgba(0,0,0,.1)");
            $(".top_mnu li a").removeClass("fadeInUp animated");
        }
        else {
            $(".top_mnu").fadeIn();
            $(".top_text").addClass("h1_opacify");
            $(".toggle_mnu").css("background-color","rgba(0,0,0,.7)");
            $(".top_mnu li a").addClass("fadeInUp animated");
        }
    });



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