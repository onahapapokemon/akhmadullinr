

var dropDownMenu = document.querySelector('.header-nav__drop-menu');
var adviseMenuInput = $('.advice-menu input');

$( document ).ready(function() {


    // toggle menu func

    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $("#menu").toggle();
        $("#menu").toggleClass("hide");
    });


    // dropdown menu func

    dropDownMenu.onmouseover= function () {
        return dropDownMenu.parentNode.firstElementChild.style.color = '#fff';
    }
    dropDownMenu.parentNode.onmouseover= function () {
        return dropDownMenu.parentNode.firstElementChild.style.color = '#fff';
    }
    dropDownMenu.onmouseout = function () {
        if (event.relatedTarget != dropDownMenu.parentNode) {
            return dropDownMenu.parentNode.firstElementChild.style.color = '#999';
        }
    }
    dropDownMenu.parentNode.onmouseout = function () {
        if (event.relatedTarget != dropDownMenu) {
            return dropDownMenu.parentNode.firstElementChild.style.color = '#999';
        }
    }

    // advise menu func

    $('.advice-menu #tab1').change( function(){
        if( $(this).is(':checked') ) {
            $('#content-top-1').show();
            $('#content-text-1').show();
            $('#content-top-2').hide();
            $('#content-text-2').hide();
            $('#content-top-3').hide();
            $('#content-text-3').hide();
            $('#content-top-4').hide();
            $('#content-text-4').hide();
            $('#content-top-5').hide();
            $('#content-text-5').hide();
        }
    });

    $('.advice-menu #tab2').change( function(){
        if( $(this).is(':checked') ) {
            $('#content-top-2').show();
            $('#content-text-2').show();
            $('#content-top-1').hide();
            $('#content-text-1').hide();
            $('#content-top-3').hide();
            $('#content-text-3').hide();
            $('#content-top-4').hide();
            $('#content-text-4').hide();
            $('#content-top-5').hide();
            $('#content-text-5').hide();
        }
    });

    $('.advice-menu #tab3').change( function(){
        if( $(this).is(':checked') ) {
            $('#content-top-3').show();
            $('#content-text-3').show();
            $('#content-top-2').hide();
            $('#content-text-2').hide();
            $('#content-top-1').hide();
            $('#content-text-1').hide();
            $('#content-top-4').hide();
            $('#content-text-4').hide();
            $('#content-top-5').hide();
            $('#content-text-5').hide();
        }
    });

    $('.advice-menu #tab4').change( function(){
        if( $(this).is(':checked') ) {
            $('#content-top-4').show();
            $('#content-text-4').show();
            $('#content-top-2').hide();
            $('#content-text-2').hide();
            $('#content-top-3').hide();
            $('#content-text-3').hide();
            $('#content-top-1').hide();
            $('#content-text-1').hide();
            $('#content-top-5').hide();
            $('#content-text-5').hide();
        }
    });

    $('.advice-menu #tab5').change( function(){
        if( $(this).is(':checked') ) {
            $('#content-top-5').show();
            $('#content-text-5').show();
            $('#content-top-2').hide();
            $('#content-text-2').hide();
            $('#content-top-3').hide();
            $('#content-text-3').hide();
            $('#content-top-4').hide();
            $('#content-text-4').hide();
            $('#content-top-1').hide();
            $('#content-text-1').hide();
        }
    });
});








