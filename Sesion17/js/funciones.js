
function determinar() {
    var cadena = document.getElementById('cadena').value;
    var resultado;
    if(cadena == "") {
        resultado = "La cadena esta vacia";
    } else if(cadena == cadena.toUpperCase()) {
        resultado = "La cadena está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
        resultado = "La cadena está formada sólo por minúsculas";
    }
    else {
        resultado = "La cadena está formada por mayúsculas y minúsculas";
    }
  
    alert(resultado);
    
}














/*
function verificarPass(pass) {
    var letrasPass = pass.split("");
    var letras = "abcdefghyjklmnñopqrstuvwxyz";
    var numeros = "0123456789";
    var minus, mayus, num;
    for (let i = 0; i < letrasPass.length; i++) {
        if(letrasPass[i])
        
    }
    
}*/