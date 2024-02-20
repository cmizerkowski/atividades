var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("Digite o segundo número:");
var numero3 = prompt("Digite o terceiro número:");


numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);


if (numero1 > numero2 && numero1 > numero3) {
    alert("O maior número é: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    alert("O maior número é: " + numero2);
} else {
    alert("O maior número é: " + numero3);
}