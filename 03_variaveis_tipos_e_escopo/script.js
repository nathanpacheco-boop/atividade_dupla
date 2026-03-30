// Declarando variáveis:

let nome = "Ana";
const idade = 20;
let ativo = true;

// Exemplo com var

var cidade = "Curitiba";
console.log(cidade);

// Exemplo com let
let pontos = 10;
pontos = 20;
console.log(pontos);

// Exemplo com const
const pais = "Brasil";
console.log(pais); 

// var, let e const:

var x = 1;
var x = 2; 


let y = 1;
y = 2;    
let y1 = 3;


const z = 10;
z = 20;

// Variável acessível fora do bloco
if (true) {
  var nome1 = "Ana";
}
console.log(nome);

// Variável inacessível fora do bloco
if (true) {
  let nome = "Ana";
}
console.log(nome); 

// Escopo global:

let mensagem = "olá"; 

function exibir() {
  console.log(mensagem); 
}

// Escopo de função:

function calcular() {
  let resultado = 42;
}

console.log(resultado);

// Escopo de bloco:

if (true) {
  let x = 10;
}
console.log(x);

if (true) {
  var y2 = 10;
}
console.log(y);

// O que acontece ao usar fora do escopo
function saudacao() {
  let mensagem = "olá"; 
}

saudacao();
console.log(mensagem); 