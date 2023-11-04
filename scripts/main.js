
////////////
// DISPOSITIVOS MOVILES
////////////

let navegador = navigator.userAgent;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/iPad|iPhone|iPod/i)) {
    console.log("Estás usando un móvil");
    var movil = true
    

    var alerta = document.getElementById("alerta")
    alerta.style.display = "none"

    var barra_sonido = document.getElementById("control_volumen")
    barra_sonido.style.display = "none"

    var crono = document.getElementById("botonCrono")
    crono.style.display = "none"

    var div_tempos = document.getElementById("div_tiempos")
    var botonTempo = document.getElementById("botonTempo")
    var reloj = document.getElementById("reloj")
    var div_tempo = document.getElementById("div_tempo")
    var div_config_tempo = document.getElementById("div_config_tempo")

    div_tempos.className = "div_tiempos_movil"
    botonTempo.className = "botonTempo_movil"
    reloj.className = "reloj_movil"
    div_tempo.className = "div_tempo_movil"
    div_config_tempo.className = "div_config_tempo_movil"





    var img_audio = document.getElementById("img_audio")
    img_audio.style.display = "none"


    var contenido = document.getElementById("contenido")
    contenido.style.display= "none"

    var alerta_abierta = false

} else {
    console.log("No estás usando un móvil");
    var movil = false
    var alerta_abierta = true
}


////////////
// CARGA
////////////



document.addEventListener('DOMContentLoaded', () => {
    var dom_cargado = true
})



window.onload = function(dom_cargado){
    if(dom_cargado){
        var div_carga = document.getElementById("div_carga")
        div_carga.style.display = "none"
    }
}



////////////
// ALERTA
////////////



function cerrarAlerta() {
    alerta_abierta = false
    var alerta = document.getElementById("alerta");
    alerta.classList.add("cerrando");
    alerta.addEventListener("animationend", function() {
        alerta.style.display = "none";
    });

    setTimeout(function () {contenido.style.opacity = "0"}, 10);
    setTimeout(function () {contenido.style.display = "none"}, 300);
}

if(alerta_abierta){
    setTimeout(function () {contenido.style.opacity = "1"}, 50);
    setTimeout(function () {contenido.style.display = "inline"}, 10);
}



////////////
// PLAY
////////////


var body = document.getElementById("body");

var botonplay = document.getElementById("play");
var audio = document.getElementsByTagName("audio")[0];
var sonido = false


botonplay.addEventListener("click", ejecucionSonido)

function ejecucionSonido(){
    if(!sonido){
        audio.play()
        sonido = true;
        document.getElementById("icono_play").setAttribute('src', 'src/img/pausa.png')
    }else{
        audio.pause()
        sonido = false;
        document.getElementById("icono_play").setAttribute('src', 'src/img/play.png')
    }
}

window.addEventListener("keydown", (event) => {
    var tecla = event.key
    if(tecla == " "){ 
        ejecucionSonido()
        ejecucionmeteor()
    }
})






////////////
// CAMBIO DE ESTACION
////////////


var texto_selector = document.getElementById("bosque")
var boton_derecha = document.getElementById("botondr");
var boton_izquierda = document.getElementById("botonizq")

var estacion = 1


boton_derecha.addEventListener("click", pasardr)

