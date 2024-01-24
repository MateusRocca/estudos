// Escreva uma função que receba um array de números e retorne a soma dos números. Os números podem ser negativos ou não inteiros. Se a matriz não contiver nenhum número, você deverá retornar 0.
function sum (numbers) {
    let soma = 0;
    if(numbers.length === 0){
        return 0;
    }

    numbers.forEach(num => soma += num);
    return soma;
};

const numeros = [1, 5.2, 4, 0, -1];
const resultado = sum(numeros);
console.log(resultado);