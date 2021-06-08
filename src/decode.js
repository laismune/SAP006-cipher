import cipher from './cipher.js';

//DECODE

let offsetToDecode = document.getElementById("offsetToDecode");
let stringToDecode = document.getElementById("messageToDecode");
let botaoToDecode = document.getElementById("botaoToDecode");
let valorOffsetToDecode = ""
let valorStringToDecode = ""

offsetToDecode.addEventListener("keyup", function (event) {
    valorOffsetToDecode = event.target.value
    console.log(valorOffsetToDecode)
})

stringToDecode.addEventListener("keyup", function (event) {
    valorStringToDecode = event.target.value
    console.log(valorStringToDecode)
})

function decodeButton () {
    let cipherFunctionToDecode = cipher.decode(valorOffsetToDecode, valorStringToDecode);
    decodedMessage.innerHTML = cipherFunctionToDecode;
 }

botaoToDecode.addEventListener("click", decodeButton)
