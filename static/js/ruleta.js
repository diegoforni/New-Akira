// Speach parameters
var nombre = document.getElementById("name").innerHTML;
  
var msg = new SpeechSynthesisUtterance();
msg.lang = 'es-US';  
  

  
// add events listeners for the start speaking //
document.getElementById('alfred').addEventListener('click', myFunctionSwitcher);
  
///////////////////////////////////////////////////////////////////////////
////////////////// RUSIAN ROULETTE/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
  
// If left has been clicked position = left
document.getElementById('left').addEventListener('click', left);
var position = null;
function left() {
    position = "left";
} 
document.getElementById('center').addEventListener('click', center);
function center() {
    position = "center";
} 
document.getElementById('right').addEventListener('click', right);
function right() {
    position = "right";
} 
    
// Speach 2 = intro to russian roulette //
function speach2() {

//First half of this part
document.getElementById("speach").innerHTML = `${nombre}. Trajiste lo que. Te pedí?.`;
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
//Second half
setTimeout(function() {
    document.getElementById("speach").innerHTML = ` ${nombre}. elegí a alguien.`;
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
    strings: typed_strings.split('.'),
    typeSpeed: 70,
    backSpeed: 1,
    smartBackspace: false,
    loop: false,
    showCursor: false,
    });
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
}, 7000);
}
  
// Speach 3 = spectator part of russian roulette //
function speach3() {
    var audio = new Audio('https://akirasabe.herokuapp.com/static/music.mp3');
    audio.play();
    document.getElementById("speach").innerHTML = `Hola. Querido espectador. Te voy a pedir. Que cuando. Ni yo ni ${nombre}. Estemos mirando. Mezcles las bolsas. Y te asegures. Que no se vea. El clavo.`;
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
    setTimeout(function() {
      document.getElementById("speach").innerHTML = ` ${nombre}. Si tuviera manos. Lo haría yo. Pero te voy a. Tener que pedir ayuda`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false,
      });
      var speach = document.getElementById("speach").innerHTML;
      msg.text = speach;
      speechSynthesis.speak(msg);
  }, 10000);
}
// Speach 4 = first break to russian roulette //
function speach4() {

    if (position == "left"){
      var positionText = `Con un. 78% de certeza. No está en. Tu derecha.${nombre}. Rompela En. la cuenta de 3. 1. 2. 3. Ya!.`;
      document.getElementById("speach").innerHTML = `Con un. 78% de certeza. No está en. Tu derecha.${nombre}. Rompela. En la cuenta de 3. 1. 2. 3. Ya!.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split('.'),
        typeSpeed: 77,
        backSpeed: 1,
        smartBackspace: false,
        loop: false,
        showCursor: false
      });
    } else if (position == "center"){
      var positionText = `Con un. 78% de certeza. No está en. Tu derecha.${nombre}. Rompela En. la cuenta de 3. 1. 2. 3. Ya!.`;
      document.getElementById("speach").innerHTML = `Con un. 78% de certeza. No está en. Tu derecha.${nombre}. Rompela En. la cuenta de 3. 1. 2. 3. Ya!.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split('.'),
        typeSpeed: 77,
        backSpeed: 1,
        smartBackspace: false,
        loop: false,
        showCursor: false
      });
      } else if (position == "right"){
        var positionText = `Con un. 78% de certeza. No está en. Tu izquierda.${nombre}. Rompela En. la cuenta de 3. 1. 2. 3. Ya!.`;
        document.getElementById("speach").innerHTML = `Con un. 78% de certeza. No está en. Tu izquierda.${nombre}. Rompela En. la cuenta de 3. 1. 2. 3. Ya!.`;
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
          strings: typed_strings.split('.'),
          typeSpeed: 77,
          backSpeed: 1,
          smartBackspace: false,
          loop: false,
          showCursor: false
        });
        } else{
          var positionText = "Se la creyeron. damas y caballeros. Esa fué mi actuación";
          document.getElementById("speach").innerHTML = "Se la creyeron. damas y caballeros. esa fué mi actuación";
          var typed_strings = $('.hero .hero-text .typed-text').text();
          var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split('.'),
            typeSpeed: 77,
            backSpeed: 1,
            smartBackspace: false,
            loop: false,
            showCursor: false
          });
        }
    msg.text = String(positionText);
    speechSynthesis.speak(msg);
}
// Speach 5 = final to russian roulette //
function speach5() {
    if (position == "left"){
      var positionText = `Y ahora. No está en. Tu izquierda.${nombre}. Rompela en. 3. 2. Me confundí.  Rompé la derecha. En 3. 2. 1. Ya!.`;
      document.getElementById("speach").innerHTML = `Y ahora. No está en. Tu izquierda.${nombre}. Rompela en. 3. 2. Me confundí. Rompé la derecha. En 3. 2. 1. Ya!.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split('.'),
        typeSpeed: 77,
        backSpeed: 1,
        smartBackspace: false,
        loop: false,
        showCursor: false
      });
    } else if (position == "center"){
      var positionText = `Y ahora. No está en. Tu derecha.${nombre}. Rompela en. 3. 2. Me confundí. Rompé la izquierda. En 3. 2. 1. Ya!.`;
      document.getElementById("speach").innerHTML = `Y ahora. No está en. Tu derecha.${nombre}. Rompela en. 3. 2. Me confundí. Rompé la izquierda. En 3. 2. 1. Ya!.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split('.'),
        typeSpeed: 77,
        backSpeed: 1,
        smartBackspace: false,
        loop: false,
        showCursor: false
      });
      } else if (position == "right"){
        var positionText = `Y ahora. No está en. Tu derecha.${nombre}. Rompela en. 3. 2.  Me confundí. Rompé la izquierda. En 3. 2. 1. Ya!.`;
        document.getElementById("speach").innerHTML = `Y ahora. No está en. Tu derecha.${nombre}. Rompela en. 3. 2. Me confundí. Rompé la izquierda. En 3. 2. 1. Ya!.`;
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
          strings: typed_strings.split('.'),
          typeSpeed: 77,
          backSpeed: 1,
          smartBackspace: false,
          loop: false,
          showCursor: false
        });
        } else{
          var positionText = "Se la creyeron. damas y caballeros. Esa fué mi actuación";
          document.getElementById("speach").innerHTML = "Se la creyeron. damas y caballeros. esa fué mi actuación";
          var typed_strings = $('.hero .hero-text .typed-text').text();
          var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split('.'),
            typeSpeed: 77,
            backSpeed: 1,
            smartBackspace: false,
            loop: false,
            showCursor: false
          });
        }
    msg.text = String(positionText);
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
// Agregar todas las funciones necesarias//
var myFunctions = [speach2, speach3, speach4, speach5, redirect];
var nextFunction = 0;
function myFunctionSwitcher() {
    myFunctions[nextFunction]();
    nextFunction = nextFunction + 1; 
}
  