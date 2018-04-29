$("#toDescription").click(function(){
    if(!$(this).hasClass("subtitle_green")){
        $(this).addClass("subtitle_green");
        $("#toFeedback").removeClass("subtitle_green");
        $(".feedback__section").hide();
        $(".full-description__section").show();
    }
});

$("#toFeedback").click(function(){
    if(!$(this).hasClass("subtitle_green")){
        $(this).addClass("subtitle_green");
        $("#toDescription").removeClass("subtitle_green");
        $(".full-description__section").hide();
        $(".feedback__section").show();
    }
});