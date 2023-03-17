// Akira es un buscador, la mayoria lo dice el mago, el numero es un desafio y codigo 
// Que la bandera entera salga con el himno y el numero sobre la bandera
// Palabras para indicar si es de 0 a 5 o de 6 a 10
(function ($) {
    "use strict";  
    // loader
    var loader = function () {
      setTimeout(function () {
        if ($('#loader').length > 0) {
          $('#loader').removeClass('show');
        }
      }, 1);
    };
    loader();   
    // Initiate the wowjs
    new WOW().init();    
    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
      } else {
        $('.navbar').removeClass('nav-sticky');
      }
    });
          
})(jQuery);
// Speach parameters
var nombre = document.getElementById("name").innerHTML;
  
var msg = new SpeechSynthesisUtterance();
msg.lang = 'es-US';

//  Inpunts
$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

// Code
// >5 = jajajaja

// Times 0 and 2
// 0 = Poco probable
// 1 = No creo
// 2 = Creo que no
// 3 = muy seguro que no
// 4 = Nunca

// Times 1
// 0 = Un poco dificil
// 1 = dificil 
// 2 = bastante dificil
// 3 = muy dificil
// 4 = Extremadamente dificil


// Diego, esto es un desafio, hace el dilogo acorde a esto
var times = 0;
window.addEventListener('keydown', (event) => {
    var num = event.key;

    function large() {
        msg.text = "jajaja";
        speechSynthesis.speak(msg);
    }
 
    /// esto representa 0 o 5, con times == 0
    if (num == 0 || num == 5 && times == 0){   
       // Saber si es >5
       if (num > 5){
        large();
       }
        msg.text = "Poco probable que lo adivines";
        speechSynthesis.speak(msg);
        times = 1;
    // esto es viejo
    } else if (num == 0 || num == 5 && times == 1 ){ 
        times = 2; 
        setTimeout(function() {
            if (num > 5){
                large();
            }        
            msg.text = "Es un poco dificil para el ser humano";
            speechSynthesis.speak(msg);
        }, 4000); 

    }else if (num == 0 || num == 5 && times == 2 ){  
        setTimeout(function() {  
            if (num > 5){
                large();
            }       
            msg.text = "Lo veo poco probable";
            speechSynthesis.speak(msg);
        }, 12000); 

    }
    if (num == 1 || num == 6  && times == 0){
        if (num > 5){
            large();
        }
        msg.text = "No creo que puedas adivinarlo";
        speechSynthesis.speak(msg);
        times = 1;
    }else if (num == 1 || num == 6 && times == 1){  
        times = 2;  
        setTimeout(function() { 
            if (num > 5){
                large();
            }     
            msg.text = "Esto es dificil para el ser humano";
            speechSynthesis.speak(msg);
        }, 4000); 
    }else if (num == 1 || num == 6 && times == 2){    
        setTimeout(function() {      
            if (num > 5){
                large();
            }
            msg.text = "Eso no lo creo";
            speechSynthesis.speak(msg);
        }, 12000); 
    }
    if (num == 2 || num == 7  && times == 0){
        if (num > 5){
            large();
        }
        msg.text = "Creo que no vas a poder adivinarlo";
        speechSynthesis.speak(msg);
        times = 1;
    }else if (num == 2 || num == 7 && times == 1) { 
        times = 2; 
        setTimeout(function() {    
            if (num > 5){
                large();
            }     
            msg.text = "Esto es bastante dificil para el ser humano";
            speechSynthesis.speak(msg);
        }, 4000); 
    }else if (num == 2 || num == 7  && times == 2) {  
        setTimeout(function() {  
            if (num > 5){
                large();
            }       
            msg.text = "Creo que no vas a poder";
            speechSynthesis.speak(msg);
        }, 12000); 
    }
    if (num == 3 || num == 8  && times == 0){
        msg.text = "Estoy muy seguro que no vas a poder";
        speechSynthesis.speak(msg);
        times = 1;
    }else if (num == 3 || num == 8 && times == 1){
        times = 2;  
        setTimeout(function() {         
            msg.text = "Esto es muy dificil para el ser humano";
            speechSynthesis.speak(msg);
        }, 4000); 
    }else if (num == 3 || num == 8 && times == 2){  
        setTimeout(function() {         
            msg.text = "Muy seguro que no";
            speechSynthesis.speak(msg);
            }, 12000); 
    }
    if (num == 4 || num == 9  && times == 0){
        msg.text = "Nunca vas a poder adivinarlo";
        speechSynthesis.speak(msg);
        times = 1;
    }else if (num == 4 || num == 9  && times == 1 ){   
        times = 2;
        setTimeout(function() {        
            msg.text = "Esto es extremadamente dificil para el ser humano";
            speechSynthesis.speak(msg);
        }, 4000); 
    }else if (num == 4 || num == 9  && times == 2){  
        setTimeout(function() {         
            msg.text = "Nunca vas a poder";
            speechSynthesis.speak(msg);
            }, 12000); 
    }
}, false);


////Speach///

function speach() {
    document.getElementById("speach").innerHTML = `Hola.${nombre}. Creando una. lista de. 200 Paises.`;
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: true
    });
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
}
function speach2() {
    document.getElementById("speach").innerHTML = `Hola.${nombre}. Texto 2`;
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
    });
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
}

function speach3() {
    document.getElementById("speach").innerHTML = `Hola.${nombre}. Texto 3`;
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
    });
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
}





// Después de terminar el efecto, ir al siguiente
function redirect() {
    //Identificar siguiente efecto
    let url = window.location.href;
    let position = url.search("e2");
    //Si no encuentra efecto 2, busca el 3 y te redirecciona
    if (position == -1) {
      let url = window.location.href;
      let position = url.search("e3");
      let e3completo = url.substring(position);
      let e3reducido = e3completo.search("=");
      let e3 = e3completo.substring(e3reducido+1);
      //el ? tiene que ir después ej: /ttt?etc
      let redirurl = "https://akirasabe.herokuapp.com/" + e3;
      window.location = redirurl;
    } else {
      let e2completo = url.substring(position);
        let e2reducido = e2completo.search("=");
        let e2 = e2completo.substring(e2reducido+1);
      let e2pospos = e2.search("&");
      let e2pos = e2.substring(e2pospos + 1);
      let e2pre = e2.substring(0,3);
      let linkfinal = "https://akirasabe.herokuapp.com/"+ e2pre + "?" + e2pos;
      window.location = linkfinal;
        
    }
  
  } 
  // add events listeners //
document.getElementById('alfred').addEventListener('click', myFunctionSwitcher);
  

  


// Agregar todas las funciones necesarias//
var myFunctions = [speach, speach2, speach3, redirect];
var nextFunction = 0;
function myFunctionSwitcher() {
    myFunctions[nextFunction]();
    nextFunction = nextFunction + 1; 
}
    

