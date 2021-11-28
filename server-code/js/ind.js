/*
Yeusint|Han Pika edit
start:October 10th 2021
last :October 15th 2021
name:ind.js
 */
var h = "1px";
var e = 1;
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
function ms() {
    if (e === 1) {
        alert("切换炫彩模式");
        e = 2;
    }
    else if (e === 2) {
        alert("切换普通模式");
        e = 1;
    }
    else {
        alert("什么都不切");
        e = 1;
    }
}
/*元素编辑开始*/
j1 = document.getElementById("b-1");
j2 = document.getElementById("b-2");

/*表面元素*/
s1 = document.createElement("div");
s1.id = "l-1";
s1.className = "line";
s2 = document.createElement("div");
s2.id = "l-2";
s2.className = "line"
s3 = document.createElement("input");
s3.id = "i-1";
s3.name = "zh";
s4 = document.createElement("input");
s4.id = "i-2";
s4.name = "mm";

/*深层元素*/
s5 = document.createElement("div");
s5.className = "tit";
s6 = document.createElement("div");
s6.className = "tit-2";
s7 = document.createElement("img");
s7.src = "pic/zh.png";
s7.alt = "账号";
s8 = document.createElement("div");
s8.className = "tit";
s9 = document.createElement("div");
s9.className = "tit-2";
s10 = document.createElement("img");
s10.src = "pic/mm.png";
s10.alt = "密码";

/*添加应用JS*/
j1.appendChild(s5);
j1.appendChild(s1);
j1.appendChild(s3);
j2.appendChild(s8);
j2.appendChild(s2);
j2.appendChild(s4);
s5.appendChild(s6);
s6.appendChild(s7);
s8.appendChild(s9);
s9.appendChild(s10);
/*元素编辑结束*/