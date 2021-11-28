<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>消息框测试</title>
    <style>
        html,body{
            margin: 0;
            padding: 0;
        }
        div#c {
            position: relative;
            left: 50%;
            float: left;
        }
        div.msg {
            position: relative;
            left: -50%;
            color: white;
            /*
            error
            background-color: #f65c5c;
            warning
            background-color: #f8ea05;
            tip
            background-color: #1B9AF7;
            */
            padding: 5px 100px;
            text-align: center;
            border-radius: 5px;
            transition: top 0.5s,opacity 0.5s;
            top: -50px;
            opacity: 0;
            margin-bottom: 10px;
        }
        br {
            height: 40px;
        }
    </style>
</head>
<body id="a">
<button onclick="a('err','Yeusint')">错误</button>
<button onclick="a('warn','Yeusint')">警告</button>
<button onclick="a('tip','Yeusint')">提示</button>
<button onclick="b(this)" id="p">测试</button>
<script>
    var v = document.createElement("div");
    v.id = "c";
    document.body.appendChild(v);
    function a(type,msg) {
        var far = document.getElementById('c');
        var son = document.createElement("div");
        son.className = "msg";
        if(type === 'err'){
            son.style.backgroundColor = "#f65c5c";
        }else if(type === 'warn'){
            son.style.backgroundColor = "#f8ea05";
            son.style.color = "black";
        }else if (type === 'tip'){
            son.style.backgroundColor = "#1B9AF7";
        }else {
            a('err',"参数错误");
        }
        son.innerHTML = msg;
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
    function b(obj) {
        alert(getComputedStyle(obj,null).width);
    }
</script>
</body>
</html>