// Alex acabou de ganhar um bambolê novo, ele adora, mas fica desanimado porque seu irmão mais novo é melhor que ele

// Escreva um programa onde Alex possa inserir (n) quantas vezes o arco dá voltas e ele retornará uma mensagem encorajadora :)

// Se Alex conseguir 10 ou mais aros, retorne a string "Ótimo, agora vá para os truques".
// Se ele não acertar 10 aros, retorne a string "Continue até conseguir".

function hoopCount (n) {
    if (n >= 10) {
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}