//ler nome e nota de 'n' alunos até digitar 'Fim' no nome. 
//Após, verificar e exibir a maior nota da turma. 
//Se a maior nota for superior ou igual a 7, exibir os alunos que a obtiveram. Caso contrário exiba a mensagem 'Não há alunos em destaque na turma.


const prompt = require("prompt-sync")();
console.log('Informe os alunos. Após, digite "Fim" no nome para sair.');
const alunos = []; //declaração do vetor

do{
    const nome = prompt('Nome: ');
    if(nome == 'Fim'){
        break; //sai da repetição
    } 
    const nota = Number(prompt('Nota: '));
    alunos.push({nome, nota});
    console.log('Ok. Aluno(a) cadastrado(a)...');

}while(true);

const maior = alunos.reduce((a,b) => Math.max(a, b.nota), 0);
console.log(`Maior nota obtida: ${maior}`);


if(maior >= 7) {
    console.log('\n Alunos em destaque que obtiveram nota igual ou maior que 7.');
    const destaques = alunos.filter(aluno => aluno.nota >= 7);
    for(const destaque of destaques){
        //for...of percorre os alunos em destaque
        console.log(` - ${destaque.nome} - Nota: ${destaque.nota}`);
    } 
} else {
    console.log('Não há alunos em destaque na turma.');
}


