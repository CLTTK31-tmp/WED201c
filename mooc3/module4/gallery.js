function upDate(previewPic) {
  console.log("Hover/Focus:", previewPic.src, "| Alt:", previewPic.alt);

  let displayDiv = document.getElementById('image');

  // Update background image
  displayDiv.style.backgroundImage = `url('${previewPic.src}')`;

  // Update text to alt text
  displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("Mouse out/Blur - resetting");

  let displayDiv = document.getElementById('image');

  // Reset background
  displayDiv.style.backgroundImage = "url('')";

  // Reset text
  displayDiv.innerHTML = "Hover over or focus on an image below to display here.";
}

function addTabFocus() {
  console.log("Page loaded - adding tabindex to images");

  let images = document.querySelectorAll('.preview');

  // Loop through each image and add tabindex="0"
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0');
  }

  console.log("Tabindex added to", images.length, "images");
}
