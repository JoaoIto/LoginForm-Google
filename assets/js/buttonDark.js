const inputDark = document.getElementById("dark");
inputDark.addEventListener("change", function turnOn(){
    console.log("clickado");
    const container = document.querySelector(".container");
    container.classList.toggle("turnOnContainer");
    const $body = document.querySelector("body");
    $body.classList.toggle("turnOnBody");
});