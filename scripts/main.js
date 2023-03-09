let navegador = navigator.userAgent;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
 
    console.log("Estás usando un móvil");
    var barra_sonido = document.getElementById("control_volumen")
    barra_sonido.style.display = "none"

} else {
    console.log("No estás usando un móvil");
}

var body = document.getElementById("body");

var botonplay = document.getElementById("play");
var audio = document.getElementsByTagName("audio")[0];
var sonido = false


botonplay.addEventListener("click", function ejecucionSonido(){

    if(!sonido){
        audio.play()
        sonido = true;
        document.getElementById("icono_play").setAttribute('src', 'src/img/pausa.png')
    }else{
        audio.pause()
        sonido = false;
        document.getElementById("icono_play").setAttribute('src', 'src/img/play.png')
    }

})


var texto_selector = document.getElementById("texto_selector")
var boton_derecha = document.getElementById("botondr");
var boton_izquierda = document.getElementById("botonizq")

var estacion = 1


boton_derecha.addEventListener("click", function pasardr(){
    if(estacion == 1){
        estacion = 2
        body.style.backgroundColor = "rgb(103, 216, 113)"
        audio.setAttribute('src', 'src/audios/fuego.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('lluvia')
        texto_selector.classList.add('fuego')

    }else if(estacion == 2){
        estacion = 3
        body.style.backgroundColor = "rgb(89, 72, 240)"
        audio.setAttribute('src', 'src/audios/forest.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('fuego')
        texto_selector.classList.add('forest')
    }else{
        estacion = 1
        body.style.backgroundColor = "rgb(218, 169, 78)"
        audio.setAttribute('src', 'src/audios/rain.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('forest')
        texto_selector.classList.add('lluvia')
    }
})



boton_izquierda.addEventListener("click", function pasarizq(){
    if(estacion == 1){
        estacion = 3
        audio.setAttribute('src', 'src/audios/forest.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        body.style.backgroundColor = "rgb(89, 72, 240)"
        texto_selector.classList.remove('lluvia')
        texto_selector.classList.add('forest')

    }else if(estacion == 3){
        estacion = 2
        body.style.backgroundColor = "rgb(103, 216, 113)"
        audio.setAttribute('src', 'src/audios/fuego.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('forest')
        texto_selector.classList.add('fuego')
    }else{
        estacion = 1
        body.style.backgroundColor = "rgb(218, 169, 78)"
        audio.setAttribute('src', 'src/audios/rain.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('fuego')
        texto_selector.classList.add('lluvia')
    }
})


audio.volume = document.getElementById("control_volumen").value
document.getElementById("control_volumen").onchange = function(e){audio.volume = e.target.value}
