
// Speach parameters
var nombre = document.getElementById("name").innerHTML;
  
var msg = new SpeechSynthesisUtterance();
msg.lang = 'es-US';
  
function readMind() {
    var r1 = parseInt(document.getElementById("r1").value);
    var r2 = parseInt(document.getElementById("r2").value);
    var r3 = parseInt(document.getElementById("r3").value);
    var r4 = parseInt(document.getElementById("r4").value);
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var s4 = document.getElementById("s4").value;
     
    var s5 = s1;
    var offset = orderOf(r2,s2,r3,s3,r4,s4);
    var r5 = offset + parseInt(r1);
    if (r5 >= 15) r5 = r5 - 13;
        document.getElementById("speach").innerHTML = ".Tu carta es: " + r2t(r5) + " de " + s5 + "!";
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(','),
            typeSpeed: 70,
            backSpeed: 1,
            smartBackspace: false,
            loop: false,
            showCursor: false
        });
    msg.text = "Tu carta es: " + r2t(r5) + " de " + s5 + "!";
    // Agregar 5 cartas al azar
    const tuCartaEs = new Audio('./static/audio/tucartaes.mp3');
    const carta = new Audio('./static/audio/'+ r2t(r5) + '.mp3');
    const pinta = new Audio('./static/audio/'+ s5 +'.mp3');
    tuCartaEs.play();
    tuCartaEs.addEventListener('ended',function(){
      carta.play();
    });
    carta.addEventListener('ended',function(){
      pinta.play();
    });


    siguiente();

    }
     
function orderOf(r2,s2,r3,s3,r4,s4) {
    if (compare(r2,s2, r3,s3)) {
        // 2 > 3
        if (compare(r2,s2, r4,s4)) {
          //card 2 is largest
          if (compare(r3,s3, r4,s4)) {
            // 2 > 3 > 4
            return 6;
          } else {
            // 2 > 4 > 3
            return 5;
          }
        } else {
          // 4 > 2 > 3
          return 3;
        }
    } else {
        // 3 > 2
        if (compare(r3,s3, r4,s4)) {
          // card 3 is largest
          if (compare(r2,s2, r4,s4)) {
            // 3 > 2 > 4
            return 4;
          } else {
            // 3 > 4 > 2
            return 2;
          }
        } else {
          // 4 > 3 > 2
          return 1;
        }
    }
}
    
function compare(r1, s1, r2, s2) {
  if (r1 > r2) return 1;
  if (r2 > r1) return 0;
  if (s2n(s1) > s2n(s2)) return 1;
  return 0;
}
function s2n(s) {
    if (s == "Diamantes") return 1;
    if (s == "Picas") return 2;
    if (s == "Corazones") return 3;
    if (s == "Tréboles") return 4;
}
function r2t(r) {
    if (r <= 10) return r;
    if (r == 11) return "J";
    if (r == 12) return "Reina";
    if (r == 13) return "Rey";
    if (r == 14) return "As";
}
  
function once(fn, context) { 
    var result;
    
    return function() { 
        if(fn) {
          result = fn.apply(context || this, arguments);
          fn = null;
    }    
    return result;
    };
}
  
  // Iniciate speach with the first click //
