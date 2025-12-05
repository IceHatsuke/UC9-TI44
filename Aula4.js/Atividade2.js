const input = require("../input");

(async() => {
    console.log("Digite o codigo do lanche desejado \n 100- X-Salada(R$12) \n 101- X-Burguer(R$10) \n 102- Cachorro-Quente(R$8.50) \n 103- Suco(R$6) \n 104- Refrigerante(R$5)")
    let lanche = await input()
    console.log("Digite a quantidade")
    let quantidade = await input()

    switch (lanche)
    {
        case "100":
            console.log(`Você pediu ${quantidade} de X-Salada, total ficou ${12 * quantidade}`)
            break;
        case "101":
            console.log(`Você pediu ${quantidade} X-Burguer, total ficou ${10 * quantidade}`)
            break;
        case "102":
            console.log(`Você pediu ${quantidade} Cachorro-Quente, total ficou ${8,50 * quantidade}`)
            break;
        case "103":
            console.log(`Você pediu ${quantidade} Suco, total ficou ${6 * quantidade}`)
            break;
        case "104":
            console.log(`Você pediu ${quantidade} Refrigerante, total ficou ${5 * quantidade}`)
            break;
        default:
            console.log("Código inválido")

    }

})()