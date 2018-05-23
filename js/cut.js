var box = document.getElementsByClassName('box');
var anim = true;
var control = true;     //控制滚轮事件是否可用
var roll_bool = true;       //该变量为false时网页将无法再利用滚轮切换页面


//当网页小于等于1024时网页竖排布，禁止使用滚轮切换页面
function roll_bear(){
    if(document.body.offsetWidth <= 1024){
        roll_bool = false;
    }else{
        roll_bool = true;
    }
}
roll_bear();        //页面加载时需要执行一次

window.onresize = function(){
    shrink();

    //调整博客区域b_tri元素的位置
    $('.b_tri').css({
        'left':-($('.b_tri').height() / 2),
        'width' : $(this).width() + $('.b_tri').height() / 2
    });

    roll_bear();
};

//页面切换时logo，菜单按钮进行动画
function lm_animation(){
    $('.box_m').addClass('m_ani');
    $('.logo').addClass('l_ani');

    setTimeout(function(){
        $('.box_m').removeClass('m_ani');
    },1000)

    setTimeout(function(){
        $('.logo').removeClass('l_ani');
    },1000)
}

//当菜单打开及作品详细内容打开时禁止滚轮事件,反之关闭时则重新启用滚轮事件
function Control_roller(){
    var _mess = $('.w_mess');

    //弹出导航菜单时禁用滚轮
    if($('.show_menu_list').css('left') == '0px'){
        control = false;
        return false;
    }else{
        control = true;
    }

    for(var i=0;i<_mess.length;i++){
        if($('.w_mess:eq('+i+')').css('display') == 'block'){
            control = false;
            break;
        }else{
            control = true;
        }
    }
}

//阻止连续触发滚轮事件
function animFun() {
    anim = false;
    setTimeout("anim = true",1000);
}

//滚轮向下
function rollDown(){
    for(var i=0;i<box.length;i++){
        if(box[i].classList.contains('top') && i < box.length - 1){
            box[i].classList.remove('top');
            box[i+1].classList.add('hidden','top');
            animFun();
            lm_animation();
            break;
        }
    }
}

//滚轮向上
function rollUp(){
    for(var i=0;i<box.length;i++){
        if(box[i].classList.contains('top') && i > 0){
            box[i].classList.remove('top','hidden');
            box[i-1].classList.add('top');
            animFun();
            lm_animation();
            break;
        }
    }
}

//滚轮事件
window.onmousewheel = function(e){
    e = e || window.event;
    if(e.wheelDelta && anim && roll_bool){       //IE Chrome
        Control_roller();
        if(e.wheelDelta > 0 && control){        //roll up
            rollUp();
        }
        if(e.wheelDelta < 0 && control){       //roll down
            rollDown();

        }
    }

}

//Firefox兼容
document.addEventListener('DOMMouseScroll',function(e){
    if(e.detail < 0){       //roll up
        console.log('a');
    }
    if(e.detail > 0){       //roll down
        console.log('b');
    }
})

//点击菜单显示指定区域
$('.show_menu_list ul li a').click(function(){
    var menu_list_arr = $('.show_menu_list ul li a');
    for(var i=0;i<menu_list_arr.length;i++){
        if(menu_list_arr[i] == this){
            skip(i);
        }
    }
})


function skip(num){
    var box_arr = $('.box');
    for(var o=num;o>0;o--){
        let o_num = o - 1;
        $('.box:eq('+ o_num +')').removeClass('top').addClass('hidden');
    }

    for(var o=num+1;o<box_arr.length;o++){
        $('.box:eq('+ o +')').removeClass('top hidden');
    }

    $('.box:eq('+num+')').addClass('hidden top');
}