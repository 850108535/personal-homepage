var clock = document.getElementById('clock');
var clock_pen = clock.getContext('2d');

clock.width = 400;
clock.height = 400;

clock.style.width = clock.width / 2 + 'px';
clock.style.height = clock.height / 2 + 'px';

var r = clock.width / 2;    //半径
var per = 400/clock.width;

//当页面缩小到指定宽度时缩小时钟
function shrink(){
    if(document.body.offsetWidth < '1300'){
        clock.width = 300;
        clock.height = 300;

        clock.style.width = clock.width / 2 + 'px';
        clock.style.height = clock.height / 2 + 'px';

        r = clock.width / 2;
        per = 400/clock.width;
    }else{
        clock.width = 400;
        clock.height = 400;

        clock.style.width = clock.width / 2 + 'px';
        clock.style.height = clock.height / 2 + 'px';

        r = clock.width / 2;
        per = 400/clock.width;
    }
}
shrink();



function frame(){
    clock_pen.save();
    clock_pen.translate(r,r);

    clock_pen.beginPath();
    clock_pen.arc(0,0,r,0,2*Math.PI);
    clock_pen.fillStyle = '#aca59f';
    clock_pen.fill();

    clock_pen.beginPath();
    clock_pen.lineWidth = 10 / per;
    clock_pen.arc(0,0,r - 20 / per,0,2*Math.PI);
    clock_pen.strokeStyle = '#434345';
    clock_pen.stroke();

    clock_pen.beginPath();
    clock_pen.arc(0,0,r - 26 / per,0,Math.PI);
    clock_pen.fillStyle = '#ffffff';
    clock_pen.fill();

    clock_pen.beginPath();
    clock_pen.arc(0,0,r - 26 / per,0,Math.PI,true);
    clock_pen.fillStyle = '#e6e7e9';
    clock_pen.fill();
}


//小时数和秒数的圆点
function dot(){
    for(var i=0;i<60;i++){
        let rad = 2 * Math.PI / 60 * i;
        let x = Math.cos(rad) * (r - 40 / per);
        let y = Math.sin(rad) * (r - 40 / per);

        clock_pen.beginPath();
        clock_pen.arc(x,y,6 / per,0,2*Math.PI);
        if(i%5 === 0){
            clock_pen.fillStyle = '#373b40';
        }else{
            clock_pen.fillStyle = '#aca59f';
        }
        clock_pen.fill();
    }

    var clock_num = [3,4,5,6,7,8,9,10,11,12,1,2];
    clock_num.forEach(function(num,index){
        let rad = 2 * Math.PI / 12 * index;
        let x = Math.cos(rad) * (r - 63 / per);
        let y = Math.sin(rad) * (r - 63 / per);

        clock_pen.font = '26px Teko';
        clock_pen.textAlign = 'center';
        clock_pen.textBaseline = 'middle';
        clock_pen.fillStyle = '#383c42';
        clock_pen.fillText(num,x,y);
    })
}

//时针
function hourHand(hour,minute){
    let rad = 2 * Math.PI / 12 * hour;
    let rat = 2 * Math.PI / 60 / 12 * minute;
    clock_pen.save();
    clock_pen.rotate(rad+rat);
    clock_pen.beginPath();
    clock_pen.lineWidth = 12 / per;
    clock_pen.lineCap = 'round';
    clock_pen.moveTo(0,20 / per);
    clock_pen.lineTo(0,-(r - 110 / per));
    clock_pen.strokeStyle = '#35393f';
    clock_pen.stroke();
    clock_pen.restore();
}

//分针
function minuteHand(minute){
    clock_pen.save();
    let rad = 2 * Math.PI / 60 * minute;
    clock_pen.rotate(rad);
    clock_pen.beginPath();
    clock_pen.lineWidth = 7 / per;
    clock_pen.moveTo(0,20 / per);
    clock_pen.lineTo(0,-(r - 80 / per));
    clock_pen.strokeStyle = '#35393f';
    clock_pen.stroke();
    clock_pen.restore();
}

//秒针
function secondHand(second){
    clock_pen.save();
    let rad = 2 * Math.PI / 60 * second;
    clock_pen.rotate(rad);
    clock_pen.beginPath();
    clock_pen.moveTo(4,20 / per);
    clock_pen.lineTo(0,-(r-60 / per));
    clock_pen.lineTo(-4,20 / per);
    clock_pen.fillStyle = '#a84f2c';
    clock_pen.fill();
    clock_pen.restore();
}

//时钟圆点
function centre(){
    clock_pen.beginPath();
    clock_pen.arc(0,0,5,0,2*Math.PI);
    clock_pen.fillStyle = '#ffc154';
    clock_pen.fill();
}

function run(){
    requestAnimationFrame(run);
    clock_pen.clearRect(0,0,clock.width,clock.height);
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    frame();
    dot();
    hourHand(hour,minute);
    minuteHand(minute);
    secondHand(second);
    centre();

    clock_pen.restore();
}
run();
