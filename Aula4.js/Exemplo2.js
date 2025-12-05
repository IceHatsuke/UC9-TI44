function tigrinho()
{
    return Math.floor(Math.random()* 10)
}

let sorteado = tigrinho()

switch (true)
{
    case sorteado > 3:
        console.log("Parabens ganhou da Virginia")
        
    case sorteado == 2:
        console.log("Foi quase")
        
    default:
        console.log("Perdeu, otário")
}