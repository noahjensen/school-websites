<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
  <?php include '_head.php';?>

</head>

<body>

  <!-- ======================== HEADER ======================== -->
  
  <?php include '_header.php';?>


   <!-- ======================== BREADCRUMB ======================== -->
   <div class="breadcrumb">
      <ol>
         <li><a href="#">Home</a></li>
         <li class="active">Mission</li>
      </ol>
   </div>

   <!-- ======================== MAIN CONTENT ======================== -->
   <div class="main" role="main">
      <div class="container clearfix subpage two_cols">
         <div class="left-sidebar">
            <h3>Welcome</h3>
            <ul class="left-links">
               <li><a href="#">Mission</a></li>
               <li><a href="#">Admin. & Staff Directory</a></li>
               <li><a href="#">Testimonials</a></li>
               <li><a href="#">School Board</a></li>
               <li><a href="#">St. Joseph Parish</a></li>
            </ul>

         </div>
         <div class="right-content">
            <h1>Mission Statement</h1>
            <p>Be it known to all who enter here that CHRIST is the reason for this school. He is the unseen but ever present teacher in its classes. He is the model of its facul ty and the inspiration for its students.</p>
            <div class="images-grid photos-1">
               <a class="group1" href="css/content-img4.jpg" title="Image description"><img src="css/content-img4.jpg"></a>

            </div>
            <h1>Philosophy</h1>
            <p>The philosophy of St. Joseph School is built upon the truth that God created man and man must tend toward God. Therefore, St. Joseph School is committed to the formation of the human person with respect to his final goal - God--as he fulfills his obligation to develop the intellectual and physical skills needed for the challenges of life. St. Joseph School seeks to develop adults of faith and intelligence, persons who have the courage to seek out the truth and follow it, persons who see God and respect Him in themselves and their fellow men. Ultimately, the goal is that of true education; that is, to develop the whole person---soul, mind, and body. St. Joseph School strives to integrate faith, learning, and living. Our goal is to form the total person in faith, education, and service.</p>
         </div>
      </div>
   </div>


   <!-- ======================== FOOTER ======================== -->
   <?php include '_footer.php';?>

   <!-- ======================== JAVASCRIPTS ======================== -->
   <script src="js/jquery.min.js"></script>
   <script src="js/scripts.js"></script>
   <script src="js/jquery.grid-a-licious.min.js"></script>
   <script src="js/jquery.colorbox-min.js"></script>



   <script>
      $(document).ready(function() {
         if($('.group1').is(':visible')) {
                $(".group1").colorbox({
                    rel: 'group1'
                });
            }
      });

   </script>
</body>

</html>
