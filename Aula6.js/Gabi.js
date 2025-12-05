function random(inferior=0, superior=1, tipo = `Float`)
{
    if(superior < inferior)
    {
        console.error("Numero superior deve ser maior que o numero")
        return
    }

    switch(tipo)
    {
        case `Float`: return Math.random()*(superior + 1 - inferior) + (inferior)
        case `Int`: return Math.floor (Math.random()* (superior + 1 - inferior)) + (inferior)
    }
}

function validaCPF()
{
    cpf = cpf.replace(/\D/g, "");

    //Verifica se tem 11 dígitos
    if (cpf.length !== 11) return false;

    //Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    //Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let digito1 = 11 - (soma % 11);
    digito1 = digito1 > 9 ? 0 : digito1;

    //Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let digito2 = 11 - (soma % 11);
    digito2 = digito2 > 9 ? 0 : digito2;

    // Verifica se os dígitos calculados batem com os do CPF
    return digito1 == cpf[9] && digito2 == cpf[10];
}

module.exports = {random, validaCPF}