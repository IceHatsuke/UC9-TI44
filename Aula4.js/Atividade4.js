const input = require("../input");

(async()=> {
    console.log("Digite o valor total da compra")
    let compra = Number(await input())
    

    switch(true)
    {
        case compra >= 100:
        compra1 = 20/100 * compra    
            console.log("Desconto de 20% aplicado")
            break;
        case compra >= 50 && compra < 100:
        compra2 = 10/100 * compra
            console.log("Desconto de 10% aplicado")
        break;
        case compra >= 20 && compra < 50:
        compra3 = 5/100 * compra
            console.log("Desconto de 5% aplicado")
        break;
        default:
            console.log("Sem desconto valor muito baixo")
    }
})()