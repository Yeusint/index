<?php
echo '<title>账户注册</title>';
if (isset($_GET['zh']) == false) {
    $_GET['zh'] = '';
}
elseif (isset($_GET['mm']) == false) {
    $_GET['mm'] = '';
}
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $conn = new mysqli("localhost", "root", "123456", "user");
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }elseif ($_GET['zh'] == '') {
        echo '无参数';
    }elseif ($_GET['mm'] == ''){
        echo '无参数';
    }else {
        $sql = 'select zh from account';
        $r = $conn->query($sql);
        $a = array();
        $num = 0;
        if ($r->num_rows > 0) {
            while ($row = $r->fetch_assoc()) {
                array_push($a, $row['zh']);
            }
            $num = mysqli_num_rows($conn->query($sql));
        }
        if (in_array($_GET['zh'], $a) == false) {
            $sql = "insert into account (id, zh, mm)values ($num+1, '$_GET[zh]', '$_GET[mm]')";
            if ($conn->query($sql) === TRUE) {
                echo "新记录插入成功";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo '此账号已注册!';
        }
    }
    $conn->close();
}
