const input = require("../input");

(async() => {
    console.log("Aceita um presente misterioso?")
    let presente = await input()

    if(presente == "sim")
    {
        console.log("Você ganhou um abraço!")
    }
    else if(presente == "não")
    {
        console.log("Você ganhou 50 reais!")
    }
})()