const input = require("../input");

(async() => {
    console.log(`Escolha no cardapio: \n 1- X-Salada \n 2- X-Burguer \n 3- Misto Quente \n 4- Suco Natural \n 5- Refrigerante`)
    let lanche = await input()

    switch(true)
{
    case lanche == 1:
        console.log("Você escolheu X-Salada")
        break
    case lanche == 2:
        console.log("Você escolheu X-Burguer")
        break
    case lanche == 3:
        console.log("Você escolheu Misto Quente")
        break
    case lanche == 4:
        console.log("Você escolheu Suco Natural")
        break
    case lanche == 5:
        console.log("Você escolheu Refrigerante")
        break
    default:
        console.log("Opção invalida, tente novamente")
}})()

