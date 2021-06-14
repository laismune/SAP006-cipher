import cipher from './cipher.js';

//ENCODE
let offset = document.getElementById("encodePlaceToInsertOffset");
let string = document.getElementById("encodePlaceToInsertMessage");
let botao = document.getElementById("encodeButtonToEncode");
let encodedMessage = document.getElementById("encodePlaceForTheEncodedMessage")
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

