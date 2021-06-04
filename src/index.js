import cipher from './cipher.js';

console.log(cipher);

let string = ""
let offset = ""

string = document.getElementById("string").value;
offset = document.getElementById("offset").value;

document.write(cipher.encode(string,offset).value)
