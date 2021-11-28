/*
Yeusint|Han Pika edit
start:October 10th 2021
last :November 12st 2021
name:ind.js
*/
var h = "1px";
setTimeout(function (){
    h = $(".i-box").css("height");
    document.getElementById("l-1").style.height = h;
    document.getElementById("l-2").style.height = h;
},100);
onload = function () {
    var a1 = document.getElementById("i-1");
    b1 = document.getElementById("b-1");
    a1.onfocus = function () {
        b1.className = "focus-box";
    };
    a1.onblur = function () {
        b1.className = "i-box";
    }


    var a2 = document.getElementById("i-2");
    b2 = document.getElementById("b-2");
    a2.onfocus = function () {
        b2.className = "focus-box";
    };
    a2.onblur = function () {
        b2.className = "i-box";
    }
}
function msg(type,msg) {
    var far = document.getElementById('c');
    var son = document.createElement("div");
    son.className = "msg";
    son.innerHTML = msg;
    if(type === 'err'){
        son.style.backgroundColor = "#f65c5c";
    }else if(type === 'warn'){
        son.style.backgroundColor = "#f8ea05";
        son.style.color = "black";
    }else if (type === 'tip'){
        son.style.backgroundColor = "#1B9AF7";
    }else if (type === 'cor'){
        son.style.backgroundColor = "#42A850"
    }
    else {
        son.style.backgroundColor = "#f65c5c";
        son.innerHTML = "参数错误！";
    }
    far.appendChild(son);
    setTimeout(function (){
        son.style.top = "30px";
        son.style.opacity = "1";
        setTimeout(function () {
            son.style.top = "-50px";
            son.style.opacity = "0";
            setTimeout(function () {
                son.remove();
            }, 500)
        }, 4000)
    },100)
}
function draw(digit,id) {
    var can = document.getElementById(id);
    let show_num;
    if (can === null) {
        msg('err', '未找到验证码canvas!')
        return '!';
    } else {
        show_num = [];
        var canvas_width = can.width;
        var canvas_height = can.height;//获取到canvas的对象，演员
        var context = can.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
        can.width = canvas_width;
        can.height = canvas_height;
        context.fillStyle = "rgb(255,255,255)";
        context.fillRect(0,0,canvas_width,canvas_height);
        var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length;//获取到数组的长度

        for (let i = 0; i < digit; i++) {  //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
            var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
            var deg = Math.random() - 0.5; //产生一个随机弧度
            var txt = aCode[j];//得到随机的一个内容
            show_num[i] = txt.toLowerCase();
            var x = 10 + i * 20;//文字在canvas上的x坐标
            var y = randomNum(15,canvas_height - 10) + Math.random() * 8;//文字在canvas上的y坐标
            context.font = "bold 23px 微软雅黑";

            context.translate(x, y);
            context.rotate(deg);

            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);

            context.rotate(-deg);
            context.translate(-x, -y);
        }
        for (i = 0; i <= 30; i++) { //验证码上显示线条
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (i = 0; i <= 70; i++) { //验证码上显示小点
            context.strokeStyle = randomColor();
            context.beginPath();
            x = Math.random() * canvas_width;
            y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
        jg = '';
        for (i = 0; i < show_num.length; i++) {
            jg = jg + show_num[i];
        }
        return jg;
    }
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random() * minNum+1,10);
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        default:
            return 0;
    }
}