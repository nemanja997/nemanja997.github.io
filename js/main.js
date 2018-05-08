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
    


//Dodavanje kursora na hover producta
var producti = document.getElementsByClassName('overlay');
for(var i=0;i<producti.length;i++){
    producti[0].style.cursor = "pointer";
}
   
   producti[0].onclick = function() {
    window.location = "product1.html";
};
producti[1].onclick = function() {
    window.location = "product2.html";
};
producti[2].onclick = function() {
    window.location = "product3.html";
};
producti[3].onclick = function() {
    window.location = "product4.html";
};
producti[4].onclick = function() {
    window.location = "product5.html";
};
producti[5].onclick = function() {
    window.location = "product6.html";
};
producti[6].onclick = function() {
    window.location = "product7.html";
};
producti[7].onclick = function() {
    window.location = "product8.html";
};

});

