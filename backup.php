<html lang="zh">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>注册登录页面</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="always" name="referrer">
    <link rel="stylesheet" type="text/css" href="css/ind.css">
    <script src="js/jQuery.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#first").slideToggle("fast");
            $(".button").click(function () {
                $(".qy").slideToggle("fast");
            });
        })
    </script>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $zh = $_POST["zh"];
        $mm = $_POST["mm"];
        $sub = $_POST["sub"];
        if ($sub == "登录") {
            if (strlen($zh) <= 5 or strlen($mm) <= 5) {
                if ($zh == "") {
                    echo "请输入账号！<br>";
                } elseif (strlen($zh) <= 5){
                    echo "请输入字符数大于5的账号！<br>";
                }
                if ($mm == "") {
                    echo "请输入密码！<br>";
                } elseif (strlen($zh) <= 5){
                    echo "请输入字符数大于5的密码！<br>";
                }
            }
            else {
                header("Location: /dl.php?zh=".$zh."&mm=".$mm);
            }
        } elseif ($sub == "注册") {
            $mm_1 = $_POST["yz"];
            if (strlen($zh) <= 5 or strlen($mm) <= 5 or $mm_1 != $mm) {
                if ($zh == "") {
                    echo "请输入账号！<br>";
                } elseif (strlen($zh) <= 5){
                    echo "请输入字符数大于5的账号！<br>";
                }
                if ($mm == "") {
                    echo "请输入密码！<br>";
                } elseif (strlen($zh) <= 5){
                    echo "请输入字符数大于5的密码！<br>";
                }
                if ($mm_1 != $mm) {
                    echo "两次密码不相同！<br>";
                }
            }
            else {
                header("Location: /zc.php?zh=".$zh."&mm=".$mm);
            }
        }
    }
    ?>
</head>
<body>
<button class="button">点击</button>
<div class="qy">
    <h1>登录</h1>
    <form action="" method="post">
        <h3>账号</h3>
        <input type="text" class="bjk" name="zh" alt="请输入账号"><br>
        <h3>密码：</h3>
        <input type="password" class="bjk" name="mm" alt="请输入密码">
        <input type="submit" name="sub" class="button" value="登录" style="width: 20%">
    </form>
</div>
<div class="qy" id="first">
    <h1>注册</h1>
    <form action="" method="post">
        <h3>账号：</h3>
        <input type="text" class="bjk" name="zh" alt="请输入账号"><br>
        <h3>密码：</h3>
        <input type="password" class="bjk" name="mm" alt="请输入密码"><br>
        <h3>确认密码：</h3>
        <input type="password" class="bjk" name="yz">
        <input type="submit" name="sub" class="button" value="注册" style="width: 20%">
    </form>
</div>
</body>
</html>