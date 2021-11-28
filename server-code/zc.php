<html lang="zh">
<head>
    <title>账户注册</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="always" name="referrer">
</head>
<body>
<?php
header("Content-type: text/html; charset=utf-8");
$conn = new mysqli("localhost", "root", "123456", "yeusint");
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
    exit();
}
$sql = "insert into cs (zh, mm)
values ($_GET[zh], $_GET[mm])";
if ($conn->query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
</body>
</html>
