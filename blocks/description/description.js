$(".description__rating-star").hover(function () {
    $(this).prevAll(".description__rating-star").css("background","url(img/item__star_active.png)");
    $(this).css("background","url(img/item__star_active.png)");
    $(this).nextAll(".description__rating-star").css("background","url(img/item__star.png)");
})

$(".description__rating-star").mouseout(function () {
    $(".description__rating-star").removeAttr("style");
})

$(".description__rating-star").click(function () {
    $(".description__rating-star").removeClass("description__rating-star_active");
    $(this).prevAll(".description__rating-star").addClass("description__rating-star_active");
    $(this).addClass("description__rating-star_active");
})

$(".description__button-arrow:not(.description__button-arrow_right)").click(function () {
    let cnt = parseInt($(".description__count").val()) - 1;
    if(cnt > 0){
        $(".description__count").val(cnt);
    }
})

$(".description__button-arrow_right").click(function () {
    let cnt = parseInt($(".description__count").val()) + 1;
    $(".description__count").val(cnt);
})
