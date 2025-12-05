// Estou fazendo uma importação
const input = require("../input");

(async () => {
    console.log("Qual a sua idade?");
    let idade = await input();
    console.log("A sua idade é "+ idade);
})();