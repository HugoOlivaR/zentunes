function reloj(){

    fecha=new Date(); //Actualizar fecha.
    hora=fecha.getHours(); //hora actual
    minuto=fecha.getMinutes(); //minuto actual
    segundo=fecha.getSeconds(); //segundo actual

    if (hora<10) { //dos cifras para la hora
        hora="0"+hora;
    }
    if (minuto<10) { //dos cifras para el minuto
        minuto="0"+minuto;
    }
    if (segundo<10) { //dos cifras para el segundo
        segundo="0"+segundo;
    }

    document.getElementById("reloj").innerHTML = hora + ":" + minuto + ":" + segundo;	

}

reloj()

setInterval(reloj, 1000)



// CRONO

var botonCrono = document.getElementById("botonCrono")
var div_crono = document.getElementById("div_crono")
var div_crono_encendido = false

botonCrono.addEventListener("click", function aparecer_boton(){

    if(div_crono_encendido == false){
        div_crono.style.display = "inline"
        setTimeout(function() {
            div_crono.style.opacity = "1"
        }, 50);
        div_crono_encendido = true
    }else{
        div_crono.style.opacity = "0"
        setTimeout(function() {
            div_crono.style.display = "none"
        }, 500);
        div_crono_encendido = false
    }

})


var inicio_crono = document.getElementById("inicio_crono")
var reinicio_crono = document.getElementById("reinicio_crono")

var img_reinicio_crono = document.getElementById("img_reinicio_crono")

var crono_encendido = false

inicio_crono.addEventListener("click", function aviso(){

    if(crono_encendido == false){
        document.getElementById("img_inicio_crono").setAttribute('src', 'src/img/pausa2.png')
        crono_encendido = true
    }else{
        document.getElementById("img_inicio_crono").setAttribute('src', 'src/img/play2.png')
        crono_encendido = false
    }
})

reinicio_crono.addEventListener("click", function aviso(){
    crono_encendido = false
    document.getElementById("img_inicio_crono").setAttribute('src', 'src/img/play2.png')
})



let segundos_crono = 0;
let minutos_crono = 0;
let horas_crono = 0;
let timer;
let running = false;

function updateTime() {
  segundos_crono++;
  if (segundos_crono === 60) {
    segundos_crono = 0;
    minutos_crono++;
    if (minutos_crono === 60) {
      minutos_crono = 0;
      horas_crono++;
    }
  }
  document.getElementById("texto_crono").textContent = `${horas_crono
    .toString()
    .padStart(2, "0")}:${minutos_crono.toString().padStart(2, "0")}:${segundos_crono
    .toString()
    .padStart(2, "0")}`;
}

document.getElementById("inicio_crono").addEventListener("click", function () {
  if (!running) {
    timer = setInterval(updateTime, 1000);
    running = true;
  } else {
    clearInterval(timer);
    running = false;
  }
});

document.getElementById("reinicio_crono").addEventListener("click", function () {
  clearInterval(timer);
  segundos_crono = 0;
  minutos_crono = 0;
  horas_crono = 0;
  running = false;
  document.getElementById("texto_crono").textContent = "00:00:00";
});



//TEMPORIZADOR

let endTempo = document.getElementById("endTempo");


var botontempo = document.getElementById("botonTempo")
var div_tempo = document.getElementById("div_tempo")
var div_tempo_encendido = false

botontempo.addEventListener("click", function aparecer_boton(){

    if(div_tempo_encendido == false){
        div_tempo.style.display = "inline"
        setTimeout(function() {
            div_tempo.style.opacity = "1"
        }, 50);
        div_tempo_encendido = true
    }else{
        div_tempo.style.opacity = "0"
        setTimeout(function() {
            div_tempo.style.display = "none"
        }, 500);
        div_tempo_encendido = false
    }

})



let segundos = 0;
let temporizador;
let botonIniciarDetener = document.getElementById("inicio_tempo");

function actualizarTemporizador() {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos - (horas * 3600)) / 60);
    let segundosMostrar = segundos % 60;
    document.getElementById("texto_tempo").innerHTML = agregarCeros(horas) + ":" + agregarCeros(minutos) + ":" + agregarCeros(segundosMostrar);

    
}

function iniciarDetenerTemporizador() {
    if (temporizador) {
        detenerTemporizador();
        document.getElementById("img_inicio_tempo").setAttribute('src', 'src/img/play2.png')
    } else {
        temporizador = setInterval(function() {
            if (segundos > 0) {
                segundos--;
                actualizarTemporizador();
            } else {
                detenerTemporizador();
                document.getElementById("img_inicio_tempo").setAttribute('src', 'src/img/play2.png')
                endTempo.play();
                alert("¡Tiempo Agotado!")
            }
        }, 1000);
        document.getElementById("img_inicio_tempo").setAttribute('src', 'src/img/pausa2.png')
    }
}

function detenerTemporizador() {
    clearInterval(temporizador);
    temporizador = undefined;
}

function reiniciarTemporizador() {
    detenerTemporizador();
    segundos = 0;
    actualizarTemporizador();
    document.getElementById("img_inicio_tempo").setAttribute('src', 'src/img/play2.png')
}

function sumarUnMinuto() {
    segundos += 60;
    actualizarTemporizador();
}

function restarUnMinuto() {
    if (segundos >= 60) {
        segundos -= 60;
        actualizarTemporizador();
    }
}

function sumarDiezMinutos() {
    segundos += 600;
    actualizarTemporizador();
}

function restarDiezMinutos() {
    if (segundos >= 600) {
        segundos -= 600;
        actualizarTemporizador();
    }
}

function agregarCeros(numero) {
    if (numero < 10) {
        return "0" + numero;
    }
    return numero;
}

document.getElementById("sumar-1").addEventListener("click", sumarUnMinuto);
document.getElementById("restar-1").addEventListener("click", restarUnMinuto);
document.getElementById("sumar-10").addEventListener("click", sumarDiezMinutos);
document.getElementById("restar-10").addEventListener("click", restarDiezMinutos);
botonIniciarDetener.addEventListener("click", iniciarDetenerTemporizador);
document.getElementById("reinicio_tempo").addEventListener("click", reiniciarTemporizador);
