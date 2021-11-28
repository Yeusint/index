<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <script type="text/javascript" src="js/jQuery.js"></script>
    <title>用户登录</title>
    <link type="text/css" rel="stylesheet" href="css/ind.css">
    <?php
    header("Content-type: text/html; charset=utf-8");
    $zh = array();
    $mm = array();
    $con = new mysqli("localhost","root","123456","user");
    if ($con->connect_error) {
        die("<script>alert('数据库连接错误：".$con->connect_error."');close()</script>");
    }
    $sql = 'select id,zh,mm from account';
    $r = $con->query($sql);
    if ($r->num_rows <= 0) {
        echo "<script></script>";
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["but"] == "登录") {
            while ($row = $r->fetch_assoc()) {
                array_push($zh,$row["zh"]);
                array_push($mm,$row['mm']);
            }
            if (in_array($_POST['zh'],$zh) == false) {
                script("if (confirm('没有此账号，是否前往注册？')) {location.assign('zc.php?zh=".$_POST['zh']."&mm=".$_POST['mm']."');}else{close();}");
            }
            else {
                $num = array_search($_POST['zh'],$zh);
                if ($_POST['mm'] != $mm[$num]){
                    msg('密码错误！');
                }
                else {
                    msg('都正确~');
                }
            }
        }
        elseif ($_POST["but"] == "注册") {
            header("Location: zc.php?zh=".$_POST['zh'].'&mm='.$_POST['mm']);
        }
        else {
            msg("参数错误！关闭提示框刷新页面");
        }
    }
    function msg($text) {
        echo "<script>alert('".$text."')</script>";
    }
    function script ($text) {
        echo "<script>".$text."</script>";
    }
    ?>
    <script type="text/javascript" src="js/ind.js"></script>
    <script type="text/javascript" src="js/ind-create.js"></script>
</head>
<body>
<script type="text/javascript" color="255,100,100" opacity='1' zIndex="-10" count="300" src="js/canvas-nest.js"></script>
<div class="box">
    <form action="" method="post">
        <div class="i-box" id="b-1"></div>
        <div class="i-box" id="b-2"></div>
        <button name="but" type="submit" value="登录">登录</button>
        <button name="but" type="submit" value="注册" style="margin-left: 10px">注册</button>
    </form>
</div>
<script>create()</script>
</body>
</html>