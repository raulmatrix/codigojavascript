var mensaje = "Estudio Sistemas Informaticos";
var mensajeConv = mensaje.toLowerCase();
var contador=0;
for(var i=0;i<mensajeConv.length;i++){
    if((mensajeConv.charAt(i)=='a')||(mensajeConv.charAt(i)=='e')||(mensajeConv.charAt(i)=='i')||(mensajeConv.charAt(i)=='o')||(mensajeConv.charAt(i)=='u')){
        contador++;
    }
}

console.log(contador);