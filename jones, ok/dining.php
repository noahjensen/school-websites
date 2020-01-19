<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
  <?php include '_head.php';?>
    <link href="css/shared/sections.css" rel="stylesheet">

</head>

<body>

  <!-- ======================== HEADER ======================== -->

  <?php include '_header.php';?>

    <!-- ======================== BREADCRUMB ======================== -->
    <div class="breadcrumb">
      <ol class="container">
        <li><a href="/">District</a></li>
        <li><a href="http://buttonwillowca.apptegy.us/dining">Dining Options</a></li>
      </ol>
    </div>

    <!-- ======================== MAIN CONTENT ======================== -->
    <div class="main main-content" role="main">
      <div class="container clearfix">
        <div class="section-filters">
          <div id="change_filter_form">
            <form accept-charset="UTF-8" action="/apptegy_cms/change_filter" class="custom" method="get">
              <div style="margin:0;padding:0;display:inline">
                <input name="utf8" type="hidden" value="✓">
              </div>
              <div class="styled-select">
                <input id="org" name="org" type="hidden">
                <input id="section_name" name="section_name" type="hidden" value="dining">
                <select class="submittable" id="filter_id" name="filter_id">
                  <option value="1322">This Week</option>
                  <option value="1323">Next Week</option>
                  <option value="1406">All</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div class="news-list">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4">
                <div id="eventcalendar"></div>
              </div>
              <div class="col-md-8">
                <div class="current-date-menu">Mon, 26 Sep of 2016 </div>
                <div class="dining">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Breakfast
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        French Toast Sticks, Diced Peaches, Milk
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Lunch
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        BBQ Rib Sandwich, Ranch Beans, Juicy Pineapple, Milk
                      </div>
                    </div>
                  </div>
                </div>
                <div class="current-date-menu">Tue, 27 Sep of 2016 </div>
                <div class="dining">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Breakfast
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        Breakfast Pizza, Orange Smiles, Milk
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Lunch
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        French Toast Sticks, Sausage Patty, Hash Browns, Fruitable and Applesauce, Milk
                      </div>
                    </div>
                  </div>
                </div>
                <div class="current-date-menu">Wed, 28 Sep of 2016 </div>
                <div class="dining">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Breakfast
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        Cereal, Graham Crackers, Fresh Apple, Fruit Juice/Milk
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Lunch
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        Spicy Mac and Cheese, Popeye Salad, Fresh Grapes, Milk
                      </div>
                    </div>
                  </div>
                </div>
                <div class="current-date-menu">Thu, 29 Sep of 2016 </div>
                <div class="dining">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Breakfast
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        Back Packers, Juicy Pineapple, Milk
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Lunch
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        Grilled Cheese Sandwich, Baby Carrots, Diced Peaches, Milk
                      </div>
                    </div>
                  </div>
                </div>
                <div class="current-date-menu">Fri, 30 Sep of 2016 </div>
                <div class="dining">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Breakfast
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        Maple Breadstick, String Cheese, Mixed Fruit Cup, Milk
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="meal-type">
                        Lunch
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="menu-list">
                        Pizza Sliders, Green Beans, Mandarin Oranges, Milk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dining-legal">
          <h5>USDA Non Discrimination Statement</h5>
          <p>In accordance with Federal civil rights law and United States Department of Agriculture (USDA) civil rights regulations and policies, the USDA, its Agencies, offices and employees, and institutions participating in or administering USDA programs are prohibited from discriminating based on race, color, national origin, sex, disability, age or reprisal or retaliation for prior civil rights activity in any program or activity conducted or funded by USDA.</p>
          <p>Persons with disabilities who require alternative means of communication for program information (e.g. Braille, large print, audiotape, American Sign Language, etc.), should contact the Agency (State or local) where they applied for benefits. Individuals who are deaf, hard of hearing or have speech disabilities may contact USDA through the Federal Relay Service at (800) 877-8339. Additionally, program information may be made available in languages other than English.</p>
          <p>To file a program complaint of discrimination, complete the USDA Program Discrimination Complaint Form (AD-3027) found online at http://www.ascr.usda.gov/complaint_filing_html, and at any USDA office, or write a letter addressed to USDA and provide in the letter all of the information requested in the form. To request a copy of the complaint form, call(866) 632-9992. Submit your completed form or letter to USDA by:</p>
          <p>(1) mail: U.S. Department of Agriculture, Office of the Assistant Secretary for Civil Rights, 1400 Independence Avenue, SW, Washington, D.C. 20250-9410</p>
          <p>(2) fax: 202-690-7442: or</p>
          <p>(3) email: program.intake@usda.gov</p>
          <p>This institution is an equal opportunity provider.</p>
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
