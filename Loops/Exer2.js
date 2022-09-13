// Ler 10 números e informar quantos são pares e quais são ímpares: (utilizando o for)


var pares = 0,
    impares = 0;

for(let i = 1; i <= 10; i++){

    let num = Number(prompt("Coloque um número: "))

    if( num % 2 == 0){
        pares++
    }else{
        impares++
    }
}
alert(
    `Total de pares: ${pares}
     Total de ímpares: ${impares}   
    `
)