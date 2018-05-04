$(".filter__name_root").click(function () {
    let subcat = $(this).next();
    if($(subcat).hasClass("filter__subcategory")){
        $(subcat).slideToggle(300);
        $(this).children(".filter__arrow").toggleClass("filter__arrow-down");
    }
});
