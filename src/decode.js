import cipher from './cipher.js';

//DECODE

let offsetToDecode = document.getElementById("decodePlaceToInsertOffset");
let stringToDecode = document.getElementById("decodePlaceToInsertMessage");
let botaoToDecode = document.getElementById("decodeButtonToDecode");
let decodedMessage = document.getElementById("decodePlaceForTheDecodedMessage")
let valorOffsetToDecode = ""
let valorStringToDecode = ""

offsetToDecode.addEventListener("keyup", function (event) {
    valorOffsetToDecode = parseInt(event.target.value)
})

stringToDecode.addEventListener("keyup", function (event) {
    valorStringToDecode = event.target.value
})

function decodeButton () {
    let cipherFunctionToDecode = cipher.decode(valorOffsetToDecode, valorStringToDecode);
    decodedMessage.innerHTML = cipherFunctionToDecode;
 }

botaoToDecode.addEventListener("click", decodeButton)
