/*
Yeusint edit
start:October 23rd 2021
last :October 31st 2021
name:ind.js
*/
url_lj_name = location.pathname.split('/');
url_name = url_lj_name[url_lj_name.length - 1].split('.')[0];
function create() {
    v = document.createElement("div");
    v.id = "c";
    document.body.appendChild(v);
    if (url_name === 'dl') {
        /*login-start*/
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
        s3.autocomplete = "off";
        s4 = document.createElement("input");
        s4.id = "i-2";
        s4.type = "password";
        s4.name = "mm";
        s4.autocomplete = "off";

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

        /*应用JS*/
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
        /*login-end*/
    }
    else if(url_name === 'zc'){

    }
}