// Você consegue encontrar a agulha no palheiro?

// Escreva uma função findNeedle() que receba um array cheio de lixo, mas contendo um "needle"

// Depois que sua função encontrar a agulha ela deverá retornar uma mensagem (como uma string) que diz:

// "found the needle at position " mais index encontrou a agulha, então:

// Exemplo (Entrada --> Saída)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 6" 


function findNeedle(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "needle") {
            return `found the needle at position ${i}`;
        }
    }

    // Retorna a mensagem indicando que a agulha não foi encontrada
    return "needle not found in the haystack";
}

const varios = ["Bota", "needle", "Camisa"];
const outros = ["Barco", "dois", 10, 9];

const res1 = findNeedle(varios);
const res2 = findNeedle(outros);
console.log(res1);
console.log(res2);

