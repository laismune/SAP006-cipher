const cipher = {
  // ...
};

export default cipher;

//ENCODE ANY VALUE OF OFFSET - optimized
function encode (string, value) {
	let messageEncoded = "";
	for (var i = 0; i < string.length; i++) {
		let codeAsc = string.charCodeAt(i);
		if (value <= 0) {
			let newValue = value * (-1)
				if (codeAsc <= 90 && codeAsc >=65) {
					if (codeAsc - newValue >= 65) {
						let newAlphabetIndex = codeAsc - newValue;
						let newLetter = String.fromCharCode(newAlphabetIndex);
						messageEncoded += newLetter;
					} else {
						let newAlphabetIndex = codeAsc - newValue + 26;
						let newLetter = String.fromCharCode(newAlphabetIndex);
						messageEncoded += newLetter
  						}
  				} else if (codeAsc <= 122 && codeAsc >= 97) {
  					if (codeAsc - newValue >= 97) {
						let newAlphabetIndex = codeAsc - newValue;
						let newLetter = String.fromCharCode(newAlphabetIndex);
						messageEncoded += newLetter;	
					} else {
						let newAlphabetIndex = codeAsc - newValue + 26;
						let newLetter = String.fromCharCode(newAlphabetIndex)
						messageEncoded += newLetter
						}
  				} else {
  					console.log("ERRO")
  					}		
		} else {
			if (codeAsc <= 90 && codeAsc >=65) {
 				let alphabetIndex = codeAsc - 65;
  				let newAlphabetIndex = (alphabetIndex + value) % 26;
  				let newCodAsc = newAlphabetIndex + 65;
  				let newLetter = String.fromCharCode(newCodAsc);
  				messageEncoded += newLetter; 	
  			} else if (codeAsc <= 122 && codeAsc >= 97) {
  				let alphabetIndex = codeAsc - 97;
  				let newAlphabetIndex = (alphabetIndex + value) % 26;
  				let newCodAsc = newAlphabetIndex + 97;
  				let newLetter = String.fromCharCode(newCodAsc);
  				messageEncoded += newLetter; 	
  			} else {
  				console.log("ERRO")
				}		
		}
	}
console.log(messageEncoded)
}


//#DECODE ANY VALUE OF OFFSET - optimized
function decode (string, value) {
	let messageDecoded = "";
	for (var i = 0; i < string.length; i++) {
		let codeAsc = string.charCodeAt(i);
		if (value <= 0) {
			let newValue = value * (-1)
			if (codeAsc <= 90 && codeAsc >=65) {
 				let alphabetIndex = codeAsc - 65;
  				let newAlphabetIndex = (alphabetIndex + newValue) % 26;
  				let newCodAsc = newAlphabetIndex + 65;
  				let newLetter = String.fromCharCode(newCodAsc);
  				messageDecoded += newLetter; 				
  			} else if (codeAsc <= 122 && codeAsc >= 97) {
  				let alphabetIndex = codeAsc - 97;
  				let newAlphabetIndex = (alphabetIndex + newValue) % 26;
  				let newCodAsc = newAlphabetIndex + 97;
  				let newLetter = String.fromCharCode(newCodAsc);
  				messageDecoded += newLetter; 					
  			} else {
  				console.log("ERRO")
  				}			
  		} else {
			if (codeAsc <= 90 && codeAsc >=65) {
			
				if (codeAsc - value >= 65) {
					let newAlphabetIndex = codeAsc - value;
					let newLetter = String.fromCharCode(newAlphabetIndex);
					messageDecoded += newLetter;		
				} else {
					let newAlphabetIndex = codeAsc - value + 26;
					let newLetter = String.fromCharCode(newAlphabetIndex)
					messageDecoded += newLetter
  					}			
  			} else if (codeAsc <= 122 && codeAsc >= 97) {
  				if (codeAsc - value >= 97) {
					let newAlphabetIndex = codeAsc - value;
					let newLetter = String.fromCharCode(newAlphabetIndex);
					messageDecoded += newLetter;		
				} else {
					let newAlphabetIndex = codeAsc - value + 26;
					let newLetter = String.fromCharCode(newAlphabetIndex)
					messageDecoded += newLetter
  					}		
  			} else {
  				console.log("ERRO")		
  				}	
  			}
		}
console.log(messageDecoded)
}