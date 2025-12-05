//console.log("Olá Mundo");

var nome = "Gabi";
// Estou fazendo uma concatenação
//console.log("Olá "+ nome);

var idade = 20;
//Vou fazer uma interpolação
//console.log(`Olá ${nome}, sua idade ${idade}.`);

//Camelcase
var cestaCafe = []; // Estou declarendo um vetor
cestaCafe[0] = "café"; // Uma atribuição
cestaCafe[1] = "ovo";

var cestaCafe = ["café", "ovo"];

cestaCafe.push ("bacon");
cestaCafe.push ("pão");

//console.log(cestaCafe);


var informacao = ["Gabi", "20 anos", "991531415"];

//console.log(informacao);

var usuario = {nome: "Gabi", idade: 20, telefone: "991531415"};
//console.log(usuario.idade);


var listaTelefone = [];

listaTelefone.push({nome: "Bruno", telefone: "12345678910", endereco: "rua fulano de tal"});

listaTelefone.push({nome: "Carlos", telefone: "10987654321", endereco: "rua almeida"});

//console.log(listaTelefone);


var listaProdutos = [];

listaProdutos.push({id: 1, nome: "suco", valor: 10});
listaProdutos.push({id: 2, nome: "feijão", valor: 20});

var soma = listaProdutos[0].valor + listaProdutos[1].valor;
//console.log("A soma dos produtos é " +soma);

var listaNotas = [];

listaNotas.push({nome: "Pedro", nota: 8});
listaNotas.push({nome: "Ana", nota: 5});
listaNotas.push({nome: "Paula", nota: 10});

var soma = listaNotas[0].nota + listaNotas[1].nota + listaNotas[2].nota;
var divisao = soma/3;

console.log("A média é " +divisao);

