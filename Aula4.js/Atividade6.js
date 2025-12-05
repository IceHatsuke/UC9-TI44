const input = require("../input");

(async ()=> {
    console.log(`Qual o valor da sua compra?`)
    var compra = Number(await input())
    console.log(`Qual a sua forma de pagamento? \n 1- Dinheiro(10% de desconto) \n 2- Débito(5% de desconto) \n 3- Crédito(sem desconto\n 4- Pix(*% de desconto)`)
    let pagamento = Number(await input())


    switch (true){

    case pagamento == 1:
        let desconto = 10/100 * coiso
        console.log(`Forma escolhida: Dinheiro, valor total: ${compra-desconto} R$`)
    break

    case pagamento == 2:
        let desconto1 = 5/100 * coiso
        console.log(`Forma escolhida: Débito, valor total: ${compra-desconto1} R$`)
    break

    case pagamento == 3:
        console.log(`Forma escolhida: Crédito, valor total: ${compra} R$`)       
    break

    case pagamento == 4:
        let desconto2 = 8/100 * coiso
        console.log(`Forma escolhida: Pix, valor total: ${compra-desconto2} R$`)
    break

    default:
        console.log(`Forma de pagamento inválida`)
}})()