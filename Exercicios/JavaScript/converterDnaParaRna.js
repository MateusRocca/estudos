// Ácido desoxirribonucléico, DNA é a principal molécula de armazenamento de informações em sistemas biológicos. É composto por quatro bases de ácidos nucléicos Guanina ('G'), Citosina ('C'), Adenina ('A') e Timina (' ;T').

// O ácido ribonucleico, RNA, é a principal molécula mensageira nas células. O RNA difere ligeiramente do DNA em sua estrutura química e não contém timina. No RNA a Timina é substituída por outro ácido nucleico Uracila ('U').

// Crie uma função que traduza uma determinada sequência de DNA em RNA.

// Por exemplo:

// "GCAT"  =>  "GCAU"
// A string de entrada pode ter comprimento arbitrário - em particular, pode estar vazia. É garantido que todas as entradas sejam válidas, ou seja, cada string de entrada consistirá apenas em 'G', 'C', 'A' e/ou < /span>'T'.

function DNAtoRNA(dna) {
    const converteRna = dna.replace(/T/g, 'U');
    return converteRna;
}
const dna = 'GCAT';
const retorno = DNAtoRNA(dna);
console.log(retorno);