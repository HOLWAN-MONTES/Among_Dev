// ***********************  ZONA DE ELECTRICIDAD  **********************************
const electricidad = document.querySelector(".eletricidad")
const panelElectri = document.querySelector(".juego")
const correcto = document.querySelector(".correcto")
const pantallaGaso = document.getElementById("gasolina")
const btnGasolina = document.getElementById("cuadroGasolina")

btnGasolina.addEventListener("click", () => {
    pantallaGaso.style.display= "block"
})

electricidad.addEventListener("click", () => {
    panelElectri.style.display = "block"
    correcto.style.display = "block"
})

correcto.addEventListener("click", () => {
    panelElectri.style.visibility ="hidden"
    correcto.style.visibility ="hidden"
    electricidad.style.backgroundColor = " hsla(100, 100%, 50%, 0.5)"
})