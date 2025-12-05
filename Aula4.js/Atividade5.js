const input = require("../input");

(async()=> {
    console.log("Digite quantos pontos tem")
    let pontos = Number(await input())

    switch(true)
    {
        case pontos < 100:
            console.log("Cliente iniciante: Direito a desconto de 5% em lojas")
            break;
        case pontos >= 100 && pontos < 300:
            console.log("Cliente Bronze: Direito a desconto de 10% em lojas")
            break;
        case pontos >= 300 && pontos < 700:
            console.log("Cliente Prata: Direito a sobremesa grátis")
            break;
        case pontos >= 700:
            console.log("Cliente Ouro: Direito a um combo grátis por mês")
        default:
            console.log("Valor insuficiente de pontos")
    }
})()