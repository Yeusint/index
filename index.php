<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <script type="text/javascript" src="js/jQuery.js"></script>
    <title>Yeusint</title>
    <style>
        p {
            font-size: 5em;
            margin: 0;
            padding: 0;
            text-align: center;
            color: pink;
        }
        #t1 {
            font-size: 3em;
            text-align: center;
            top: 280px;
        }
        button {
            outline: none;
            color: white;
            background-color: #00bfff;
            width: 100px;
            height: 50px;
            cursor: pointer;
            margin: 0 10px;
            border-radius: 5px;
            border: none;
        }
        form {
            position: absolute;
            border-top: 1px solid #000000;
            border-bottom: 1px solid #000000;
            width: 100%;
            top: 220px;
            float: left;
        }
        br {height: 20px}
        html,body {
            padding: 0;
            margin: 0;
        }
        span {
            float: left;
            font-size: 1em;
            color: red;
        }
        div {
            font-size: 1em;
            width: 100%;
            position: absolute;
        }
    </style>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if ($_POST['t'] == 'one'){
            header('Location: //wpa.qq.com/msgrd?v=3&uin=673457979&site=qq&menu=yes');
        }
        elseif ($_POST['t'] == 'two'){
            header('Location: //wj.qq.com/s2/6608392/335a');
        }
    }
    ?>
</head>
<body>
<p id="o">Yeusint</p>
<p id="t">一个爱弄人的靓仔~</p>
<br><br>
<form action="" method="post">
    <button type="submit" name="t" value="one">找我搞事情</button>
    <button type="submit" name="t" value="two">加入我们</button>
</form>
<div id="t1"></div>
<div style="top: 350px" id="t2"></div>
<script type="text/javascript">
    $(document).ready(function () {
        $("p").hide();
        $('#o').fadeToggle(1000);
        setTimeout(function () {
            $('#t').fadeToggle(1000);
        }, 1000)
        var index = 0;
        var word1 = 'Yeusint';
        var word2 =
            'Yeusint翼讯文化,我们是一个团队~'
            + '\n'
            + '当前团队人数：2人'
            + '\n'
            + "由此可见，我们的团队人数非常的匮乏"
            + '\n'
            + '所以，我们团队急需招募人才！'
            + '点击上面的\"加入我们\"，一起创造美好吧！（建议先点击第一个按钮联系我）'

        function type() {
            document.getElementById("t1").innerText = word1.substring(0, index++);
        }

        var a = setInterval(type, 100);
        setTimeout(function () {
            clearInterval(a)
        }, word1.length * 70)
        index = 0

        function type1() {
            document.getElementById("t2").innerText = word2.substring(0, index++);
        }

        var b = setInterval(type1, 50);
        setTimeout(function () {
            clearInterval(b)
        }, word2.length * 70)
    });
</script>
</body>
</html>