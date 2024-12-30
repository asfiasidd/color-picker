const colorpicker = document.getElementById('colorpicker');
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');

colorpicker.addEventListener("input" , (event) => {
    const color = event.target.value;
    colorDisplay.style.backgroundColor = color;
    colorCode.textContent = color;

})