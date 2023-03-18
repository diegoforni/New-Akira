const imageUrl ="static/images/carta.jpeg"; // replace with the URL or file name of your source image
const copyButton = document.getElementById('copy-button'); // assumes you have a button element for copying the URL

function createObjectUrlAndCopyUrl() {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const objectUrl = URL.createObjectURL(blob); // create object URL for the image
        const img = document.createElement('img');
        img.src = objectUrl; // set the object URL as the src for the img element
        document.body.appendChild(img); // add the img element to the DOM

        // add event listener for the copy button
        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(objectUrl);
          console.log('Image URL copied to clipboard!');
        });
      } else {
        console.error('Failed to load image:', xhr.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('Failed to load image:', xhr.statusText);
    };
    xhr.send();
  } catch (error) {
    console.error(error);
  }
}

createObjectUrlAndCopyUrl();
