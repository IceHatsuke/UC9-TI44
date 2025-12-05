
function valEmail(email)
{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

function valTelefone(telefone)
{
    telefone = telefone.replace(/\D/g, "")
    return telefone.length === 10 || telefone.length === 11;
}

module.exports = {valEmail,valTelefone}




