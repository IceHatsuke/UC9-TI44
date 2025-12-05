const input = require("../input");

(async() =>{
    console.log("Escolha um combo: P, M ou G")
    let combo = await input()

    let tamanho = combo.toUpperCase()

    switch(tamanho)
    {
        case "P":
            console.log("Combo pequeno escolhido (R$15)")
            break;
        case "M":
            console.log("Combo médio escolhido (R$20)")
            break;
        case "G":
            console.log("Combo grande escolhido (R$25)")
            break;
        default:
            console.log("Tamanho inválido")
    }
})()