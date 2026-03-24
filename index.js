let vitorias = 50
let derrotas = 5
let nivel = ""
function medidorDeRank(vitorias,derrotas){
    let calculo = vitorias - derrotas
    return calculo
}
let medidorDeVitorias= medidorDeRank(vitorias, derrotas)
if(medidorDeVitorias <= 10){
     nivel = ("Ferro")
}else if(medidorDeVitorias >= 11 && medidorDeVitorias <= 20){
     nivel = ("Bronze")
}else if(medidorDeVitorias >= 21 && medidorDeVitorias <= 50){
     nivel = ("Prata")
}else if (medidorDeVitorias >= 51 && medidorDeVitorias <= 80){
     nivel = ("Ouro")
}else if (medidorDeVitorias >= 81 && medidorDeVitorias <= 90){
     nivel = ("Diamante")
}else if (medidorDeVitorias >= 91 && medidorDeVitorias <= 100){
     nivel = ("Lendário")
}else if (medidorDeVitorias >= 101){
     nivel = ("Imortal")
}
console.log(`O Herói tem ${medidorDeVitorias} vitorias e está no nivel ${nivel}`)