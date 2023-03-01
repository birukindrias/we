<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>
    <link rel="stylesheet" href="prod.css">
    <!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->

</head>
<body>
    <!-- <div class="nav">
        <nav>
            <div class="logo"></div>
            <div class="nav_link">
                <div class="list">
                    <a href="">home</a>
                    <a href="">products</a>

                    <a href="">info</a>
                </div>

            </div>
        </nav>
    </div> -->
    <!-- nav -->

    <div class="navo">
        <navi>
            <div class="nav_linka">
                <div class="list">
                    <a href="/index.html">Home</a>
                    <a href="/prod.php">Products</a>

                    <a href="/tr/index.html">Info</a>
                    <div class="right">+2586231123</div>
                </div>
                <span style="font-size:30px;cursor:pointer" class="span" onclick="openNav()">&#9776;</span>

            </div>
            <div class="logo">
                <p>Twelede <br>Shope</p>
            </div>
        </navi>
    </div>

    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="/">Home</a>
        <div class="ib"></div>
        <a href="/prod.php">Products</a>
        <div class="ib"></div>
    
        <a href="/tr/index.html">Info</a>
        <div class="ib"></div>
    
        <!-- <a href="#">Contact</a> -->
      </div>    

          
            

    <!-- products -->
    <section class="products_sec">
        <div class="products">
            <div class="grid">
               <?php 
               $im = ['1.JPG',  '2.JPG',  '3.JPG' , '4.JPG',  '5.JPG'  ,'6.JPG'  ,'7.JPG','8.JPG','9.JPG'];
             foreach ($im as $i ) {
                # code...
                echo ' <div>
                <div class="img"><img src="./imgs/pro/'.$i.'" alt=""></div>
                <div class="text_">
                    <p>$50</p>
                </div>
            </div>';

              
               }
              ?>
           
            </div>
        
        </div>
    </section>

  

    <!-- bot nav -->
    <section class="fotter">
        <footer>
            <div class="heading">Tewelde Shope</div>
            <div class="logos">
                <div class="social">
                    <img src="https://img.icons8.com/ios-filled/50/null/facebook-new.png" />
                </div>
                <div class="social">
                    <img src="https://img.icons8.com/ios-filled/50/null/twitter.png" />
                </div>
                <div class="social">
                    <img src="https://img.icons8.com/ios-filled/50/null/gmail.png" />

                </div>
            </div>
        </footer>
    </section>
    <script>
     
       
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }
        
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    </script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

</body>
</html>