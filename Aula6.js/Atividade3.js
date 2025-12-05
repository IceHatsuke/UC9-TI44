
function soma(n1,n2=1)
{
    return n1 + n2
}

function subtracao(n1, n2=1)
{
    return n1 - n2
}

function divisao(n1,n2=1)
{
    return n1 / n2
}

function multiplicacao(n1,n2=1)
{
    return n1 * n2
}

const input = require('../input');

(async() => {
    console.log(`O que você deseja fazer?
       1 - Soma
       2 - Subtração
       3 - Divisão
       4 - Multiplicação
    `);
    
    let opcao = await input()
    let funcao

    switch(opcao)
    {
        case `1`: funcao = soma; break;
        case `2`: funcao = subtracao; break;
        case `3`: funcao = divisao; break;
        case `4`: funcao = multiplicacao; break;
    }

    if(Number(opcao)>4) return
    {
        let a = Number (await input())
        let b = Number (await input())
        
        let resultado = funcao(a,b)

        console.log("O resultado é: " + resultado)
    }
})()