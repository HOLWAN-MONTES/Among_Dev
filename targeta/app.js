const tarjeta = document.getElementById("containment-wrapper")

tarjeta.addEventListener("mousemove", (e) => {
   console.log(e.x)
    if (e.x >= 698 && e.x <= 804 ) {
        alert("Mision completa")
        window.location = "../html/nave.html"
    } else {
        
    }
})