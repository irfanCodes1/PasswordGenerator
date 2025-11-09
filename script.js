let generatebtn=document.getElementById("btn");
let password1=document.getElementById("pass1");
let password2=document.getElementById("pass2");

const lowerCaseLetters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const upperCaseLetters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const digits = ["0","1","2","3","4","5","6","7","8","9"];

const specialCharacters = [
  "!","@","#","$","%","^","&","*","(",")","_","+","[","]",
  "{","}","|",";",":","'","<",">","?",",",".","/","~","`","-","="
];

const allCharacters = [
  ...lowerCaseLetters,
  ...upperCaseLetters,
  ...digits,
  ...specialCharacters
];

function generateRandomPass(){
     let randompass1="";
     let randompass2="";
    for(let i=0;i<=8;i++){
        let randomIndex1=Math.floor(Math.random()*allCharacters.length);
        let randomIndex2=Math.floor(Math.random()*allCharacters.length);      
         randompass1+=allCharacters[randomIndex1];
         randompass2+=allCharacters[randomIndex2];
    }
    password1.textContent=randompass1;
    password2.textContent=randompass2;
}

generatebtn.addEventListener("click",function(){
   generateRandomPass();

});