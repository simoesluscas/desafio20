var variavel1 = Lucas Simoes;
var variavel2 = 5;
var variavel3 = 10;
var variavel4 = variavel2+variavel3
var variavel5 = variavel2*variavel3

alert(variavel4) 

console.log(variavel1,variavel5);

function multiplica(num1, num2) {
    let result = num1 * num2;
    return result;
}


multiplica(4, 7);
multiplica(20, 20);
multiplica(0.5, 3);

function subtrair(num1, num2) {
    if(num1 < num2)
    return "não foi possível subtrair"
 }else{
    return num1-num2
 }

 function divisao(num1, num2) {
    if(num2 < 0)
    return "não foi possível dividir"
 }else{
    return num1/num2
 }

 console.log (subtrair (2,1))
 console.log (dividir (2,1))
