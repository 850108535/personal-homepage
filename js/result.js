
//调整博客区域b_tri元素的位置
$('.b_tri').css({
    'left':-($('.b_tri').height() / 2),
    'width' : $(this).width() + $('.b_tri').height() / 2
});

//点击作品显示详细内容
function works_mess(num){
    $('.w_mess:eq(' + num + ')').fadeIn();
    $('.works_message').css('z-index','999');
    $('html').css('overflow-y','hidden');
}

//隐藏详细内容
function cloes_mess(){
    $('.m_cloes').click(function(){
        $(this).parent().parent().fadeOut();
        $('html').css('overflow-y','visible');
        setTimeout(function(){
            $('.works_message').css('z-index','0');
        },500);
    })

    $('.m_shade').click(function(){
        $(this).parent().fadeOut();
        $('html').css('overflow-y','visible');
        setTimeout(function(){
            $('.works_message').css('z-index','0');
        },500);
    })
}

//切换博客
function cut_blogs(){
    var cur_arr = $('.blog_cut').find('div')
    cur_arr.click(function(){
        for(var i=0;i<cur_arr.length;i++){
            cur_arr[i].className = 'b_raw';
            $(this).attr('class','trigger');
        }
    })
}

//菜单展开
function click_menu(){
    $('.menu').click(function(){
        $('.show_menu_list').css('left','0');
        setTimeout(function(){
            $('.show_menu_list ul li').css({
                'margin-left':'0px',
                'opacity':'1'
            });
            $('.menu_close').css({
                'transform':'rotate(180deg)',
                'opacity':'1'
            })
        },500);
        $('.show_menu_shade').fadeIn();
    });

    $('.show_menu_shade,.menu_close').click(function(){
        $('.show_menu_list').css('left','-35%');
        $('.show_menu_shade').fadeOut();
    })
}

//菜单字体
function menu_font(){
    $('.show_menu_list ul li a').hover(function(){
        $('.show_menu_list ul li a').css('color','#193551');
        $(this).css('color','#fde9c4');
    },function(){
        $('.show_menu_list ul li a').css('color','#fff');
    })
}


cloes_mess();
cut_blogs();
click_menu();
menu_font();