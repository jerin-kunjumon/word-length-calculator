function countWords(){
let text = document.getElementById("inputField").value;
let numWords = 0;
if (text!="") {
    for (let i = 0; i < text.length; i++) {
        let currentCharacter = text[i];
        if(currentCharacter==" "){
            numWords+=1;
        }
        
    }
    numWords+=1;
    
}

document.getElementById("show").innerHTML = numWords
}
