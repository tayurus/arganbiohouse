$(".product__sortitem").click(function () {
    if($(this).hasClass("product__sortitem_active")){
        $(this).children(".product__arrow").toggleClass("product__arrow_up");
    }
    else{
        $(".product__sortitem").removeClass("product__sortitem_active");
        $(this).addClass("product__sortitem_active");
    }
})
