<header id="header">
    <div class="container clearfix">
        <a href="index.php" class="logo">
            <h1>stanford avenue<span>school</span></h1>
            <span class="image"><img src="css/logo.png" alt="Maryetta School District"><i class="circle"></i></span>
            <h1>stanford avenue<span class="schools">district</span></h1>
        </a>

        <nav id="left-nav" class="nav" role="navigation">
            <div class="menu-btn"><span>MENU</span>
                <?php include '_menu.php';?>
            </div>
        </nav>
        <div id="change_language_form">
            <form accept-charset="UTF-8" action="/apptegy_cms/change_language" class="custom" method="get">
                <div style="margin:0;padding:0;display:inline">
                    <input name="utf8" type="hidden" value="✓"> </div>
                <select class="language-submittable" id="lang" name="lang">
                    <option value="english" selected="selected">english</option>
                    <option value="spanish">spanish</option>
                </select>
            </form>
        </div>
        

        <span class="search-icon no-bg-color"></span>
        <nav id="right-nav" class="nav" role="navigation">
        <div class="menu-btn"><span>Schools</span>
            <div class="menu-wrap">
                <ul>
                    <li class="active"><a href="index.php">district</a></li>
                    <li><a href="index.php">highland high</a></li>
                    <li><a href="index.php">highland middle</a></li>
                    <li><a href="index.php">cherokee elementary</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
</header>
