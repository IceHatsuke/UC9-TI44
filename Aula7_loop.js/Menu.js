let prompt = require("prompt-sync")()

let resposta = 8
let numero = 9
let tentativas = 3



while(numero != resposta && tentativas > 0)
{
    numero = Number( prompt("Digite um número: "))

    if(numero == resposta)
    {
        console.log("Acertou miseravi!")
        break
    }
    else
    {
        console.log(`Errou feio, restam ${tentativas - 1}`)
    }
    tentativas--
}

