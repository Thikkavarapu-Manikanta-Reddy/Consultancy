var myIndex = 0;
carousel();
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function carousel() {
    var i;
    var x = document.getElementsByClassName("myPics");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
var k=$('#image');
$(window).resize(function(e) {
   var windowWidth = $(this).width();
   if (windowWidth < 500) {
       $("#image").hide();
   }
   else
   {
   	$("#image").show();
   }
});
$("#card").onmouseenter(function(){
    $("#overlay").css("display:show");
});
