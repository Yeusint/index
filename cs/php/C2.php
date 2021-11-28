<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>提交前认证</title>
    <script type="text/javascript">
        function yz(obj,type) {
            if (obj.value === ''){
                if (type === 'zh') {
                    document.getElementById('a').innerHTML = '请输入账号！';
                }else {
                    document.getElementById('b').innerHTML = '请输入密码！';
                }
            } else if(type === '$TCP'){
                var zh = document.forms['a']['zh'].value;
                var mm = document.forms['a']['mm'].value;
                return !(zh === '' || mm === '');
            } else {
                if (type === 'zh') {
                    document.getElementById('a').innerHTML = '';
                }else {
                    document.getElementById('b').innerHTML = '';
                }
            }
        }
    </script>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $zh = $_POST['zh'];
        $mm = $_POST['mm'];
        if ($zh != 'yeusint' or $mm != '123456') {
            echo '登录失败！';
        }else{
            echo '成功！';
        }
    }
    ?>
</head>
<body>
<form action="" method="post" onsubmit="yz('$TCP','')" name="a">
    <label>
        账号：<input onkeyup="yz(this,'zh')" name="zh"><br><span id="a"></span><br>
        密码：<input onkeyup="yz(this,'mm')" name="mm"><br><span id="b"></span>
        <button type="submit">提交测试</button>
    </label>
</form>
</body>
</html>

