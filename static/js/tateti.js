
// Speach parameters
var nombre = document.getElementById("name").innerHTML;
  
var msg = new SpeechSynthesisUtterance();
msg.lang = 'es-US';  
  

  
// add events listeners for the start speaking //
document.getElementById('alfred').addEventListener('click', myFunctionSwitcher);
  
    
function speach() {
  document.getElementById("speach").innerHTML = `Hola. ${nombre}, te invito a. Buscar una persona. Les voy a demostrar lo. Predecible que son.`;
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
  document.getElementById("speach").innerHTML = `El ser humano es. Extremadamente predecible. Para que vean. Les voy a pedir. Que jueguen. Una partida. De Ta-Te-Ti. Yo no voy a estar. Mirando. ${nombre} dame vuelta. Y cuando terminen volteenme.`;
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
function showImage(){
  setTimeout(function () {
    document.getElementById('tateti').style.visibility="visible";
  }, 3000);
  document.getElementById("speach").innerHTML = `${nombre}, espectador. Coincidencia perfecta. Muchas Gracias. Y si siguen sin creerme. Espectador. Leé el código de serie. `;
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
// Agregar todas las funciones necesarias//
var myFunctions = [speach, speach2, showImage, redirect];
var nextFunction = 0;
function myFunctionSwitcher() {
    myFunctions[nextFunction]();
    nextFunction = nextFunction + 1; 
}
  