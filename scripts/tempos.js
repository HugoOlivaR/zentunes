
////////////
// RELOJ
////////////


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



////////////
// CRONOMETRO
////////////

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





////////////
// TEMPORIZADOR
////////////

let endTempo = document.getElementById("endTempo");


var botontempo = document.getElementById("botonTempo")
var div_tempo = document.getElementById("div_tempo")
var div_tempo_encendido = false

botontempo.addEventListener("click", function aparecer_boton(){

    var div_config_tempo = document.getElementById("div_config_tempo")

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


        div_config_tempo.style.display = "none"
        setTimeout(function() {
            div_config_tempo.style.opacity = "0"
        }, 50);

        config_encencido = false
        div_tempo_encendido = false
    }

})




let horas = 0;
let minutos = 0;
let segundos = 0;
let temporizador;
let botonIniciarDetener = document.getElementById("inicio_tempo");

function actualizarTemporizador() {
    document.getElementById("texto_tempo_h").value = agregarCeros(horas);
    document.getElementById("texto_tempo_m").value = agregarCeros(minutos);
    document.getElementById("texto_tempo_s").value = agregarCeros(segundos);
}

function iniciarDetenerTemporizador() {
    if (temporizador) {
        detenerTemporizador();
        document.getElementById("img_inicio_tempo").setAttribute('src', 'src/img/play2.png')
    } else {
        horas = parseInt(document.getElementById("texto_tempo_h").value) || 0;
        minutos = parseInt(document.getElementById("texto_tempo_m").value) || 0;
        segundos = parseInt(document.getElementById("texto_tempo_s").value) || 0;
        actualizarTemporizador();
        temporizador = setInterval(function() {
            if (segundos > 0) {
                segundos--;
                actualizarTemporizador();
            } else if (minutos > 0) {
                minutos--;
                segundos = 59;
                actualizarTemporizador();
            } else if (horas > 0) {
                horas--;
                minutos = 59;
                segundos = 59;
                actualizarTemporizador();
            } else {
                detenerTemporizador();
                document.getElementById("img_inicio_tempo").setAttribute('src', 'src/img/play2.png')

                const box1 = document.getElementById("box1")
                if(box1.checked){
                    endTempo.play();
                }

                const box2 = document.getElementById("box2")
                if(box2.checked){
                    if(sonido == true){
                        audio.pause()
                        sonido = false;
                        document.getElementById("icono_play").setAttribute('src', 'src/img/play.png')
                        borrarMeteor()
                    }
                }

                document.getElementById("texto_tempo_h").value = "";
                document.getElementById("texto_tempo_m").value = "";
                document.getElementById("texto_tempo_s").value = "";
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
    horas = 0;
    minutos = 0;
    segundos = 0;
    actualizarTemporizador();
    document.getElementById("texto_tempo_h").value = "";
    document.getElementById("texto_tempo_m").value = "";
    document.getElementById("texto_tempo_s").value = "";
    document.getElementById("img_inicio_tempo").setAttribute('src', 'src/img/play2.png')
}

function agregarCeros(numero) {
    if (numero < 10) {
        return "0" + numero;
    }
    return numero;
}

botonIniciarDetener.addEventListener("click", iniciarDetenerTemporizador);
document.getElementById("reinicio_tempo").addEventListener("click", reiniciarTemporizador);



const campos = document.querySelectorAll('input');

campos.forEach((campo, index) => {
  campo.addEventListener('input', function() {
    const valor = this.value;

    if (valor.length >= 2 && index < campos.length - 1) {
      campos[index + 1].focus();
    }
  });
});


const rellenarCamposVacios = function() {
    const campos = document.querySelectorAll('input');
  
    campos.forEach(function(campo) {
      if (!campo.value.trim()) {
        campo.value = '00';
      }
    });
}

var inicio_tempo = document.getElementById("inicio_tempo")
inicio_tempo.addEventListener('click', rellenarCamposVacios);



var texto_tempo_h = document.getElementById("texto_tempo_h")

texto_tempo_h.addEventListener('keydown', function(event) {
    const key = event.key;
    const valor = this.value;
    const numero = parseInt(valor + key, 10);
  
    if (isNaN(numero)) {
      event.preventDefault();
      this.classList.add('error');
      setTimeout(() => {
        this.classList.remove('error');
      }, 500);
    }
});
var texto_tempo_m = document.getElementById("texto_tempo_m")

texto_tempo_m.addEventListener('keydown', function(event) {
    const key = event.key;
    const valor = this.value;
    const numero = parseInt(valor + key, 10);
  
    if (isNaN(numero) || numero < 0 || numero > 60) {
      event.preventDefault();
      this.classList.add('error');
      setTimeout(() => {
        this.classList.remove('error');
      }, 500);
    }
});


var texto_tempo_s = document.getElementById("texto_tempo_s")

texto_tempo_s.addEventListener('keydown', function(event) {
    const key = event.key;
    const valor = this.value;
    const numero = parseInt(valor + key, 10);
  
    if (isNaN(numero) || numero < 0 || numero > 60) {
      event.preventDefault();
      this.classList.add('error');
      setTimeout(() => {
        this.classList.remove('error');
      }, 500);
    }
});



var config_tempo = document.getElementById("config_tempo")
var config_encencido = false

config_tempo.addEventListener("click", function abrir_config(){
    var div_config_tempo = document.getElementById("div_config_tempo")

    if(!config_encencido){
        div_config_tempo.style.display = "flex"
        setTimeout(function() {
            div_config_tempo.style.opacity = "1"
        }, 50);
        config_encencido = true
    }else{
        div_config_tempo.style.opacity = "0"
        setTimeout(function() {
            div_config_tempo.style.display = "none"
        }, 200);
        config_encencido = false
    }

    
})