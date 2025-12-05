const input = require("../input");

(async () => {
    console.log(`Qual combo você deseja? \n 1: Só lanche \n 2- Lanche e batata \n 3- Lanche, batata e refrigerante:`)
    let combo = Number(await input())

switch (true){

    case combo == 3:
        console.log(`Refrigerante`)  
    case combo == 2:
        console.log(`Batata`)
    case combo == 1:
        console.log(`Lanche`)   
    default:
        console.log(`Combo inválido`)
    
}
})()