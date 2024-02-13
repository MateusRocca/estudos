/*
Elaborar um programa que simule saques em um caixa eletrônico de um banco.Ler valor solicitado por cliente até ser digitado 0. Sabendo que o caixa dispõe apenas de notas de 10, exiba após cada leitura se o saque é válido ou inválido. Ao final, listar os saques válidos e a soma dos saques. Exiba também o número de saques inválidos.
*/

const prompt = require("prompt-sync")();
console.log('Informe o valor do saque ou digite 0 para sair.');
const saques = [];

do{
    let valorDoSaque = Number(prompt('Valor do saque: '));
    if(valorDoSaque == 0){
        break;
    }
    saques.push(valorDoSaque);

    if(valorDoSaque % 10 == 0){
        console.log('Saque realizado com sucesso.');
    } else {
        console.log('Erro...valor inválido. Por favor, insira valores múltiplos de 10.');
    }

}while(true)

//exibir se saque é válido ou inválido
const saquesValidos = saques.filter(saque => saque % 10 == 0);
for(const saque of saquesValidos){
    console.log(`${saque.toFixed(2)}`); 
}

console.log('-'.repeat(40));
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);
console.log(`Total dos saques: R$: ${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`\nN° de tentativas de Saques (saques inválidos): ${saquesInvalidos}`);
