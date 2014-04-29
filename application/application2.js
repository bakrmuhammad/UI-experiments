//jquery for everything

$(document).ready(function(){
    slide();
});

function slide(){
    $('#trigger').mouseover(function(){
        $('.left').css('width', '85%');
    });
    $('#trigger').mouseout(function(){
        $('.left').css('width', '50%');
    }); 
    $('#trigger2').mouseover(function(){
        $('.right').css('width', '85%');
    });
    $('#trigger2').mouseout(function(){
        $('.right').css('width', '50%');
    }); 

};