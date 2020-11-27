const canvas = document.getElementById("barraCargar");

const ctx = canvas.getContext('2d');
ctx.fillStyle = "#ffffff";
const botonpor = document.getElementById("Botonpor");
botonpor.addEventListener('click', mostrar);
botonpor.addEventListener('click', moverRectangulo);


function mostrar (){
    canvas.style.display ="block";
    hora.style.display ="block";
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
               
                clearInterval(interval);
                interval = null;
                const carga = document.getElementById("cargar")
               
                  carga.style.display="none"  
                 
                
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


function getrenametime(deadline){
    let now = new Date,
    remainTIme = (new Date(deadline) - now - 100000)- 5,
    remainSecons = ('0' +Math.floor(remainTIme % 60)).slice(-2),
    remainMinutes = ('0' +Math.floor(remainTIme / 60 % 60)).slice(-41),
    remainHours = ('0' +Math.floor(remainTIme / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTIme / (3600 * 24));
    remainDays = Math.floor(remainTIme / (3600 * 24));

    return {
        remainTIme,
        remainSecons,
        remainMinutes,
        remainHours,
        remainDays
    }
};


//console.log(getrenametime('oct 27 2020 14:24:38 GMT-0500'));
const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);

    const tiimeUpdate = setInterval( () => {
        let t = getrenametime(deadline);
        el.innerHTML = `${t.remainHours}h:${t.remainMinutes}m: ${t.remainSecons}`;


        if(t.remainTIme <= 1){
            clearInterval(tiimeUpdate);
            el.innerHTML= finalMessage;
        }
    }, 900)
};


countdown('Nov 29 20 14:24:38 GMT-0500', 'clock','muchas gracias');