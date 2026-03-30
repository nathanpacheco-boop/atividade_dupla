# Variáveis, tipos e escopo em JavaScript

## O que é uma variável?
Uma variável é um espaço na memória do computador onde você guarda um valor para usar mais tarde. Pense nela como uma caixa com um nome: você coloca algo dentro, pode ler o que está lá e pode trocar o conteúdo quando quiser.

## Como declarar uma variável em JavaScript
Declarar significa criar a variável. A estrutura é sempre: palavra-chave + nome + valor (opcional). O nome não pode começar com número, não pode ter espaços e não pode ser uma palavra reservada do JavaScript como if, for ou return.

## Diferença entre var, let e const
As três palavras-chave servem para declarar variáveis, mas têm comportamentos diferentes.
var é a forma antiga, lançada junto com o JavaScript. Ela tem escopo de função, permite redeclarar a mesma variável sem erro e tem um comportamento chamado hoisting que eleva a declaração para o topo do código silenciosamente. Tudo isso gera bugs difíceis de rastrear, por isso var deve ser evitada em código moderno.
let é a substituta moderna do var. Ela tem escopo de bloco, permite mudar o valor depois da declaração, mas não permite redeclarar a mesma variável no mesmo escopo.
const é usada para valores que não vão mudar. Assim como let, tem escopo de bloco e não permite redeclaração. A diferença é que também não permite reatribuição — uma vez definido, o valor é fixo. Vale lembrar que const com objetos e arrays não impede a modificação interna deles, apenas impede que a variável aponte para outro valor completamente diferente.

## Quando cada uma pode ser usada
A regra prática é simples: use const por padrão sempre que for declarar uma variável. Se em algum momento você precisar mudar o valor dela, troque para let. Nunca use var em projetos modernos.

## O que é escopo?
Escopo é o conjunto de lugares do código onde uma variável existe e pode ser acessada. Fora do seu escopo, a variável simplesmente não existe — tentar acessá-la gera um erro. JavaScript tem três tipos de escopo: global, de função e de bloco.

## Escopo global
Uma variável tem escopo global quando é declarada fora de qualquer função ou bloco. Ela pode ser lida e alterada em qualquer parte do código. Variáveis globais devem ser usadas com cuidado, pois qualquer parte do código pode alterá-las acidentalmente, o que dificulta a manutenção.

## Escopo de função
Uma variável declarada dentro de uma função existe apenas dentro dela. Quando a função termina, a variável deixa de existir. Tentar acessá-la de fora gera erro. Isso é útil porque mantém as variáveis isoladas, evitando que uma função interfira em outra.

## Escopo de bloco
Um bloco é qualquer trecho de código entre chaves {}, como if, for, while ou um bloco avulso. Variáveis declaradas com let ou const dentro de um bloco existem apenas dentro dele. Esse comportamento é uma das principais razões para preferir let e const ao invés de var, que ignora o escopo de bloco e pode vazar para fora de um if ou for de forma inesperada.

## Exemplos Práticos em: [script.js](script.js)