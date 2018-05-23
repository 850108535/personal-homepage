<?php
session_start();

if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == "" && $password == ""){
        echo "<script>alert('账号或密码不能为空');history.go(-1)</script>";
    }else{
        $con = new mysqli('localhost','root','root','perpage');
        $con -> query('set names utf8');
        $sql = "SELECT * FROM login WHERE username = '$username' and password = '$password' ";
        $result = $con -> query($sql);
        $data = array();
        while($tem = mysqli_fetch_assoc($result)){
            $data = $tem;
        };
        if(count($data)){

            $_SESSION['id'] = $data['id'];
            $_SESSION['username'] = $data['username'];
            $_SESSION['name'] = $data['name'];
            $_SESSION['user-id'] = $data['user-id'];
            $_SESSION['power'] = $data['power'];

            header('Location: http://localhost/personal-homepage/admin');
        }else{
            echo "<script>alert('请输入正确的账号和密码');history.go(-1)</script>";
        }
    }

}