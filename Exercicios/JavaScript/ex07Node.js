/*
Elaborar um programa que leia nome e idade de 'n' lientes de um banco(até ser digitado 'Fim' no nome). Após, classifique e exiba os clientes em 2 grupos: preferêncial (à partir de 60 anos) e Fila normal (até 59 anos). Informe a ordem de atendimento em cada grupo de acordo com a chegada dos clientes.
*/

const prompt = require("prompt-sync")();
console.log('Informe o nome do cliente. Se desejar sair, digite "Fim" no nome para sair.');
const clientes = []; //declaração do vetor

do{
    //1°: lendo nome e idade dos clientes.
    const nome = prompt('Nome: ');
    if(nome == 'Fim'){
        break;
    }
    const idade = Number(prompt('Informe a idade: '));
    clientes.push({nome, idade});

}while(true)


//classificando e exibindo os grupos: preferêncial (à partir de 60 anos) e Fila normal (até 59 anos)

console.log('\n Fila preferêncial:\n ');
const filaPref = clientes.filter(cliente => cliente.idade >= 60)
filaPref.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
})

console.log('\n Fila normal:\n ');
const filaNormal = clientes.filter(cliente => cliente.idade < 60);
filaNormal.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
})


