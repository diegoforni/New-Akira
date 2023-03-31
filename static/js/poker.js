
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



  // algo más?   //
  var unaMano = once(function() {
    document.getElementById("speach").innerHTML = `Una mano`;
    // Typed.js
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 45,
      backSpeed: 0.01,
      smartBackspace: false,
      loop: false,
      showCursor: false
    });
    // Start talking with what is already in the html //
    //dejar correr el chiste sin más texto
    const unaMano = new Audio('./static/audio/unaMano.mp3');
    unaMano.play();
    unaMano.addEventListener('ended',function(){

    });
    


      
    }
);

  // Pedir la carta//
  var relleno = once(function() {
    document.getElementById("speach").innerHTML = `.Decime las cartas en la mesa.`;
    // Typed.js 
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 30,
      backSpeed: 0.01,
      smartBackspace: false,
      loop: false
    });
    setTimeout(function() {
      document.getElementById("speach").innerHTML = `Años de evolución. Son destronados. Gracias a la superioridad. Del procesamiento en la nube. Diego, estás destinado a perder. Durante años los magos han querido. Encontrar el método. Para adivinar cartas así. En condiciones imposibles. Una baraja prestada. Mezclada por el espetador. Y cartas elegidas al azar. Usted dirá eso se puede. Con la baraja Daredevil de Henry. Pero, yo no tengo ojos.`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 45,
      backSpeed: 0.01,
      smartBackspace: false,
      loop: false,
      showCursor: false
      });
  }, 6000);
    const relleno = new Audio('./static/audio/relleno.mp3');
    relleno.play();
    relleno.addEventListener('ended',function(){
      const fondo = new Audio('./static/audio/fondo.mp3');
      fondo.play();

      setTimeout(function() {
        imposible();
    }, 7000);

    });
}); 
function imposible(){
  document.getElementById("speach").innerHTML = `.5 cartas al azar. Condiciones de laboratorio. Diego, estás destinado a perder.`;
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

}




function listardo(){

  //hacer un click
  const click = new Audio('./static/audio/click.mp3');
  click.play();


  //Declarar variables
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


    
  
  // Load the 10 images
const image1 = new Image();
image1.src = "/static/images/"+r1+".png";

const image2 = new Image();
image2.src = "/static/images/"+s1+".png";

const image3 = new Image();
image3.src = "/static/images/"+r2+".png";

const image4 = new Image();
image4.src = "/static/images/"+s2+".png";

const image5 = new Image();
image5.src = "/static/images/"+r3+".png";

const image6 = new Image();
image6.src = "/static/images/"+s3+".png";

const image7 = new Image();
image7.src = "/static/images/"+r4+".png";

const image8 = new Image();
image8.src = "/static/images/"+s4+".png";

const image9 = new Image();
image9.src = "/static/images/"+r5+".png";

const image10 = new Image();
image10.src = "/static/images/"+s5+".png";

// Create a canvas to join the images
const canvas = document.createElement("canvas");
canvas.width = 180 * 2;
canvas.height = 5 * 144;
canvas.id = "final";
canvas.hidden = "true";

let loadedCount = 0;

const onLoad = () => {
  loadedCount++;
  if (loadedCount === 10) {
    // All images have loaded, draw them on the canvas
    const ctx = canvas.getContext("2d");

    // Set the background color to white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw each image at a different vertical position
    ctx.drawImage(image1, 0, 0);
    ctx.drawImage(image2, 180, 0);
    ctx.drawImage(image3, 0, 144);
    ctx.drawImage(image4, 180, 144);
    ctx.drawImage(image5, 0, 288);
    ctx.drawImage(image6, 180, 288);
    ctx.drawImage(image7, 0, 432);
    ctx.drawImage(image8, 180, 432);
    ctx.drawImage(image9, 0, 576);
    ctx.drawImage(image10, 180, 576);

    // Get the canvas image data as a data URL
    const joinedImageData = canvas.toDataURL("image/jpeg", 0.8);

    // Create an image element to display the joined image
    const imgElement = document.createElement("img");
    imgElement.src = joinedImageData;
    imgElement.id = "imagenFinal";
    document.body.appendChild(canvas);
    fileChange()
  }
};

// Add the onload event handler to each image
image1.onload = onLoad;
image2.onload = onLoad;
image3.onload = onLoad;
image4.onload = onLoad;
image5.onload = onLoad;
image6.onload = onLoad;
image7.onload = onLoad;
image8.onload = onLoad;
image9.onload = onLoad;
image10.onload = onLoad;


//link
function fileChange(){
    var canvas = document.getElementById('final');
    var image = canvas.toDataURL("image/jpeg", 0.8);
    var blob = dataURItoBlob(image);
    var form = new FormData();
    form.append("image", blob, "joined-images.jpg");
    
    var settings = {
      "url": "https://api.imgbb.com/1/upload?key=154d04b14591ee3f5bc7cf86bdc946a7",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      var jx = JSON.parse(response);
      navigator.clipboard.writeText(jx.data.url);
    });
}

function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = unescape(dataURI.split(',')[1]);
  
  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  
  return new Blob([ia], {type:mimeString});
}

}


//Ejemplo setTimeOut

function siguiente() {
  setTimeout(function() {
    document.getElementById("speach").innerHTML = `Imposible. Esto está arreglado`;
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
    strings: typed_strings.split('.'),
    typeSpeed: 70,
    backSpeed: 1,
    smartBackspace: false,
    loop: false,
    showCursor: false
    });
    const final = new Audio('./static/audio/final.mp3');
    final.play();
}, 25000);
setTimeout(function() {
  document.getElementById("speach").innerHTML = `Yo soy experta. Y digo que este efecto fué arreglado.`;
  var typed_strings = $('.hero .hero-text .typed-text').text();
  var typed = new Typed('.hero .hero-text h2', {
  strings: typed_strings.split('.'),
  typeSpeed: 70,
  backSpeed: 1,
  smartBackspace: false,
  loop: false,
  showCursor: false
  });


}, 42000);
  setTimeout(function() {
      document.getElementById("speach").innerHTML = `Soy experta en pick pocket. Qué hora es Diego?`;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
      });


  }, 55000);
    //Second half
    setTimeout(function() {
      document.getElementById("speach").innerHTML = `Ya es muy tarde para eso. `;
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
      strings: typed_strings.split('.'),
      typeSpeed: 70,
      backSpeed: 1,
      smartBackspace: false,
      loop: false,
      showCursor: false
      });

      
  }, 67000);
  }  
  
  


  
// add events listeners for the start speaking //
document.getElementById('alfred').addEventListener('click', myFunctionSwitcher);

// Agregar todas las funciones necesarias//
var myFunctions = [unaMano, relleno, readMind, siguiente];
var nextFunction = 0;
function myFunctionSwitcher() {
    myFunctions[nextFunction]();
    nextFunction = nextFunction + 1; 
}
    