let navegador = navigator.userAgent;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
 
    alert("Bienvenido a ZenTunes Mobile. Actualmente nuestra aplicacion en dispositivos movviles está en desarrollo. Accede desde un ordenador para una experiencia completa!")

    console.log("Estás usando un móvil");

    var barra_sonido = document.getElementById("control_volumen")
    barra_sonido.style.display = "none"

    var crono = document.getElementById("botonCrono")
    crono.style.display = "none"

    var tempo = document.getElementById("botonTempo")
    tempo.style.display = "none"

    var div_tempos = document.getElementById("div_tiempos")
    div_tempos.style.background = "none"

} else {
    console.log("No estás usando un móvil");
}



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


var texto_selector = document.getElementById("bosque")
var boton_derecha = document.getElementById("botondr");
var boton_izquierda = document.getElementById("botonizq")

var estacion = 1


boton_derecha.addEventListener("click", pasardr)

function pasardr(){
    if(estacion == 1){
        estacion = 2
        body.style.backgroundColor = "rgb(70, 183, 252)"
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
        body.style.backgroundColor = "rgb(252, 144, 70)"
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
        body.style.backgroundColor = "rgb(0, 90, 237)"
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
        body.style.backgroundColor = "rgb(6, 177, 29)"
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
        body.style.backgroundColor = "rgb(0, 90, 237)"
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
        body.style.backgroundColor = "rgb(252, 144, 70)"
        texto_selector.classList.remove('olas')
        texto_selector.classList.add('fuego')

    }else if(estacion == 3){
        estacion = 2
        body.style.backgroundColor = "rgb(70, 183, 252)"
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
        body.style.backgroundColor = "rgb(6, 177, 29)"
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

var img_audio = document.getElementById("img_audio")

var volumenpag = audio.volume

img_audio.addEventListener("click", function(){

    if(volumenpag == 0){
        document.getElementById("control_volumen").value = 0.5
        document.getElementById("img_audio").setAttribute('src', 'src/img/sonido.png')
        volumenpag = 0.5
    }else if(volumenpag != 0){
        document.getElementById("control_volumen").value = 0
        document.getElementById("img_audio").setAttribute('src', 'src/img/mute.png')
        volumenpag = 0
    }
})






// EFECTO LLUVIA



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
    let amount = 250;
    let body = document.querySelector("body");
    let count = 0;

    while (count < amount && !stop) { // verifica si stop es verdadero
        let drop = document.createElement("i");
        drop.setAttribute("id","gotas");

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

function borrarMeteor() {
    let drops = document.querySelectorAll("#gotas");
    for (let i = 0; i < drops.length; i++) {
        drops[i].parentNode.removeChild(drops[i]);
    }
}


/*

window.addEventListener("keydown", (event) => {
    var tecla = event.key
    if(tecla == " "){
        if (stop) { // si ya se detuvo la función meteor(), restablecer y ejecutar de nuevo
            stop = false;
            meteor();
        } else { // si no, detener y borrar los elementos HTML
            stop = true;
            borrarMeteor();
        }
    }
})

*/
