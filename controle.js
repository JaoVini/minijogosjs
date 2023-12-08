function on (){
    document.getElementById("lamp").src = "off.png";
}
    function off (){
    document.getElementById("lamp").src = "on.png";  


}

setTimeout("console.log('Hello');",5000);

var contador = 0;
while (contador <10){
    console.log(contador);
    contador++;
}

var x = 1;
while (x != 1){
    console.log("Ligue essa luz!");
}

//
do{
    console.log("Hello");
}while(x !=1);
//exibe mas só uma única vez

function blink(){
    var intervalo = 0;
    var contador = 0;
    while(contador <10){
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='off.png';",intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='on.png';",intervalo);
        contador++;
        //adicionar +1 ao contador = 0 para que some até 10
}


}





