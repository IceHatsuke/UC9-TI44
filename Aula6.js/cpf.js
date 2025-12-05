const input = require("../input");
const { validaCPF } = require('./Gabi');

(async() => {
    console.log("Insira seu cpf")
    let cpf = await input()

    if(validaCPF(cpf))
    {
        console.log("CPF valido")
    }
    else
    {
        console.log("CPF invalido")
    }
})()

