<header id="header">
	<div class="container clearfix">
		<a href="index.php" class="logo">
			<span class="image"><img src="css/logo.png" alt="Maryetta School District"></span>
			<h1>LA GRANGE <span>Independent School District</span></h1>
		</a>
		<span class="search-icon"></span>
		<nav id="right-nav" class="nav" role="navigation">
			<div class="menu-btn"><span>Schools</span>
				<div class="menu-wrap">
					<ul>
						<li><a href="">district</a></li>
						<li><a href="">Hermes/Intermediate</a></li>
						<li><a href="">La Grange Middle School</a></li>
						<li><a href="">La Grange High School</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<div id="change_language_form">
			<form accept-charset="UTF-8" action="/apptegy_cms/change_language" class="custom" method="get">
				<div style="margin:0;padding:0;display:inline">
					<input name="utf8" type="hidden" value="✓"> </div>
				<select class="language-submittable" id="lang" name="lang">
					<option value="english" selected="selected">english</option>
					<option value="spanish">spanish</option>
					<option value="russian">russian</option>
					<option value="german">german</option>
					<option value="french">french</option>
					<option value="italian">italian</option>
					<option value="hindi">hindi</option>
					<option value="arabic">arabic</option>
					<option value="japanese">japanese</option>
					<option value="korean">korean</option>
				</select>
			</form>
		</div>

		<nav id="left-nav" class="nav" role="navigation">
			<div class="menu-btn"><span>MENU</span>
				<?php include '_menu.php';?>
			</div>
		</nav>

	</div>
</header>
