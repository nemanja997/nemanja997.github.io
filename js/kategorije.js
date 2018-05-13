
$(document).ready(function(){
//Filtriranje kategorija
$(".meni-kategorije-lista li a").click(function () {
    var string= $(this).attr('id');
    if(string=='sve'){
        $(".card").parent().show();
    }else{
        $(".card").parent().hide();
    $("."+string).parent().show();
    }  
});

});