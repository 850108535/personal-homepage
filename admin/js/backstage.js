$('.option ul li').click(function(){
    $('.shade').css('width','0px');
    $('.arrows').css({
        'opacity':'0',
        'right':'-10px'
    });

    $(this).find('.shade').css('width','50px');
    $(this).find('.arrows').css({
        'opacity':'1',
        'right':'10px'
    });
})

$('.option ul li').hover(function(){
    $(this).find('.shade').css('width','50px');
    $(this).find('.arrows').css({
        'opacity':'1',
        'right':'10px'
    });
},function(){
    $('.shade').css('width','0px');
    $('.arrows').css({
        'opacity':'0',
        'right':'-10px'
    });
})