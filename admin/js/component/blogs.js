const blogs = {
    template:`
        <div class="right-content">
            <!--头部-->
            <div class="header-data">
                <div class="header-data-l">
                    <h2>博客管理</h2>
                    <div class="setUp">
                        <div class="new-pic"><img src="image/new.png"></div>
                        <span>新建博客</span>
                    </div>
                </div>
                <div class="header-date">
                    <h4>当前时间</h4>
                    <div class="d-m-y">
                        <span class="header-day">18</span>         
                        <span class="header-month">May</span>               
                        <span class="header-year">2018</span> 
                    </div>              
                    <span class="header-time">10:25</span>               
                </div>
                
                <div class="return">
                    <span>返回</span>
                    <div><img src="image/return.png"></div>
                </div>
            </div>
            
            <!--作品列表-->
            <div class="works-list">
                <div class="works-list-i blogs-list-i">
                    <ul>
                        <li>ID</li>
                        <li>标题</li>
                        <li>分类</li>
                        <li>时间</li>
                        <li>内容</li>
                        <li>操作</li>
                    </ul>
                </div>
                
                <div class="works-list-o blogs-list-o">
                    <ul>
                        <li>01</li>
                        <li>深入了解MVC</li>
                        <li>技术文章</li>
                        <li>2018-5-19</li>
                        <li>MVC无人不知，可很多程序员对MVC无人不知，可很多程序员对</li>
                        <li>
                            <div class="operation">
                                <div><img src="image/update.png"></div>
                                <div><img src="image/delete.png"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
    `
}