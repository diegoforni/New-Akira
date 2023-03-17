// Speach parameters
var nombre = document.getElementById("name").innerHTML;
  
var msg = new SpeechSynthesisUtterance();
msg.lang = 'es-US';  
  

  
// add events listeners for the start speaking //
document.getElementById('alfred').addEventListener('click', myFunctionSwitcher);



// Speach 2 = intro to russian roulette //
function speach2() {
  //First half of this part
  document.getElementById("speach").innerHTML = `${nombre}. Listo para perder?.`;
  var typed_strings = $('.hero .hero-text .typed-text').text(); 
  var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 80,
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
      document.getElementById("speach").innerHTML = `Fácil, abajo.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 80,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
      });
      var speach = document.getElementById("speach").innerHTML;
      msg.text = speach;
      speechSynthesis.speak(msg);
  }, 23000);
    //Second half
    setTimeout(function() {
      document.getElementById("speach").innerHTML = `Abajo.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 80,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
      });
      var speach = document.getElementById("speach").innerHTML;
      msg.text = speach;
      speechSynthesis.speak(msg);
  }, 28000);
  //Second half
  setTimeout(function() {
    document.getElementById("speach").innerHTML = `En el medio.`;
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
    strings: typed_strings.split('.'),
    typeSpeed: 80,
    backSpeed: 1,
    smartBackspace: false,
    loop: false,
    showCursor: false
    });
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
}, 38000);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `Otra vez.`;
  var typed_strings = $('.hero .hero-text .typed-text').text();
  var typed = new Typed('.hero .hero-text h2', {
  strings: typed_strings.split('.'),
  typeSpeed: 80,
  backSpeed: 1,
  smartBackspace: false,
  loop: false,
  showCursor: false
  });
  var speach = document.getElementById("speach").innerHTML;
  msg.text = speach;
  speechSynthesis.speak(msg);
}, 43500);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `Arriba.`;
  var typed_strings = $('.hero .hero-text .typed-text').text();
  var typed = new Typed('.hero .hero-text h2', {
  strings: typed_strings.split('.'),
  typeSpeed: 80,
  backSpeed: 1,
  smartBackspace: false,
  loop: false,
  showCursor: false
  });
  var speach = document.getElementById("speach").innerHTML;
  msg.text = speach;
  speechSynthesis.speak(msg);
}, 51000);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `Abajo. Y en el medio. Son 3 ases.`;
  var typed_strings = $('.hero .hero-text .typed-text').text();
  var typed = new Typed('.hero .hero-text h2', {
  strings: typed_strings.split('.'),
  typeSpeed: 80,
  backSpeed: 1,
  smartBackspace: false,
  loop: false,
  showCursor: false
  });
  var speach = document.getElementById("speach").innerHTML;
  msg.text = speach;
  speechSynthesis.speak(msg);
}, 54500);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `Si tubiera. Manos yo también. Lo haría`;
  var typed_strings = $('.hero .hero-text .typed-text').text();
  var typed = new Typed('.hero .hero-text h2', {
  strings: typed_strings.split('.'),
  typeSpeed: 80,
  backSpeed: 1,
  smartBackspace: false,
  loop: false,
  showCursor: false
  });
  var speach = document.getElementById("speach").innerHTML;
  msg.text = speach;
  speechSynthesis.speak(msg);
}, 75000);
setTimeout(function() {
  redirect()
}, 80000);

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
    let redirurl = "http://127.0.0.1:5501/poker.html";
    window.location = redirurl;
  } else {
    let e2completo = url.substring(position);
	  let e2reducido = e2completo.search("=");
	  let e2 = e2completo.substring(e2reducido+1);
    let e2pospos = e2.search("&");
    let e2pos = e2.substring(e2pospos + 1);
    let e2pre = e2.substring(0,3);
    let linkfinal = "http://127.0.0.1:5501/poker.html";
    window.location = linkfinal;
      
  }

} 
// Agregar todas las funciones necesarias//
var myFunctions = [speach2, redirect];
var nextFunction = 0;
function myFunctionSwitcher() {
    myFunctions[nextFunction]();
    nextFunction = nextFunction + 1; 
}
  