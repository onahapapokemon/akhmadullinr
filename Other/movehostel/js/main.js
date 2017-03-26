/**
 * Предзагрузка изораженией
 */
function preloadImages()
{
    for(var i = 0; i<arguments.length; i++)
        $("<img />").attr("src", arguments[i]);
}
function check_email(obj) {

    var val = obj.val();
    var rv_email = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

    if(val.length > 5  && val != 'Ваш Email' && rv_email.test(val)) {
        obj.removeClass('error');
        obj.addClass('not_error');
        return true;
    } else {
        obj.removeClass('not_error');
        obj.addClass('error');
    }

};
/**
 * Функция для отправки формы средствами Ajax
 **/
function AjaxFormRequest(result_id,form_id,url) {
    jQuery.ajax({
        url:     url, //Адрес подгружаемой страницы
        type:     "POST", //Тип запроса
        dataType: "html", //Тип данных
        data: jQuery(form_id).serialize(),
        success: function(response) { //Если все нормально
            $("input.inp").removeClass("active");
            $("input.inp").attr("value", "");
            $("feedsend").attr("disabled", "");
            window.location.href = "thanks.html"
            if ($(".reveal-modal").css("visibility") == "visible")
                $('#callForm').trigger('reveal:close');
        },
        error: function(response) { //Если ошибка
            alert("Возникла ошибка. Попробуйте отправить еще раз.");
        }
    });
}
function AjaxFormRequestt(region,form_region,url) {
    jQuery.ajax({
        url:     url, //Адрес подгружаемой страницы
        type:     "POST", //Тип запроса
        dataType: "html", //Тип данных
        data: jQuery("#"+form_region).serialize(),
        success: function(response) { //Если все нормально
            document.getElementById(region).innerHTML = response;
        },
        error: function(response) { //Если ошибка
            document.getElementById(region).innerHTML = "Ошибка получения региона";
        }
    });
}

$(document).ready(function() {
    $(".form_o1").click(function(){
        if ($(".price1").prop('checked') || $(".price2").prop('checked') || $(".price3").prop('checked') || $(".price4").prop('checked') || $(".price5").prop('checked') || $(".price6").prop('checked') || $(".price7").prop('checked') || $(".price8").prop('checked') || $(".price9").prop('checked')){
            $(".form_ov1").slideDown();
            $(".over").fadeIn();
            $(".er").slideUp();
            AjaxFormRequestt( 'region', 'form_region', 'form.php');
        }else{
            $(".er").slideDown();
        }

    });
    $(".form_o").click(function(){
        $(".form_ov").slideDown();
        $(".over").fadeIn();
    });
    $(".form_o1").click(function(){
        $(".form_ov1").slideDown();
        $(".over").fadeIn();
    });
    $(".form_o2").click(function(){
        $(".form_ov2").slideDown();
        $(".over").fadeIn();
    });
    $(".form_o3").click(function(){
        $(".form_ov3").slideDown();
        $(".over").fadeIn();
    });
    $(".form_o4").click(function(){
        $(".form_ov4").slideDown();
        $(".over").fadeIn();
    });
    $(".gl1").click(function(){
        $(".gl1_o").slideDown();
        $(".gl2_o").slideUp();
        $(".gl3_o").slideUp();
        $(".gl4_o").slideUp();
        $(".gl5_o").slideUp();
    });
    $(".sl_o1").click(function(){
        $(".sl_ov1").css({"opacity": "1", "left": "50%", "position" : "fixed"});
        $(".over").fadeIn();
    });
    $(".sl_o2").click(function(){
        $(".sl_ov2").css({"opacity": "1", "left": "50%", "position" : "fixed"});
        $(".over").fadeIn();
    });
    $(".sl_o3").click(function(){
        $(".sl_ov3").css({"opacity": "1", "left": "50%", "position" : "fixed"});
        $(".over").fadeIn();
    });
    $(".gl2").click(function(){
        $(".gl2_o").slideDown();
        $(".gl1_o").slideUp();
        $(".gl3_o").slideUp();
        $(".gl4_o").slideUp();
        $(".gl5_o").slideUp();
    });
    $(".gl3").click(function(){
        $(".gl3_o").slideDown();
        $(".gl2_o").slideUp();
        $(".gl1_o").slideUp();
        $(".gl4_o").slideUp();
        $(".gl5_o").slideUp();
    });
    $(".gl4").click(function(){
        $(".gl4_o").slideDown();
        $(".gl2_o").slideUp();
        $(".gl3_o").slideUp();
        $(".gl1_o").slideUp();
    });
    $(".gl5").click(function(){
        $(".gl5_o").slideDown();
        $(".gl2_o").slideUp();
        $(".gl3_o").slideUp();
        $(".gl1_o").slideUp();
        $(".gl4_o").slideUp();
    });
    $(".call_me").click(function(){
        $(".call_me_f").slideDown();
        $(".over").fadeIn();
    });
    $(".close").click(function(){
        $(".over_f1").slideUp();
        $(".over_f").slideUp();
        $(".over").fadeOut();
        $(".more_o").css({"left" : "500%"});
        $(".pr_ov").slideUp();
        $(".sl_ov1").css({"opacity": "0", "left": "-10000px;", "position" : "absolute"});
        $(".sl_ov2").css({"opacity": "0", "left": "-10000px;", "position" : "absolute"});
        $(".sl_ov3").css({"opacity": "0", "left": "-10000px;", "position" : "absolute"});
    });
    $(".over").click(function(){
        $(".over_f1").slideUp();
        $(".over_f").slideUp();
        $(".over").fadeOut();
        $(".more_o").css({"left" : "500%"});
        $(".pr_ov").slideUp();
        $(".sl_ov1").css({"opacity": "0", "left": "-10000px;", "position" : "absolute"});
        $(".sl_ov2").css({"opacity": "0", "left": "-10000px;", "position" : "absolute"});
        $(".sl_ov3").css({"opacity": "0", "left": "-10000px;", "position" : "absolute"});
    });
});

