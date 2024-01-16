const frm = document.querySelector('form');
const respNome = document.querySelector('span');
const respLista = document.querySelector('pre');

const pacientes = []; //Vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita envio do formulário

    const nome = frm.inPaciente.value; //Obtém o nome
    pacientes.push(nome); //Adiciona o nome no final do vetor
    let lista = ''; //string para concatenar pacientes

    for(let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respLista.innerHTML = lista;
    frm.inPaciente.value = '';
    frm.inPaciente.focus(); 

})

//Adiciona ouvinte para o botão de urgência.
frm.btUrgencia.addEventListener("click", () => {
    if(!frm.checkValidity()) {
        //Verifica se o campo de inserir o nome está preenchido, se não, indica para preencher com o nome do paciente a ser atendido com urgência.
        alert('Informe o nome do paciente a ser atendido em caratér de urgência');
        frm.inPaciente.focus();
        return; //retorna ao form
    }

    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);
    let lista = '';

    pacientes.forEach((paciente, i) => (lista += `${i +1}. ${paciente}\n`));
    respLista.innerHTML = lista;
    frm.inPaciente.value = '';
    frm.inPaciente.focus();
})

//Ouvinte para botão atender
frm.btAtender.addEventListener("click", () => {
    if(pacientes.length == 0){
        alert('Não há pacientes na lista de espera');
        frm.inPaciente.focus();
        return;
    }

    const atender = pacientes.shift(); //remove do inicio da fila e obtém o nome que vai ser salvo nessa variável.
    respNome.innerHTML = atender;
    let lista = '';

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respLista.innerHTML = lista;
})