$(document).ready(function () {
    var cont = 0;
    $("#ventana").toggle(1500);
    $(window).scroll(function () {
        cont++;
        console.log(cont);
        if (cont == 20) {
            $("#ventana").toggle(1500);
            
        }
    });
});