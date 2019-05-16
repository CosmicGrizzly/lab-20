document.write('<nav id="navbar">\
           <a href="index.html">Home</a>\
           <a href="portfolio.html">Portfolio</a>\
           <a href="Hakodaempire.html" style="float:right;border-left:1px solid snow" >Empire</a>\
           <a href="about.html" style="float:right;border-left:1px solid snow" >About</a>\
           <div class=\'audio-container\'>\
           <audio controls>\
                   <source src="Bag Raiders - Shooting Stars.mp3" type="audio/mpeg">\
                 </audio>\
               </div>\
           <p class="date"><script> document.write(new Date().toLocaleDateString()); </script></p>\
</nav>\
<script>\
window.onscroll = function() {myFunction()};\
\
var navbar = document.getElementById("navbar");\
var sticky = navbar.offsetTop;\
\
function myFunction() {\
 if (window.pageYOffset >= sticky) {\
   navbar.classList.add("sticky")\
 } else {\
   navbar.classList.remove("sticky");\
 }\
}\
</script>\
');