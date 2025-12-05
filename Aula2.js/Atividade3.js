const input = require("../input");

(async () => {
    console.log("Digite um numero");
    let primeiro = await input();
    console.log("Digite outro numero");
    let segundo = await input();
    let soma = Number (primeiro) + Number (segundo);
    console.log("A soma dos números é "+ soma);
})();