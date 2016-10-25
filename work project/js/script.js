// catalog item

var productItem = $(".catalog__goods__wrap-products").find(".catalog__goods__product-item");

$.fn.duplicate = function(count, appendTo) {
    for ( var i = 0; i < count; i++ ) {
        $(this).clone().appendTo(appendTo);
    }
};

productItem.duplicate(16, ".catalog__goods__wrap-products");

// mobile top menu

function myFunction() {
    var x = document.getElementById("main-menu");
    if (x.className === "menu__topnav") {
        x.className += " responsive";
    } else {
        x.className = "menu__topnav";
    }
}


