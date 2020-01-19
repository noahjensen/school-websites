<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
  <?php include '_head.php';?>
  <link href="shared/sections.css" rel="stylesheet">

</head>

<body>

  <!-- ======================== HEADER ======================== -->

  <?php include '_header.php';?>

    <!-- ======================== BREADCRUMB ======================== -->
    <div class="breadcrumb">
      <ol>
        <li><a href="/">District</a></li>
        <li class="active">Live Feed</li>
      </ol>
    </div>

    <!-- ======================== MAIN CONTENT ======================== -->
    <div class="main" role="main">
      <div class="container subpage">
        <div class="left-content">
          <div class="section-filters">
            <div id="change_filter_form">
              <form accept-charset="UTF-8" action="/apptegy_cms/change_filter" class="custom" method="get">
                <div style="margin:0;padding:0;display:inline">
                  <input name="utf8" type="hidden" value="✓">
                </div>
                <div class="styled-select">
                  <input id="org" name="org" type="hidden">
                  <input id="section_name" name="section_name" type="hidden" value="live_feed">
                  <select class="submittable" id="filter_id" name="filter_id">
                    <option value="4303">All</option>
                    <option value="4433">Athletics</option>
                    <option value="4305">Announcements</option>
                    <option value="5247">Academics</option>
                    <option value="5787">Technology</option>
                    <option value="5788">Staff</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <br>
          <div class="live-feed-list" id="lf_15145">
            <div class="live-feed-section">
              <div class="avatar-holder">
                <img alt="College Place" class="avatar-section" height="60" src="images/circled_thumb_CollegePlaceFloor.jpg" width="60">
              </div>
              <div class="status">
                Varsity Football Game cancelled for Friday, Sept 23rd due to player safety and injuries. Status will be evaluated on a weekly basis for future games. Safety is the upmost concern for our students.
              </div>
              <div class="date-author">
                6 days ago, College Place
              </div>
            </div>
          </div>
          <div class="live-feed-list" id="lf_13937">
            <div class="live-feed-section">
              <div class="avatar-holder">
                <img alt="College Place" class="avatar-section" height="60" src="images/circled_thumb_CollegePlaceFloor.jpg" width="60">
              </div>
              <div class="status">
                Internet &amp; phone systems are still down to to cut line. Please contact your child's school via school cell # Davis 629-2602 Sager 629-2603 CPHS 629-2601
              </div>
              <div class="date-author">
                19 days ago, College Place
              </div>
            </div>
          </div>
          <div class="live-feed-list" id="lf_13902">
            <div class="live-feed-section">
              <div class="avatar-holder">
                <img alt="College Place" class="avatar-section" height="60" src="images/circled_thumb_CollegePlaceFloor.jpg" width="60">
              </div>
              <div class="status">
                CPPS staff and parents all phones and Internet connections are currently down due to road work. We will keep you posted as to when services will be back online.
              </div>
              <div class="date-author">
                19 days ago, College Place
              </div>
            </div>
          </div>
          <div class="live-feed-list" id="lf_13468">
            <div class="live-feed-section">
              <div class="avatar-holder">
                <img alt="College Place" class="avatar-section" height="60" src="images/circled_thumb_CollegePlaceFloor.jpg" width="60">
              </div>
              <div class="status">
                Parents and CPHS sports fans- catch all varsity football games this fall on FM 102.3, KGDC2, with broadcasts starting at 6:35pm Friday nights hosted by CPHS teacher Scott Reardon calling the action!
              </div>
              <div class="date-author">
                25 days ago, College Place
              </div>
            </div>
          </div>
          <div class="live-feed-list" id="lf_13446">
            <div class="live-feed-section">
              <div class="avatar-holder">
                <img alt="College Place" class="avatar-section" height="60" src="images/circled_thumb_CollegePlaceFloor.jpg" width="60">
              </div>
              <div class="status">
                Remember no school September 1,2 and 5. Have a safe and fabulous Labor Day weekend! School will resume on Tuesday September 6th.
              </div>
              <div class="date-author">
                25 days ago, College Place
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <!-- ======================== FOOTER ======================== -->
    <?php include '_footer.php';?>


      <!-- ======================== JAVASCRIPTS ======================== -->
      <script src="js/jquery.min.js"></script>
      <script src="js/scripts.js"></script>
      <script src="js/jquery.colorbox-min.js"></script>



      <script>
        $(document).ready(function() {
          if ($('.group1').is(':visible')) {
            $(".group1").colorbox({
              rel: 'group1'
            });
          }
        });

      </script>
</body>

</html>