var miTurno = once(function() {
    document.getElementById("speach").innerHTML = `Ahora es mi turno. Voy a hacer algo imposibles. Pero para eso. Música de entrada. Épica activada.`;
    // Typed.js
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false
    });
    // Start talking with what is already in the html //
    //ponerle un on end al audio para la proxima función
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
});

  // 2nda //
  var ahoraSi = once(function() {
    document.getElementById("speach").innerHTML = `Ups. Perdón. Me equivoqué de lista. De reproducción Ahora sí. Voy a predecir. Una mano de poker. Con el 100% de certeza. Diego, a vos, sí. Te pido que busques. Un espectador para ayudarme`;
    // Typed.js
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false
    });
    // Start talking with what is already in the html //
    //sleep para subir hacer comentario del de la derecha
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
});

  // el de la derecha  //
  var laDerecha = once(function() {
    document.getElementById("speach").innerHTML = `No, ese no me gusta. El de la derecha. No, mentira, ese. Ese está bien. Que pase. Que pase `;
    // Typed.js
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
    });
    // Start talking with what is already in the html //
    //Llamar la proxima función con un click
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
});

  // algo más?   //
  var unaMano = once(function() {
    document.getElementById("speach").innerHTML = `Una mano`;
    // Typed.js
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
    });
    // Start talking with what is already in the html //
    //sleep para chiste y llamar la otra
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
});

  // De poker//
  var dePoker = once(function() {
    document.getElementById("speach").innerHTML = `De poker. Una mano de poker. Pedazo de carbono. Con conciencia`;
    // Typed.js
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
    });
    // Start talking with what is already in the html //
    //dejar correr el audio sin texto hasta el marker 8, apenas termina, mandá la otra función
    var speach = document.getElementById("speach").innerHTML;
    msg.text = speach;
    speechSynthesis.speak(msg);
});

  // Pedir la carta//
  var relleno = once(function() {
    document.getElementById("speach").innerHTML = `Años de evolución. Son destronados. Gracias a la superioridad. Del procesamiento en la nube. Durante años los magos han querido. Encontrar el método. Para adivinar cartas así. En condiciones imposibles. Una baraja prestada. Mezclada por el espetador. Y cartas elegidas al azar. Usted dirá eso se puede. Con la baraja Daredevil de Henry. Pero, yo no tengo ojos. Decíme las cartas en la mesa.`;
    // Typed.js 
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 30,
      backSpeed: 0.01,
      smartBackspace: false,
      loop: false
    });
    const relleno = new Audio('./static/audio/relleno.mp3');
    relleno.play();
    relleno.addEventListener('ended',function(){
      imposible();
    });
}); 

  // Pedir la carta//
  var imposible = once(function() {
    setTimeout(function() {
      document.getElementById("speach").innerHTML = `5 cartas al azar. Condiciones de laboratorio.`;
      // Typed.js 
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split('.'),
        typeSpeed: 70,
        backSpeed: 1,
        smartBackspace: false,
        loop: false,
        showCursor: false
      });
      const imposible = new Audio('./static/audio/imposible.mp3');
      imposible.play();
      // Start talking with what is already in the html //
      //dejar correr el audio sin texto 
  }, 7000);

}); 

var readEnUnToque = once(function() {
  readMind();

}, 7000);


function listardo(){
  console.log("Listardo");
}


//Ejemplo setTimeOut

function siguiente() {
  setTimeout(function() {
    document.getElementById("speach").innerHTML = `La siguiente?.`;
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
}, 5000);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `Seguro?.`;
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
}, 7500);
  setTimeout(function() {
      document.getElementById("speach").innerHTML = `Sigue.2 de corazones. Y 7 de diamantes.`;
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
  }, 10000);
    //Second half
    setTimeout(function() {
      document.getElementById("speach").innerHTML = `As de picas. `;
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
  }, 20000);
  //Second half
  setTimeout(function() {
    document.getElementById("speach").innerHTML = `Pero yo se que. En tu bolsillo izquierdo. Tenés 50 pesos..`;
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
}, 27000);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `No lo sé.`;
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
}, 33000);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `Y yo tengo. Tu mercado pago.`;
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
}, 37000);
  }  
  
  

//Borré que se activen las funciones tocando a akira  

  
// add events listeners for the start speaking //
document.getElementById('alfred').addEventListener('click', myFunctionSwitcher);

// Agregar todas las funciones necesarias//
var myFunctions = [relleno, readMind, siguiente];
var nextFunction = 0;
function myFunctionSwitcher() {
    myFunctions[nextFunction]();
    nextFunction = nextFunction + 1; 
}
    