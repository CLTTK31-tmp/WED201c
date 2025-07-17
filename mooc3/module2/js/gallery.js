function upDate(previewPic) {
    console.log("Mouseover triggered!");
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    // Get the div with id="image"
    let displayDiv = document.getElementById('image');

    // Change background image to the hovered preview image
    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Change the text inside the div to the alt text of the preview image
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Mouseout triggered!");

    // Get the div with id="image"
    let displayDiv = document.getElementById('image');

    // Reset background image back to empty
    displayDiv.style.backgroundImage = "url('')";

    // Reset the text inside the div to the original text
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
