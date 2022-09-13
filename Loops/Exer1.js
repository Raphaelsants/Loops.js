// Informar todos os números entre 1000 e 1999 que divididos por 11 obtemos o resto 5: (utilizando o for)

var resto = 0
var i = 0

for (i = 1000; i <= 1999; i++) {
    if(i % 11 == 5){
        console.log(i)
    }
} 

