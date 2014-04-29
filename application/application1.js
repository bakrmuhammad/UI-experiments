//jquery for everything

$(document).ready(function(){
    hover();
});

function hover(){
    $('.left a').mouseover(function(){
        $('body').css('background-color', '#3CD4FF');
        $('.selects a').css('color', '#000');
        $('.right').css('opacity', '0.5');
    });
    
    $('.left a').mouseout(function(){
        $('body').css('background-color', '#008AFF');
        $('.selects a').css('color', '#fff');
        $('.right').css('opacity', '1');
    });
    
    $('.right a').mouseover(function(){
        $('body').css('background-color', '#3CD4FF');
        $('.selects a').css('color', '#000');
        $('.left').css('opacity', '0.5');
    });
    
    $('.right a').mouseout(function(){
        $('body').css('background-color', '#008AFF');
        $('.selects a').css('color', '#fff');
        $('.left').css('opacity', '1');
    });
    
};