//Aula de laços de repetição

let contador = 0
let continuarLoop = true

while(continuarLoop == true)
{
    contador++ //Aumenta o valor da variavel em exatamente 1
    //console.log("Olá boa noite. Repetiu "+contador+" vezes")

    if(contador == 1000000)
    {
        console.log("Aeee passou de um MILHÃO")
        continuarLoop = false
        //break
    } 
}