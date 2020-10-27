var inputWord = prompt("Inserisci la parola da controllare");
var message = "";
var outputPolindrome = document.getElementById("outputPalindrome");

reverseString(inputWord);

if(stringReverse == inputWord){

  var check = true;
  message="è palindromo";

}else{

  var check = false;
  message = "non è palindromo";

}

outputPolindrome.innerHTML = "La parola " + inputWord + " al contrario è " + stringReverse + " quindi "+ message;
