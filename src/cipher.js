const cipher = {
	encode:function (offset, string) {
		let messageEncoded = "";
		let valueNumber = parseInt(offset, 10)
		if(typeof offset !== "number") {
			throw TypeError("A chave de criptografia precisa ser númerica!")
		} else {
			if(typeof string !== "string") {
				throw TypeError("Verifique o código DOF.")
			} else {	
				for (var i = 0; i < string.length; i++) {
					let codeAsc = string.charCodeAt(i);
					if (valueNumber >=0) {
						if (codeAsc <= 90 && codeAsc >=65) {
							let alphabetIndex = codeAsc - 65;
							let newAlphabetIndex = (alphabetIndex + valueNumber) % 26;
							let newCodAsc = newAlphabetIndex + 65;
							let newLetter = String.fromCharCode(newCodAsc);
							messageEncoded += newLetter; 	
						} 
						else if (codeAsc <= 122 && codeAsc >= 97) {
							let alphabetIndex = codeAsc - 97;
							let newAlphabetIndex = (alphabetIndex + valueNumber) % 26;
							let newCodAsc = newAlphabetIndex + 97;
							let newLetter = String.fromCharCode(newCodAsc);
							messageEncoded += newLetter; 	
						} else {
							let newAlphabetIndex = codeAsc;	
							let newLetter = String.fromCharCode(newAlphabetIndex);	
							messageEncoded += newLetter; 
						}
					} else {
						if (codeAsc <= 90 && codeAsc >=65) {
							let position = codeAsc - 65;
							if (position + valueNumber > 0) {
								let newPosition = position + valueNumber;
								let newAlphabetIndex = newPosition + 65;
								let newLetter = String.fromCharCode(newAlphabetIndex);
								messageEncoded += newLetter;
							} 
							else if (position + valueNumber < 0) {
								let newPosition = position + valueNumber;
								let newPositionPositive = newPosition * (-1)
								let newPositionFull = newPositionPositive % 26;
								if (newPositionFull === 0){
									let newAlphabetIndex = 65;
									let newLetter = String.fromCharCode(newAlphabetIndex);
									messageEncoded += newLetter;
								}else{
									let newAlphabetIndex = (26 - newPositionFull + 65);
									let newLetter = String.fromCharCode(newAlphabetIndex);
									messageEncoded += newLetter;
								}
							} else {
								let newAlphabetIndex = codeAsc;
								let newLetter = String.fromCharCode(newAlphabetIndex);
								messageEncoded += newLetter;
							}
						} 
						else if (codeAsc <= 122 && codeAsc >=97) {
							let position = codeAsc - 97;
							if (position + valueNumber > 0) {
								let newPosition = position + valueNumber;
								let newAlphabetIndex = newPosition + 97;
								let newLetter = String.fromCharCode(newAlphabetIndex);
								messageEncoded += newLetter;
							} 
							else if (position + valueNumber < 0) {
								let newPosition = position + valueNumber;
								let newPositionPositive = newPosition * (-1)
								let newPositionFull = newPositionPositive % 26;
								if (newPositionFull === 0){
									let newAlphabetIndex = 97;
									let newLetter = String.fromCharCode(newAlphabetIndex);
									messageEncoded += newLetter;
								} else {
									let newAlphabetIndex = (26 - newPositionFull + 97);
									let newLetter = String.fromCharCode(newAlphabetIndex);
									messageEncoded += newLetter;
								}
							} else {
								let newAlphabetIndex = codeAsc;
								let newLetter = String.fromCharCode(newAlphabetIndex);
								messageEncoded += newLetter;
							}
						} else {
							let newAlphabetIndex = codeAsc;
							let newLetter = String.fromCharCode(newAlphabetIndex);
							messageEncoded += newLetter
						}
					}
			
				}
			}
		}
	return messageEncoded		
	},
	decode: function (offset, string) {
		let messageDecoded = "";
		let valueNumber = parseInt(offset, 10)
		if(typeof offset !== "number") {
			throw TypeError("A chave de criptografia precisa ser númerica!")
		} else {
			if(typeof string !== "string") {
				throw TypeError("Verifique o código DOF.")
			} else {
				for (var i = 0; i < string.length; i++) {
					let codeAsc = string.charCodeAt(i);
					if (valueNumber >=0) {
						let valueNumbeToDecode = valueNumber * (-1)
						if (codeAsc <= 90 && codeAsc >=65) {
							let position = codeAsc - 65;
							if (position + valueNumbeToDecode > 0) {
								let newPosition = position + valueNumbeToDecode;
								let newAlphabetIndex = newPosition + 65;
								let newLetter = String.fromCharCode(newAlphabetIndex);
								messageDecoded += newLetter;
							} 
							else if (position + valueNumbeToDecode <= 0) {
									let newPosition = position + valueNumbeToDecode;
									let newPositionPositive = newPosition * (-1)
									let newPositionFull = newPositionPositive % 26;
									if (newPositionFull === 0) {
										let newAlphabetIndex = 65;
										let newLetter = String.fromCharCode(newAlphabetIndex);
										messageDecoded += newLetter;
									} else {
										let newAlphabetIndex = (26 - newPositionFull + 65);
										let newLetter = String.fromCharCode(newAlphabetIndex);
										messageDecoded += newLetter;
										}
							} else {
								let newAlphabetIndex = codeAsc;
								let newLetter = String.fromCharCode(newAlphabetIndex);
								messageDecoded += newLetter;
							}
						} 
						else if (codeAsc <= 122 && codeAsc >=97) {
							let position = codeAsc - 97;
							if (position + valueNumbeToDecode > 0) {
								let newPosition = position + valueNumbeToDecode;
								let newAlphabetIndex = newPosition + 97;
								let newLetter = String.fromCharCode(newAlphabetIndex);
								messageDecoded += newLetter;
							} 
							else if (position + valueNumbeToDecode <= 0) {
								let newPosition = position + valueNumbeToDecode;
								let newPositionPositive = newPosition * (-1)
								let newPositionFull = newPositionPositive % 26;
								if (newPositionFull === 0) {
									let newAlphabetIndex = 97;
									let newLetter = String.fromCharCode(newAlphabetIndex);
									messageDecoded += newLetter;
								} else {
									let newAlphabetIndex = (26 - newPositionFull + 97);
									let newLetter = String.fromCharCode(newAlphabetIndex);
									messageDecoded += newLetter;
								}
							} else {
								let newAlphabetIndex = codeAsc;
								let newLetter = String.fromCharCode(newAlphabetIndex);
								messageDecoded += newLetter;
							}
						} else {
							let newAlphabetIndex = codeAsc;
							let newLetter = String.fromCharCode(newAlphabetIndex);
							messageDecoded += newLetter
						}
					} else {
						let valueNumbeToDecode = valueNumber * (-1);
						if (codeAsc <= 90 && codeAsc >=65) {
							let alphabetIndex = codeAsc - 65;
							let newAlphabetIndex = (alphabetIndex + valueNumbeToDecode) % 26;
							let newCodAsc = newAlphabetIndex + 65;
							let newLetter = String.fromCharCode(newCodAsc);
							messageDecoded += newLetter; 	
						} 
						else if (codeAsc <= 122 && codeAsc >= 97) {
							let alphabetIndex = codeAsc - 97;
							let newAlphabetIndex = (alphabetIndex + valueNumbeToDecode) % 26;
							let newCodAsc = newAlphabetIndex + 97;
							let newLetter = String.fromCharCode(newCodAsc);
							messageDecoded += newLetter; 	
						} else {
							let newAlphabetIndex = codeAsc;	
							let newLetter = String.fromCharCode(newAlphabetIndex);	
							messageDecoded += newLetter; 
						}
					}
				}
			}
		}
	return messageDecoded	
	}
};
		
export default cipher;