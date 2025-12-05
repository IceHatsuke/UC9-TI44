const input = require("../input");

(async () => {
    console.log("Digite uma frase contendo a palavra startup");
    let palavra = await input();
    console.log(`${palavra}`.replace("startup", "empresa"));
})()