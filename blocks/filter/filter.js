$(".filter__arrow").click(function () {
    let subcat = $(this).parent().next();
    if($(subcat).hasClass("filter__subcategory")){
        $(subcat).slideToggle(300);
        $(this).toggleClass("filter__arrow-down");
    }
});
