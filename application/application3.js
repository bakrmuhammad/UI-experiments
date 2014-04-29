//JQUERY SON

$(document).ready(function(){
    boxSlide();
});

function boxSlide(){
    $('.box').mouseover(function(){
        $(this).css('width', '200px');
    });
    $('.box').mouseout(function(){
        $(this).css('width', '120px');
    });
};