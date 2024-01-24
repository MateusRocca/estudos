// Escreva uma função chamada setAlarm/set_alarm/set-alarm/setalarm (dependendo na linguagem) que recebe dois parâmetros. O primeiro parâmetro, employed, é verdadeiro sempre que você está empregado e o segundo parâmetro, vacation é verdadeiro sempre que você está de férias.

// A função deve retornar verdadeiro se você estiver empregado e não estiver de férias (porque essas são as circunstâncias sob as quais você precisa definir um alarme). Caso contrário, deverá retornar falso. Exemplos:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false


function setAlarm (employed, vacation){
    return employed && !vacation;
}


console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));