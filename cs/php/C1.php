<?php
header("Content-type: text/html; charset=utf-8");
echo "<title>数据库查询平台</title>";
$con = new mysqli("localhost","root","123456","user");
if ($con->connect_error) {
    die("<script>alert('数据库连接错误：".$con->connect_error."');close()</script>");
}
if (isset($_GET['sj']) == false) {
    $_GET['sj'] = '';
}
$sql = "select id,zh,mm from account";
$r = $con->query($sql);
$a = array();
$b = array();
if ($r->num_rows > 0) {
    while ($row = $r->fetch_assoc()) {
        array_push($a, $row['zh']);
        array_push($b, $row['mm']);
    }
    if (in_array($_GET["sj"], $a)) {
        echo "编号：" . array_search($_GET['sj'], $a) . '<br>';
        echo '数据数量' . mysqli_num_rows($r) . '<br>';
        $c = array_search($_GET['sj'], $a);
        echo '账号：' . $a[$c] . '-密码:' . $b[$c];
    } else {
        echo '请提供数据或检查用户名！';
    }
}else{
    echo '数据库无数据！';
}
