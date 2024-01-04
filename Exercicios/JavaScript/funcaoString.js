// Escreva uma função que aceite um número inteiro n e uma string s como parâmetros e retorne uma string de s repetido exatamente n vezes.
function repeatStr (n, s) {
    const resultado = s.repeat(n);
    return resultado;
}

const num = 5;
const str = "Mateus";

const resultadoFinal = repeatStr(num, str);
console.log(resultadoFinal);