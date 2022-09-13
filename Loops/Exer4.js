var i = 0;
var repeat
var idade;
var sexo;
var sexoMasc = 0;
var sexoFem = 0;
var outro;
var humor;
var humorCalmo = 0;
var humorNervoso = 0;
var humorAgressivo = 0;
var mulherNervosa= 0;
var homensAgressivos = 0;
var outrosCalmos = 0;
var cacurasNervosas = 0;
var twinksNovinhos = 0;


while (i <= 150){
    var repeat = Number(prompt("Deseja parar? 0 - [Sim] 1 - [Não]"))
    if (repeat == 0){
        break
    }
    var idade = Number(prompt("Digite sua idade...:"))
    var sexo = Number(prompt("Digite o seu sexo 1-(F) 2-(M) 3-(Other)...:"))
    if (sexo == 1){
        sexoFem++
    } else if (sexo == 2){
        sexoMasc++
    } else if (sexo == 3){
        outro++
    }
    var humor = Number(prompt("Digite como se sente: 1-(Calmo) 2-(Nervoso) 3-(Agressivo)"))
    if (humor == 1){
        humorCalmo ++
    } else if (humor == 2){
        humorNervoso ++
    } else if (humor == 3){
        humorAgressivo ++
    }
    alert("processando dados...")
    if (sexo == 2 && humor == 2){
        mulherNervosa ++
    }
    else if (sexo == 2 && humor == 3){
        homensAgressivos ++
    }
    else if (sexo == 3 && humor == 1){
        outrosCalmos++
    }
    else if (humor == 2 && idade >=40){
        cacurasNervosas ++
    }
    else if (humor == 1 && idade <= 18){
        twinksNovinhos ++
    }
    alert(`Dados...: Pessoas calmas...: ${humorCalmo}`)
    alert(`Dados...: Mulheres Nervosas...: ${mulherNervosa}`)
    alert(`Dados...: Homens Agressivos...: ${homensAgressivos}`)
    alert(`Dados...: Outros Calmos: ${outrosCalmos}`)
    alert(`Dados...: Pessoas novas e calmas...: ${twinksNovinhos}`)
    alert(`Dados...: Pessoas seniors Nervosas...: ${cacurasNervosas}`);
}