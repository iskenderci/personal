$(function(){
    var efekt = "fadeInUp";

    $('.card').onLoad(function(){
        $(this).addClass("animated "+efekt).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated '+efekt);
        });
    });


})