let numberOne = Number (prompt("Digite o primeiro número!"));
let numberTwo = Number (prompt("Digite o segundo número!"));

function sum(numberOne, numberTwo) {
  return numberOne + numberTwo
}

function subtraction(numberOne, numberTwo) {
  return numberOne - numberTwo; 
}

function multiplication(numberOne, numberTwo){
  return numberOne * numberTwo;
}

function division(numberOne, numberTwo) {
  return (numberOne / numberTwo).toFixed(2);
}

function restOfDivision(numberOne, numberTwo) {
  return numberOne % numberTwo;
}

alert(`A soma dos dois números é: ${sum(numberOne, numberTwo)}.`);
alert(`A subtração dos dois números é: ${subtraction(numberOne, numberTwo)}.`);
alert(`A multiplicação dos dois números é: ${multiplication(numberOne, numberTwo)}`);
alert(`A divisão dos dois números é: ${division(numberOne, numberTwo)}.`)
alert(`O resto da divisão dos dois números é: ${restOfDivision(numberOne, numberTwo)}.`);

switch(sum(numberOne, numberTwo) % 2) {
  case 0:
    alert(`A soma dos dois números é par: ${sum(numberOne, numberTwo)}.`)
    break;
  default:
    alert(`A soma dos dois números é impar: ${sum(numberOne, numberTwo)}.`)
}

if (numberOne == numberTwo) {
  alert(`Os números inseridos são iguais.`)
}else{
  alert(`Os números inseridos são diferente`)
}