//Za dropdown hover   
$(document).ready(function(){
    var x = window.matchMedia("(min-width: 990px)")
    if (x.matches) { 
        $('ul.navbar-nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
          }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
          })
    }
    



var producti = document.getElementsByClassName('overlay');
for(var i=0;i<producti.length;i++){
    
    //Dodavanje kursora na hover producta
    producti[i].style.cursor = "pointer";

    //funkcija za vodjenje na stranicu producta prilikom klika na sliku
    (function(index) { 
        producti[index].addEventListener("click", function() {
            //funkcija ce sacuvati svaku lokaciju za svaki posebni product
            window.location = "product"+producti[index].id+".html";
         })
   })(i);
}


});

