var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(201,171,36)";

var butFill = document.getElementById("butFill");
butFill.addEventListener('click', moverRectangulo);



const LIMITE_CARGA = 60;

var rect = {
    posX: 30,
    posY: 480,
    ancho: 300,
    alto: 10
}



var interval = null;

function moverRectangulo(){
    
    if(interval === null){
        interval = setInterval(function(){

            if(estaEnElLimite()){
                alert("Tarea completada");
                clearInterval(interval);
                interval = null;
            }

            rect.posY -= 0.5;
            rect.alto += 0.5;
            limpiarTablero();
            pintarRectangulo(rect); 
            
        }, 3)
    }
    else{
        clearInterval(interval);
        interval = null;
    }

}

function estaEnElLimite(){
    return rect.posY <= LIMITE_CARGA;
}

function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarRectangulo({ posX, posY, ancho, alto}){
    ctx.fillRect(posX, posY, ancho, alto);
}



