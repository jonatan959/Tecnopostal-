$(document).ready(function()
{
    var altura= $('.menu').offset().top;
    $(window).on('scroll',function(){

        if ($(window).scrollTop()>altura)
        {
            $('.menu').addClass('menu-fixed');
        }
        else
        {
            $('.menu').removeClass('menu-fixed');
        }
    });
});

window.onload= function(){
    var contador=document.getElementById('contenedor_carga');
    contador.style.visibility ='hidden';   
    contador.style.opacity='0';  
}