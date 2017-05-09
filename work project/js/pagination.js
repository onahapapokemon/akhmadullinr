(function paginationProd(){

var pagination = $(".catalog__goods__pagination"),
    paginationItem = pagination.find("li"),
    productsWrapper = $(".catalog__goods__wrap-products"),
    productItem  = productsWrapper.find(".catalog__goods__product-item"),
    visibleProd = 6;

var page = paginationItem.on("click", function(){
    paginationItem.removeClass("active");
    $(this).addClass("active");
    productItem.hide();
    console.log(productItem);
    var countPage = parseInt($(this).data("page"));
    var indexStartShowProd = (countPage-1)*visibleProd;

    for(var j = indexStartShowProd; j < productItem.length; j++){
        var hideProd = productItem[j];
        $(hideProd).show();
        }
    });

})();


// pagination pattern