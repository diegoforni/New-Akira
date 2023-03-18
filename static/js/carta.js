// Load the 10 images
const image1 = new Image();
image1.src = "/static/images/J.png";

const image2 = new Image();
image2.src = "/static/images/corazones.png";

const image3 = new Image();
image3.src = "/static/images/7.png";

const image4 = new Image();
image4.src = "/static/images/diamantes.png";

const image5 = new Image();
image5.src = "/static/images/3.png";

const image6 = new Image();
image6.src = "/static/images/picas.png";

const image7 = new Image();
image7.src = "/static/images/K.png";

const image8 = new Image();
image8.src = "/static/images/treboles.png";

const image9 = new Image();
image9.src = "/static/images/Q.png";

const image10 = new Image();
image10.src = "/static/images/diamantes.png";

// Create a canvas to join the images
const canvas = document.createElement("canvas");
canvas.width = 180;
canvas.height = 10 * 144;
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
    ctx.drawImage(image2, 0, 144);
    ctx.drawImage(image3, 0, 288);
    ctx.drawImage(image4, 0, 432);
    ctx.drawImage(image5, 0, 576);
    ctx.drawImage(image6, 0, 720);
    ctx.drawImage(image7, 0, 864);
    ctx.drawImage(image8, 0, 1008);
    ctx.drawImage(image9, 0, 1152);
    ctx.drawImage(image10, 0, 1296);

    // Get the canvas image data as a data URL
    const joinedImageData = canvas.toDataURL("image/jpeg", 0.8);

    // Create an image element to display the joined image
    const imgElement = document.createElement("img");
    imgElement.src = joinedImageData;
    imgElement.id = "imagenFinal";
    document.body.appendChild(canvas);
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
