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
         <li><a href="#">Alliance City Schools </a></li>
         <li><a href="#">About </a></li>
         <li class="active">Vision/Mission</li>
      </ol>
   </div>

   <!-- ======================== MAIN CONTENT ======================== -->
   <div class="main" role="main">
      <div class="container clearfix subpage">
         <div class="right-content">
            <h2>Vision/Mission</h2>
            <h4>Vision</h4>
            <p>All Aviators will graduate prepared for life, college and careers.</p>

            <h4>Mission</h4>
            <p>Our mission is for all students to reach their fullest potential and become productive citizens through staff who establish high expectations; a safe, positive, and engaging learning environment; and content that supports critical thinking, collaboration, communication and creativity.</p>

            <h4>Aviator Profile</h4>
            <ol>
               <li>Communicators: Ask thoughtful questions, listen well and are able to clearly and concisely express their thoughts and ideas.</li>

               <li>Collaborators: Are able to compromise and work with people of all personality types and backgrounds to reach a common goal.</li>

               <li>Critical Thinkers: Have the ability to analyze and assess complex problems or situations and produce logical conclusions or solutions.</li>

               <li>Creative Innovators: Use imaginative and unique ideas to develop more efficient and effective methods of problem solving.</li>

               <li>Caring Citizens: Have selfless attitudes and strive to build stronger communities through civic pride, volunteerism and community involvement.</li>

               <li>Courageous Risk Takers: Are not afraid to take chances in order to accomplish something greater or facilitate change, whether it involves their career, finances, personal life or society.</li>
            </ol>

            <h1>H1 tag test</h1>
            <h2>H2 tag test</h2>
            <h3>H3 tag test</h3>
            <h4>H4 tag test</h4>
            <h5>H5 tag test</h5>
            <h6>H6 tag test</h6>
            <table class="table table-bordered">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Username</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                  </tr>
                  <tr>
                     <th scope="row">2</th>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                  </tr>
                  <tr>
                     <th scope="row">3</th>
                     <td>Larry</td>
                     <td>the Bird</td>
                     <td>@twitter</td>
                  </tr>
               </tbody>
            </table>
            <ul>
               <li>test 1</li>
               <li>test 2</li>
               <li>test 3</li>
               <li>test 4</li>
            </ul>
            <ol>
               <li>test 1</li>
               <li>test 2</li>
               <li>test 3</li>
               <li>test 4</li>
            </ol>
            <a href="#">link</a>
            <blockquote>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            </blockquote>
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
         if($('.group1').is(':visible')) {
                $(".group1").colorbox({
                    rel: 'group1'
                });
            }
      });

   </script>
</body>

</html>