function pasardr(){
    if(estacion == 1){
        estacion = 2
        body.style.backgroundImage = "url('./src/img/fondos/ciudad.png')"
        audio.setAttribute('src', 'src/audios/lluvia.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('bosque')
        texto_selector.classList.add('lluvia')

    }else if(estacion == 2){
        estacion = 3
        body.style.backgroundImage = "url('./src/img/fondos/fuego.png')"
        audio.setAttribute('src', 'src/audios/fuego.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('lluvia')
        texto_selector.classList.add('fuego')

    }else if(estacion == 3){
        estacion = 4
        body.style.backgroundImage = "url('./src/img/fondos/playa.png')"
        audio.setAttribute('src', 'src/audios/olas.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('fuego')
        texto_selector.classList.add('olas')

    }else{
        estacion = 1
        body.style.backgroundImage = "url('./src/img/fondos/bosque.png')"
        audio.setAttribute('src', 'src/audios/bosque.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('olas')
        texto_selector.classList.add('bosque')
    }
}


boton_izquierda.addEventListener("click", pasarizq)

function pasarizq(){
    
    if(estacion == 1){
        estacion = 4
        body.style.backgroundImage = "url('../src/img/fondos/playa.png')"
        audio.setAttribute('src', 'src/audios/olas.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('bosque')
        texto_selector.classList.add('olas')

    }else if(estacion == 4){
        estacion = 3
        audio.setAttribute('src', 'src/audios/fuego.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        body.style.backgroundImage = "url('./src/img/fondos/fuego.png')"
        texto_selector.classList.remove('olas')
        texto_selector.classList.add('fuego')

    }else if(estacion == 3){
        estacion = 2
        body.style.backgroundImage = "url('./src/img/fondos/ciudad.png')"
        audio.setAttribute('src', 'src/audios/lluvia.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('fuego')
        texto_selector.classList.add('lluvia')
    }else{
        estacion = 1
        body.style.backgroundImage = "url('./src/img/fondos/bosque.png')"
        audio.setAttribute('src', 'src/audios/bosque.mp3')
        if(sonido == true){
            audio.play()
        }else{
            audio.pause()
        }
        texto_selector.classList.remove('lluvia')
        texto_selector.classList.add('bosque')
    }
}




////////////
// AUDIO
////////////

audio.volume = document.getElementById("control_volumen").value


document.getElementById("control_volumen").onchange = function(e){
    audio.volume = e.target.value
    var volumenpag = audio.volume
    if(volumenpag == 0){
        document.getElementById("img_audio").setAttribute('src', 'src/img/mute.png')
    }else{
        document.getElementById("img_audio").setAttribute('src', 'src/img/sonido.png')
    }
}



var audio = document.getElementById("audio");
var control_volumen = document.getElementById("control_volumen");
var img_audio = document.getElementById("img_audio");

img_audio.addEventListener("click", function() {
  if (audio.volume > 0) {
    audio.volume = 0;
    control_volumen.value = 0;
    img_audio.setAttribute("src", "src/img/mute.png");
  } else {
    audio.volume = 0.5;
    control_volumen.value = 0.5;
    img_audio.setAttribute("src", "src/img/sonido.png");
  }
});



////////////
// BOTON SABER MAS
////////////



var div_zentunes = document.getElementById("div_zentunes")
var logo_mas = document.getElementById("logo_mas")
var contenido_abierto = document.getElementById("contenido_abierto")

var contenido = document.getElementById("contenido")

var div_zentunes_encendido = false



div_zentunes.addEventListener("click", abrir_div_zentunes)
contenido.addEventListener("click", cerrar_div_zentunes)


function abrir_div_zentunes(){
    
    if(!div_zentunes_encendido){
        div_zentunes.className = "div_zentunes_encendido"
        div_zentunes_encendido = true

        setTimeout(function () {contenido_abierto.style.display = "flex"}, 100);
        setTimeout(function () {contenido_abierto.style.opacity = "1"}, 300);
        logo_mas.style.opacity = "0"
    }

    aparecer_contenido()
    
}


function cerrar_div_zentunes(){
    if(div_zentunes_encendido){
        div_zentunes.className = "div_zentunes_apagado"
        div_zentunes_encendido = false

        contenido_abierto.style.display = "none"
        contenido_abierto.style.opacity = "0"
        logo_mas.style.opacity = "1"

        setTimeout(function () {contenido.style.opacity = "0"}, 100);
        setTimeout(function () {contenido.style.display = "none"}, 300);
    }
}


function aparecer_contenido(){
    console.log(div_zentunes_encendido)
    if(div_zentunes_encendido){

        setTimeout(function () {contenido.style.opacity = "1"}, 100);
        setTimeout(function () {contenido.style.display = "inline"}, 50);
        
    }

}


////////////
// EFECTO LLUVIA
////////////



botonplay.addEventListener("click",ejecucionmeteor)
boton_derecha.addEventListener("click", ejecucionmeteor)
boton_izquierda.addEventListener("click", ejecucionmeteor)

function ejecucionmeteor(){
    if(sonido == true && estacion == 2){
        stop = false
        meteor()
    }else{
        stop = true;
        borrarMeteor();
    }
}



let stop = false; // variable de control

function meteor() {


    if(movil == false){
        let amount = 250;
        let body = document.querySelector("body");
        let count = 0;

        while (count < amount && !stop) { // verifica si stop es verdadero
            let drop = document.createElement("i");
            drop.setAttribute("id","gotas");

            let size = Math.random() * 2;
            let posX = Math.floor(Math.random() * window.innerWidth -10);
            let delay = Math.random() * -25;
            let duration = Math.random() * 0;

            drop.style.width = `${0.1 + size}px`;
            drop.style.left = `${posX}px`;
            drop.style.animationDelay = `${delay}s`;
            drop.style.animationDuration = `${1 + duration}s`;

            body.appendChild(drop);
            count++;
        }

    }else{
        let amount = 50;
        let body = document.querySelector("body");
        let count = 0;

        while (count < amount && !stop) { // verifica si stop es verdadero
            let drop = document.createElement("i");
            drop.setAttribute("id","gotas_mobile");

            let size = Math.random() * 2;
            let posX = Math.floor(Math.random() * window.innerWidth -10);
            let delay = Math.random() * -20;
            let duration = Math.random() * 0;

            drop.style.width = `${0.1 + size}px`;
            drop.style.left = `${posX}px`;
            drop.style.animationDelay = `${delay}s`;
            drop.style.animationDuration = `${1 + duration}s`;

            body.appendChild(drop);
            count++;
        }
    }

}

function borrarMeteor() {
    if(movil == false){

        let drops = document.querySelectorAll("#gotas");
        for (let i = 0; i < drops.length; i++) {
            drops[i].parentNode.removeChild(drops[i]);
        }

    }else{
        let drops = document.querySelectorAll("#gotas_mobile");
        for (let i = 0; i < drops.length; i++) {
            drops[i].parentNode.removeChild(drops[i]);
        }
    }
    
}

window.addEventListener('resize', () => {
    borrarMeteor()
    ejecucionmeteor()
});