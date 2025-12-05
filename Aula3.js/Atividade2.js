const input = require("../input");

(async() => {
    console.log("Você tem a chave?")
    let chave = await input();
    
    if(chave.toLowerCase() == "sim" || chave == "senac123")
    {
        console.log("bem vindo")
    }
    
})()