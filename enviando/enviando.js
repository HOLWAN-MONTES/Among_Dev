const canvas = document.getElementById("barraCargar");
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#ffffff";
const botonpor = document.getElementById("Botonpor");
botonpor.addEventListener('click', mostrar);
botonpor.addEventListener('click', moverRectangulo);


function mostrar (){
    canvas.style.display ="block";
}

const LIMITE_CARGA = 60;

var rect = {
    posX: 0,
    posY: 0,
    ancho: 500,
    alto: 20
}



var interval = null;

function moverRectangulo(){
    
    if(interval === null){
        interval = setInterval(function(){

            if(estaEnElLimite()){
                alert("Tarea completada");
                clearInterval(interval);
                interval = null;
                const carga = document.getElementById("cargar")
                 /* carga.style.display="none"  */
                
            }

            rect.posX += 0.5;
            rect.ancho -= 0.5;
            limpiarTablero(LIMITE_CARGA);
            pintarRectangulo(rect); 
            

        }, 3)

    }
    else{
        clearInterval(interval);
        interval = null;
    }

}

function estaEnElLimite(){
    return rect.ancho <= LIMITE_CARGA;
}

function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarRectangulo({ posX, posY, ancho, alto}){
    ctx.fillRect(posX, posY, ancho, alto);
}
