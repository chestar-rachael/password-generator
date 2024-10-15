const passWordBox = document.getElementById('password');
const length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbols = "!@#$%^&*?()_+{}<>/=-";
let allChars = `upperCase + lowerCase + number + symbols`

function createPassword(){
  let passWord = "";
  passWord += upperCase[Math.floor(Math.random()*upperCase.length)];
  passWord +=  lowerCase[Math.floor(Math.random()* lowerCase.length)];
  passWord +=  number[Math.floor(Math.random()* number.length)];
  passWord +=  symbols[Math.floor(Math.random()* symbols.length)];

  while(length > passWord.length){
    passWord += allChars[Math.floor(Math.random() * allChars.length)];
}
  passWordBox.value = passWord;
}

function copyPassword(){
  passWordBox.select()
  document.execCommand("copy")
}