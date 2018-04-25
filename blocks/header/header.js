$(document).ready(function functionName() {
    $(".search-icon").click(function(event) {
        event.stopPropagation();
        $(".search-icon form").toggle();
        $(".modal-wrapper").show();
    });

    $(".search-icon .search-clear").click(function() {
        event.stopPropagation();
        $(".search-icon input").val("");
        $(".search-icon form").toggle();
        $(".modal-wrapper").hide();
    });

    $(".search-icon input").click(function(event) {
        event.stopPropagation();
    })

    $(".modal-wrapper").click(function() {
        $(".search-icon form").hide();
        $(".modal-wrapper").hide();
    });

});
