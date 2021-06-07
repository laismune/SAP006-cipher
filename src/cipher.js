const cipher = {
encode:function (offset, string) {
  let offsetValue = parseInt(offset,)
  let messageEncoded = "";
  for (var i = 0; i < string.length; i++) {
    let codeAsc = string.charCodeAt(i);
    if (offsetValue <= 0) {
      let newValue = offsetValue * (-1)
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
        } 
        else if (codeAsc <= 122 && codeAsc >= 97) {
          if (codeAsc - newValue >= 97) {
            let newAlphabetIndex = codeAsc - newValue;
            let newLetter = String.fromCharCode(newAlphabetIndex);
            messageEncoded += newLetter;	
          } else {
            let newAlphabetIndex = codeAsc - newValue + 26;
            let newLetter = String.fromCharCode(newAlphabetIndex)
            messageEncoded += newLetter
          }
        } 
        else {
          let newAlphabetIndex = codeAsc;	
          let newLetter = String.fromCharCode(newAlphabetIndex);	
          messageEncoded += newLetter;
          }		
    } else {
      if (codeAsc <= 90 && codeAsc >=65) {
        let alphabetIndex = codeAsc - 65;
        let newAlphabetIndex = (alphabetIndex + offsetValue) % 26;
        let newCodAsc = newAlphabetIndex + 65;
        let newLetter = String.fromCharCode(newCodAsc);
        messageEncoded += newLetter; 	
      } 
      else if (codeAsc <= 122 && codeAsc >= 97) {
        let alphabetIndex = codeAsc - 97;
        let newAlphabetIndex = (alphabetIndex + offsetValue) % 26;
        let newCodAsc = newAlphabetIndex + 97;
        let newLetter = String.fromCharCode(newCodAsc);
        messageEncoded += newLetter; 	
      } else {
        let newAlphabetIndex = codeAsc;	
        let newLetter = String.fromCharCode(newAlphabetIndex);	
        messageEncoded += newLetter;
      }		
    }
  }
  return messageEncoded;
},
decode: function (offset, string) {
  let offsetValue = parseInt(offset, 10)
  let messageDecoded = "";
  for (var i = 0; i < string.length; i++) {
    let codeAsc = string.charCodeAt(i);
    if (offsetValue <= 0) {
      let newValue = offsetValue * (-1)
      if (codeAsc <= 90 && codeAsc >=65) {
        let alphabetIndex = codeAsc - 65;
        let newAlphabetIndex = (alphabetIndex + newValue) % 26;
        let newCodAsc = newAlphabetIndex + 65;
        let newLetter = String.fromCharCode(newCodAsc);
        messageDecoded += newLetter; 				
      } 
      else if (codeAsc <= 122 && codeAsc >= 97) {
        let alphabetIndex = codeAsc - 97;
        let newAlphabetIndex = (alphabetIndex + newValue) % 26;
        let newCodAsc = newAlphabetIndex + 97;
        let newLetter = String.fromCharCode(newCodAsc);
        messageDecoded += newLetter; 					
      } 
      else {
        let newAlphabetIndex = codeAsc;	
        let newLetter = String.fromCharCode(newAlphabetIndex);	
        messageDecoded += newLetter;
      }			
    } else {
      if (codeAsc <= 90 && codeAsc >=65) {
        if (codeAsc - offsetValue >= 65) {
          let newAlphabetIndex = codeAsc - offsetValue;
          let newLetter = String.fromCharCode(newAlphabetIndex);
          messageDecoded += newLetter;		
        } else {
          let newAlphabetIndex = codeAsc - offsetValue + 26;
          let newLetter = String.fromCharCode(newAlphabetIndex)
          messageDecoded += newLetter
        }			
      } 
      else if (codeAsc <= 122 && codeAsc >= 97) {
        if (codeAsc - offsetValue >= 97) {
          let newAlphabetIndex = codeAsc - ooffsetValue;
          let newLetter = String.fromCharCode(newAlphabetIndex);
          messageDecoded += newLetter;		
        } else {
          let newAlphabetIndex = codeAsc - offsetValue + 26;
          let newLetter = String.fromCharCode(newAlphabetIndex)
          messageDecoded += newLetter
          }		
      } 
      else {
        let newAlphabetIndex = codeAsc;	
        let newLetter = String.fromCharCode(newAlphabetIndex);	
        messageDecoded += newLetter;
        }	
      }
  }
  return messageDecoded;
}
};

export default cipher;
