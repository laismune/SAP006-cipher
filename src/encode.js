import cipher from './cipher.js';

//ENCODE
let offset = document.getElementById("offsetToEncode");
let string = document.getElementById("messageToEncode");
let botao = document.getElementById("botaoToEncode");
let valorOffset = ""
let valorString = ""

offset.addEventListener("keyup", function (event) {
    valorOffset = event.target.value
    console.log(valorOffset)})

string.addEventListener("keyup", function (event) {
    valorString = event.target.value
    console.log(valorString)})

function encodeButton () {
    let cipherFunction = cipher.encode(valorOffset, valorString);
    encodedMessage.innerHTML = cipherFunction;
 }

botao.addEventListener("click", encodeButton)

