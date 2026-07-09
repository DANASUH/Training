const counterHeading = document.querySelector("#counter-heading");
const clickButton = document.querySelector("#click-btn");
let count = 0;

clickButton.addEventListener("click", () => {
    count++; 
    counterHeading.textContent = `Clicks: ${count}`; 
});

const textInput = document.querySelector("#text-input");
const liveText = document.querySelector("#live-text");

textInput.addEventListener("input", () => {
    if (textInput.value === "") {
        liveText.textContent = "Your live text will appear here...";
    } else {
        liveText.textContent = textInput.value; 
    }
});