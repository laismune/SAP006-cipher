import cipher from './cipher.js';

//ENCODE
let offset = document.getElementById("offsetToEncode");
let string = document.getElementById("messageToEncode");
let botao = document.getElementById("botaoToEncode");
let encodedMessage = document.getElementById("encodedMessage")
let valorOffset = ""
let valorString = ""

offset.addEventListener("keyup", function (event) {
    valorOffset = parseInt(event.target.value)
    })

string.addEventListener("keyup", function (event) {
    valorString = event.target.value
    })

function encodeButton () {
    let cipherFunction = cipher.encode(valorOffset, valorString);
    encodedMessage.innerHTML = cipherFunction;
 }

botao.addEventListener("click", encodeButton)

