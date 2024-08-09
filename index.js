const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPW = document.getElementById("firstPW")
let scndPW = document.getElementById("scndPW")
let character = ""

function randomCh() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    character = characters[randomIndex]
    return character
}

function randomStr(){
        for (let i = 0; i < 15; i++) {
        randomCh()
        firstPW.textContent += character
    }
    
        for (let i = 0; i < 15; i++){
            randomCh()
            scndPW.textContent += character
    }
}


function generatePW() {
    randomStr()
    firstPW = ""
    scndPW = ""
}