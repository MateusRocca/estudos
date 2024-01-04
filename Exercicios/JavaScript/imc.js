// Escreva a função imc que calcula o índice de massa corporal (imc = peso/altura2).

// se IMC <= 18,5 retornar "Abaixo do peso"

// se IMC <= 25,0 retornar "Normal"

// se IMC <= 30,0 retornar "Excesso de peso"

// se IMC> 30 retornar "Obeso"

function bmi(weight, height) {
    const imc = weight / (Math.pow(height, 2));
    if(imc <= 18.5){
        return "Abaixo do peso";
    } else if (imc <= 25){
        return "Normal";
    } else if(imc <= 30){
        return "Excesso de peso";
    } else {
        return "Obeso";
    }
}

const peso = 62;
const altura = 1.80;
const resultado = bmi(peso, altura);
console.log(resultado);