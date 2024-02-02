//O objetivo é criar uma função que recebe um vetor de números e retorna a soma de todos os elementos ímpares presentes no vetor

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let soma = 0;

for (let i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] % 2 !== 0) {
        soma += listaDeNumeros[i];
    }
}

console.log(soma);