/**
 * Обработка при загрузке страницы
 */
$(function() {
    // Добавляем маску к вводу телефона
    $("input[name='phone']").each(function() {
        $(this).mask("+7 (999) 999-9999");
    });

    // отправка формы с помощью ajax
    $("form.feedform").submit(function() {
        $(this).children("input").removeClass("error");

        if ($(this).find(".name1").attr("value") != "") {
            if ($(this).find(".phone1").attr("value") != "") {
                $("feedsend").attr("disabled", "disabled");
                AjaxFormRequest("#message", this, "ajax.php");
                $(this).find(".error_f").slideUp();
            } else {
                $(this).find(".phone1").focus();
                $(this).find(".phone1").addClass("error_i");
                $(this).find(".error_n").slideUp();
                $(this).find(".error_f").slideDown();
                $(this).find(".error_f").html('Вы не указали телефон!');
            }
        } else {
            $(this).find(".name1").focus();
            $(this).find(".name1").addClass("error_i");
            $(this).find(".error_n").slideUp();
            $(this).find(".error_f").slideDown();
            $(this).find(".error_f").html('Вы не указали телефон!');
        }

        return false;
    });
    $("form.feedform1").submit(function() {
        $(this).children("input").removeClass("error");

        if ($(this).find(".name1").attr("value") != "") {
            if ($(this).find(".phone1").attr("value") != "") {
                $("feedsend").attr("disabled", "disabled");
                AjaxFormRequest("#message", this, "ajax.php");
                $(this).find(".error_f").slideUp();
            } else {
                $(this).find(".phone1").focus();
                $(this).find(".phone1").addClass("error_i");
                $(this).find(".error_n").slideUp();
                $(this).find(".error_f").slideDown();
                $(this).find(".error_f").html('Вы не указали телефон!');
            }
        } else {
            $(this).find(".name1").focus();
            $(this).find(".name1").addClass("error_i");
            $(this).find(".error_n").slideUp();
            $(this).find(".error_f").slideDown();
            $(this).find(".error_f").html('Вы не указали телефон!');
        }

        return false;
    });
});

