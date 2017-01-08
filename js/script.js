
$(document).ready(function() {
    $('#myCarousel').hide().fadeIn(700);
    $(".fadeImageIn").addClass("showImage")
    $(window).scroll(function () {

        if ($(window).scrollTop() > 300) {
            $("#navbar").addClass("fixed ");
        }
        if ($(window).scrollTop() < 301) {
            $("#navbar").removeClass("fixed");
        }
    });
});

$(function(){
    $('.carousel').carousel({
      interval: 3000
    });
});


$(window).scroll(function() {
    fadeInByScrolling();
    fadeBtnIn();
    flip();
});

function fadeInByScrolling() {

    var wScroll = $(window).scrollTop();

    if($("div#bigcallout").offset().top -900   < wScroll) {
        $("div#bigcallout").addClass("test1");
    }
}
function fadeBtnIn() {

    var wScroll = $(window).scrollTop();

    if($("div#fliegendeButtons").offset().top -650 < wScroll) {
        $("div#fliegendeButtons .btn-default").addClass("fadeBtnIn");
    }

}

function flip() {

    var wScroll = $(window).scrollTop();

    if($(".row.imageflipper").offset().top -900 < wScroll) {
        $("div.row.imageflipper").addClass("flip");
    }

}
