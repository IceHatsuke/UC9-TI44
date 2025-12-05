const input = require("../input");
const { valEmail } = require("./Atividade4");
const { valTelefone } = require("./Atividade4");

let agenda = [];

(async()=>{
    console.log("Digite seu email")
    let email = await input()
    console.log("Digite seu número de telefone")
    let telefone = await input()

    if(valEmail(email) && valTelefone(telefone))
    {
        console.log("Muito boa agenda")
    }
    else
    {
        console.log("Agenda ruim")
    }

    agenda.push({Email: email, Telefone: telefone})

    console.log("Agenda atualizada com sucesso!")
    console.log(agenda)

})()
