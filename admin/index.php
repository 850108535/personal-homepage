<?php
    session_start();

    if(!isset($_SESSION['username'])){
        header('Location: http://localhost/personal-homepage/login');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <link href="style/backstage.css" rel="stylesheet" type="text/css">
</head>
<body>

<div class="box">
    <div class="backstage" id="app">
        <div class="left">
            <div class="logo">CHEN</div>
            <div class="log-message">
                <div class="head-por t-c"><img src="image/head-p1.png"></div>
                <div class="log-name t-c"><?php echo $_SESSION['name'] ?></div>
                <div class="log-ID t-c">ID:<span><?php echo $_SESSION['user-id'] ?></span></div>
            </div>
            <div class="option">
                <ul>
                    <router-link to="/" tag="li" class="t-c">
                        <div class="shade"></div>
                        首页
                        <div class="arrows"><img src="image/right-arrows.png"></div>
                    </router-link>
                    <router-link to="/works" tag="li" class="t-c">
                        <div class="shade"></div>
                        作品管理
                        <div class="arrows"><img src="image/right-arrows.png"></div>
                    </router-link>
                    <router-link to="/blogs" tag="li" class="t-c">
                        <div class="shade"></div>
                        博客管理
                        <div class="arrows"><img src="image/right-arrows.png"></div>
                    </router-link>
                </ul>
            </div>

            <div class="logout">
                <a href="http://localhost/personal-homepage/logout/"></a>
                <div><img src="image/logout.png"></div>
                <span>set out</span>
            </div>
        </div>

        <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>

<script src="../js/jquery.js"></script>
<script src="js/vue.js"></script>
<script src="js/vue-router.js"></script>

<!--component-->
<script src="js/component/HomePage.js"></script>
<script src="js/component/works.js"></script>
<script src="js/component/blogs.js"></script>


<script>
    const routes = [
        { path:'/',component: HomePage },
        { path:'/works',component: works },
        { path:'/blogs',component: blogs }
    ];

    const router = new VueRouter({
        routes
    })

    const app = new Vue({
        router
    }).$mount('#app')
</script>
<!--<script src="js/backstage.js"></script>-->
</body>
</html>