const inputDark = document.getElementById("dark");
inputDark.addEventListener("change", function turnOn(event){
    console.log("clickado");
    const $body = document.querySelector("body");
    $body.classList.toggle("turnOn");
    const input = document.querySelector("input");
    input.classList.toggle(".turnOnInput");
});