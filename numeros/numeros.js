const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")
const cuatro = document.getElementById("cuatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const siete = document.getElementById("siete")
const ocho = document.getElementById("ocho")
const nueve = document.getElementById("nueve")
const diez = document.getElementById("diez")

uno.addEventListener("click", numero)
dos.addEventListener("click", numero)
tres.addEventListener("click", numero)
cuatro.addEventListener("click", numero)
cinco.addEventListener("click", numero)
seis.addEventListener("click", numero)
siete.addEventListener("click", numero)
ocho.addEventListener("click", numero)
nueve.addEventListener("click", numero)
diez.addEventListener("click", numero)

let suma = []

function numero(e) {
    console.log(e.target.textContent)
    let = eti =e.target
    let dato = e.target.textContent
    contador(dato,eti )
}

function contador(numero, etiqueta) {
    
   
    console.log(suma)
    let orden = parseInt(suma.length)
    let ordend = orden + 1
    if (ordend == numero) {
        console.log("funciona")
        etiqueta.style.background = "green"
       
        suma.push(numero)
    }else {
        console.log("mal numeor")
        window.location = "numeros.html"
    }
    completo(orden)
    console.log(orden)
}

function completo(num) {
    if (num == 9 ) {
        window.location = "../html/nave.html"
    }
}