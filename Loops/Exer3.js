// Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. Total de pessoas com mais de 50 anos. O programa termina quando a idade for igual a -99 (utilizando o while)

var idade = 0
var idadeJovem = 0
var idadeSenior = 0

while (idade > -99){
    var idade = Number(prompt("Digite sua idade...:"))
    if (idade > 0 && idade <=21){
        idadeJovem ++
    }
    else if (idade >= 50){
        idadeSenior ++
    }
}
alert("Encerrando.")
alert(`Idades jovens : ${idadeJovem}`)
alert(`Idades Seniors: ${idadeSenior}`)