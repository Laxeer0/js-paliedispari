var MAXNUM = 5;
var MINNUM = 1;

var evenUnevenCorrect = 0;

while(evenUnevenCorrect == 0){
  var evenUneven = prompt("Inserisci pari o dispari").toLowerCase();
  if(evenUneven == "pari" || evenUneven == "dispari"){
    evenUnevenCorrect = 1;
  }else{
    alert("Non hai inserito ne Pari ne Dispari");
  }

}

var numCorrect = 0;

while(numCorrect == 0){
  var numUser = parseInt(prompt("Inserisci numero da "+MINNUM+" a "+MAXNUM));

  if (numUser < MINNUM || numUser > MAXNUM){
    alert("Numero inserito non valido, riprova");
  }else{
    numCorrect = 1;
  }

}

var numPc = randomNum(MINNUM , MAXNUM)
var sumNum = numUser + numPc;

if (sumNum % 2 === 0){
  var outputStatus = "pari";
}else{
  var outputStatus = "dispari";
}

console.log(numPc);
console.log(sumNum);
console.log(outputStatus);

var outputResult = document.getElementById("outputResult");

if(outputStatus === evenUneven){
  outputResult.innerHTML = "Hai vinto!";
}else{
  outputResult.innerHTML = "Hai Perso!";
}
