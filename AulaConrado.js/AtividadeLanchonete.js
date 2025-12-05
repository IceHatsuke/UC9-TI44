const input = require("../input");

(async() => {
    

    console.log("Bem vindo! Insira o preço para os ingredientes")
    console.log("Insira valor para pão")
    let pao = Number (await input())
    console.log("Insira valor para salsicha")
    let salsicha = Number (await input())
    console.log("Insira valor para bacon")
    let bacon = Number (await input())
    console.log("Insira valor para purê de batata")
    let pure = Number (await input())
    console.log("Insira valor para salada")
    let salada = Number (await input())
    console.log("Insira valor para batata palha")
    let palha = Number (await input())

    console.log("Escolha entre as quatro opções")
    let opcoes = await input()
    console.log("Insira a % de lucro")
    let lucro = await input() /100

    if(opcoes == "1")
    {
        console.log(`O valor do HotDog Simples é: R$ ${pao + palha + salsicha + pure}, o valor de lucro é de: ${(pao + palha + salsicha + pure) * lucro}, o valor final é: ${pao + palha + salsicha + pure + (pao + palha + salsicha + pure) * lucro}`)
    }

    if(opcoes == "2")
    {
        console.log(`O valor do HotDog Salada é: R$ ${pao + palha + salsicha + salada}, o valor de lucro é de: ${(pao + palha + salsicha + salada) * lucro}`)
    }

    

    

})()