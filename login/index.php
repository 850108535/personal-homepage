<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <link rel="stylesheet" href="style/login.css" type="text/css">
</head>

<body>
    <div class="box">
        <form class="interface" action="Login.php" method="post">
            <div class="interface-l">
                <h2>登陆</h2>
                <div class="import">
                    <div class="user-pass">
                        <span>账号:</span>
                        <div>
                            <input type="text" name="username" placeholder="username" value="admin">
                        </div>
                    </div>

                    <div class="user-pass">
                        <span>密码:</span>
                        <div>
                            <input type="password" name="password" placeholder="password" value="adminchen">
                        </div>
                    </div>
                </div>
            </div>

            <div class="interface-r">
                <input type="submit" name="submit" class="submit" value="">
                <div class="circle"></div>
                <div class="int-pic"><img src="image/arrow-right.png"></div>
                <span>GO</span>
            </div>
        </form>
    </div>
</body>
</html>