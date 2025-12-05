const input = require("../input");

(async() =>{
    console.log("Digite uma frase");
    let frase = await input();
    console.log(`A sua frase tem ${frase.length} caracteres`);
})()