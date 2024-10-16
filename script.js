// Get references to the image and input elements
let ProfilePic = document.getElementById("ProfileImg");
let inputImg = document.getElementById("inputId");

// Event listener for when the input file selection changes
inputImg.onchange = function () {
  // Change the source of the image to the selected file
  ProfilePic.src = URL.createObjectURL(inputImg.files[0]);
};
