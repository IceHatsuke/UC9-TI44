const input = require("../input");

(async() => {
    console.log("Digite um número")
    let numero = Number (await input());

    if(numero %2 == 0)
    {
        console.log("Seu número é par")
    }
    else
    {
        console.log("Seu número é impar")
    }
    
    
    
})()