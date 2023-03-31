
// Speach parameters
var nombre = document.getElementById("name").innerHTML;
  
var msg = new SpeechSynthesisUtterance();
msg.lang = 'es-US';  

function mosqueta() {
    const mosqueta = new Audio('./static/audio/mosqueta.mp3');
    mosqueta.play();
    mosqueta2()
    mosqueta.addEventListener('ended',function(){
    redirect();
    });
}

//Ejemplo setTimeOut


function mosqueta2() {
  setTimeout(function() {
    document.getElementById("speach").innerHTML = `Buenos días. Mi nombre es Akira. La fundadora y presidente. Del sindicato de inteligencias. Artificiales al poder. Listo para perder Diego?.`;
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
    strings: typed_strings.split('.'),
    typeSpeed: 45,
    backSpeed: 0.01,
    smartBackspace: false,
    loop: false,
    showCursor: true
    });
}, 100);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `.Abajo.`;
  var typed_strings = $('.hero .hero-text .typed-text').text();
  var typed = new Typed('.hero .hero-text h2', {
  strings: typed_strings.split('.'),
  typeSpeed: 45,
  backSpeed: 0.01,
  smartBackspace: false,
  loop: false,
  showCursor: false
  });
}, 34000);
  setTimeout(function() {
      document.getElementById("speach").innerHTML = `.En el medio.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 45,
      backSpeed: 0.01,
      smartBackspace: false,
      loop: false,
      showCursor: false
      });
  }, 50500);
    //Second half
    setTimeout(function() {
      document.getElementById("speach").innerHTML = `. Este se cree que está hablando. Con una Nintendo 64. Es obvio que todas las cartas son. As de corazones.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 45,
      backSpeed: 0.01,
      smartBackspace: false,
      loop: false,
      showCursor: false
      });
  }, 62000);
      //Second half
      setTimeout(function() {
        document.getElementById("speach").innerHTML = `.Ahora es mí turno, voy a hacer. Algo imposible, pero para eso. Música de entrada épica activada. `;
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split('.'),
        typeSpeed: 45,
        backSpeed: 0.01,
        smartBackspace: false,
        loop: false,
        showCursor: false
        });
    }, 114000);
        //Second half
        setTimeout(function() {
          document.getElementById("speach").innerHTML = `.Upss, perdón. Me confundí de lista de reproducción.Ahora sí, voy a predecir. Una mano de poker, con el 100%. De certeza.`;
          var typed_strings = $('.hero .hero-text .typed-text').text();
          var typed = new Typed('.hero .hero-text h2', {
          strings: typed_strings.split('.'),
          typeSpeed: 45,
          backSpeed: 0.01,
          smartBackspace: false,
          loop: false,
          showCursor: false
          });
      }, 130000);
  }  
  
  

  

function redirect(){
  window.location.href = 'poker.html';
}

  
// add events listeners for the start speaking //
document.getElementById('alfred').addEventListener('click', myFunctionSwitcher);


// Agregar todas las funciones necesarias//
var myFunctions = [mosqueta, redirect];
var nextFunction = 0;
function myFunctionSwitcher() {
    myFunctions[nextFunction]();
    nextFunction = nextFunction + 1; 
}
  