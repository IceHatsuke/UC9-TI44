const input = require("../input");

(async() =>{

    let saldo = 300

    console.log("Bem vindo ao Gabi's Bank")
    console.log("Digite 1 para depositar ou 2 para sacar: ")
    let resposta = await input()

    console.log("Digite o valor do deposito: ")
        let valor = Number (await input())

    if( resposta == "1" )
    {
        if(valor < 1){
            console.log("Não é possivel sacar")
        }
        else{
            saldo += valor
            console.log("Depósito realizado com sucesso!")
        }
    }
    else if( resposta == "2")
    {
        if(valor > saldo){
            console.log("Saldo insuficiente")
        }
        else{    
        saldo -= valor
        }
    }
    
    
    console.log(`Valor atual na conta: R$ ${saldo}`)

})()