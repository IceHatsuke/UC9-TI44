const input = require("../input");
(async() => {
    console.log("Coloque seu saldo")
    let saldo = await input()
    console.log("Digite um código")
    let codigo = await input()

    if(saldo >= 5 && codigo == 42)
    {
        console.log("Aqui esta sua coca cola")
    }
    else
    {
        console.log("saldo insuficiente, vá embora!")
    }
})()