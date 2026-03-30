# 01 Introdução a Linguagem de Programção Java Script.
Desenvolvido por Adriano Nascimento Junior e Nathan Tomaz Pacheco
DSM4/TDES M5 - 3° Ano EM
Joinville - 2026

### Introdução Java Script
O que é?
JavaScript é uma linguagem de programação criada para tornar páginas web interativas. Enquanto o HTML define a estrutura do conteúdo (títulos, parágrafos, botões) e o CSS cuida da aparência visual (cores, tamanhos, posições), o JavaScript é responsável pelo comportamento: o que acontece quando o usuário clica em algo, preenche um formulário, ou interage com a página.
Os três trabalham juntos assim:
HTML → o esqueleto da página
CSS → a aparência do esqueleto
JavaScript → os músculos que fazem o esqueleto se mover

### Para que serve? 

O JavaScript é uma linguagem de programação essencial para a web, usada principalmente para tornar páginas estáticas (HTML/CSS) em experiências interativas e dinâmicas. Ele roda diretamente no navegador do usuário (client-side), permitindo criar animações, validar formulários, carregar novos conteúdos sem atualizar a página e construir aplicações web e mobile completas.

### Como ele complementa HTML e CSS:

O JavaScript complementa o HTML e o CSS transformando páginas estáticas em experiências dinâmicas, interativas e funcionais. Enquanto o HTML define a estrutura (o "esqueleto") e o CSS define a aparência (o "estilo"), o JavaScript atua como o "cérebro" ou o comportamento da página.

### -> index.html (código JavaScript integrado ao html)

### Explicação do Index.html:
Quando o JavaScript está dentro da própria página, ele fica entre as tags <script> e </script>. É prático para exemplos rápidos, mas mistura comportamento com estrutura, o que não é ideal em projetos maiores.


# 02 JavaScript escrito dentro da própria página HTML

O JavaScript pode ser escrito diretamente no arquivo HTML, usando a tag <script>. Essa tag pode ser colocada no <head> ou no final do <body>.

Quando usar: útil para scripts pequenos, testes rápidos ou código que é muito específico para aquela única página.

Desvantagem: mistura estrutura (HTML) com comportamento (JS), deixando o código desorganizado e difícil de manter conforme o projeto cresce.

### JavaScript em arquivo separado (script.js)

A forma mais recomendada é criar um arquivo `.js` separado** e vinculá-lo ao HTML com o atributo `src` na tag `<script>`.

### Exemplos:
Integrado ao html: <index.html>
Arquivo Separado: <script.js>


# 03 Variáveis, tipos e escopo em JavaScript

### O que é uma variável?
Uma variável é um espaço na memória do computador onde você guarda um valor para usar mais tarde. Pense nela como uma caixa com um nome: você coloca algo dentro, pode ler o que está lá e pode trocar o conteúdo quando quiser.

### Como declarar uma variável em JavaScript
Declarar significa criar a variável. A estrutura é sempre: palavra-chave + nome + valor (opcional). O nome não pode começar com número, não pode ter espaços e não pode ser uma palavra reservada do JavaScript como if, for ou return.

### Diferença entre var, let e const
As três palavras-chave servem para declarar variáveis, mas têm comportamentos diferentes.
var é a forma antiga, lançada junto com o JavaScript. Ela tem escopo de função, permite redeclarar a mesma variável sem erro e tem um comportamento chamado hoisting que eleva a declaração para o topo do código silenciosamente. Tudo isso gera bugs difíceis de rastrear, por isso var deve ser evitada em código moderno.
let é a substituta moderna do var. Ela tem escopo de bloco, permite mudar o valor depois da declaração, mas não permite redeclarar a mesma variável no mesmo escopo.
const é usada para valores que não vão mudar. Assim como let, tem escopo de bloco e não permite redeclaração. A diferença é que também não permite reatribuição — uma vez definido, o valor é fixo. Vale lembrar que const com objetos e arrays não impede a modificação interna deles, apenas impede que a variável aponte para outro valor completamente diferente.

### Quando cada uma pode ser usada
A regra prática é simples: use const por padrão sempre que for declarar uma variável. Se em algum momento você precisar mudar o valor dela, troque para let. Nunca use var em projetos modernos.

### O que é escopo?
Escopo é o conjunto de lugares do código onde uma variável existe e pode ser acessada. Fora do seu escopo, a variável simplesmente não existe — tentar acessá-la gera um erro. JavaScript tem três tipos de escopo: global, de função e de bloco.

### Escopo global
Uma variável tem escopo global quando é declarada fora de qualquer função ou bloco. Ela pode ser lida e alterada em qualquer parte do código. Variáveis globais devem ser usadas com cuidado, pois qualquer parte do código pode alterá-las acidentalmente, o que dificulta a manutenção.

### Escopo de função
Uma variável declarada dentro de uma função existe apenas dentro dela. Quando a função termina, a variável deixa de existir. Tentar acessá-la de fora gera erro. Isso é útil porque mantém as variáveis isoladas, evitando que uma função interfira em outra.

### Escopo de bloco
Um bloco é qualquer trecho de código entre chaves {}, como if, for, while ou um bloco avulso. Variáveis declaradas com let ou const dentro de um bloco existem apenas dentro dele. Esse comportamento é uma das principais razões para preferir let e const ao invés de var, que ignora o escopo de bloco e pode vazar para fora de um if ou for de forma inesperada.

### Exemplos Práticos em: [script.js](script.js)

# 04 Operadores, comparações e lógica

### Operadores aritméticos
Operadores aritméticos são usados para fazer cálculos matemáticos entre valores numéricos. Os principais são: adição +, subtração -, multiplicação *, divisão /, módulo % (que retorna o resto de uma divisão) e exponenciação **.

### Operadores relacionais
Operadores relacionais comparam dois valores e sempre retornam true ou false. Os principais são: maior que >, menor que <, maior ou igual >= e menor ou igual <=.

### Operadores lógicos
Operadores lógicos combinam ou invertem condições. Os principais são: && (E — retorna true se as duas condições forem verdadeiras), || (OU — retorna true se pelo menos uma condição for verdadeira) e ! (NÃO — inverte o resultado de uma condição).

### Diferença entre == e ===
O == é o operador de igualdade com conversão de tipo, também chamado de igualdade solta. Ele compara apenas o valor, ignorando o tipo de dado — então ele converte os dois lados para o mesmo tipo antes de comparar. O === é o operador de igualdade estrita. Ele compara tanto o valor quanto o tipo, sem fazer nenhuma conversão. Se os tipos forem diferentes, o resultado já é false diretamente.

### Diferença entre != e !==
O != é o operador de diferença com conversão de tipo. Assim como o ==, ele ignora o tipo e converte os valores antes de comparar. O !== é o operador de diferença estrita — ele considera que dois valores são diferentes se o valor ou o tipo forem distintos, sem nenhuma conversão.

### Desta vez, o exemplo estará integrado de JavaScript no HTML;

<index.html>

# 05 Estruturas Condicionais

### Como usar estruturas condicionais
Estruturas condicionais permitem que o código tome decisões: executar um trecho se uma condição for verdadeira e outro trecho se for falsa. Em JavaScript, a estrutura principal é o if, que avalia uma condição e executa o bloco de código correspondente. Quando a condição do if for falsa, o else assume. Quando há mais de duas possibilidades, usa-se o else if para encadear novas condições. Existe também o switch, que é mais indicado quando se quer comparar o mesmo valor contra várias opções diferentes.

### if: 
o que é: estrutura condicional
para que serve: executar código com base em condição
como você usou no exemplo: verifiquei se é maior de idade
em qual pasta o professor pode encontrar o arquivo: atividade_dupla/condicionais

### if.. else:
o que é: condição com alternativa
para que serve: escolher entre dois caminhos
como você usou no exemplo: diferenciei maior e menor
em qual pasta o professor pode encontrar o arquivo: atividade_dupla/condicionais

### switch: 
o que é: estrutura de múltiplas escolhas
para que serve: selecionar entre vários casos
como você usou no exemplo: associei número ao dia
em qual pasta o professor pode encontrar o arquivo: atividade_dupla/condicionais

# 06 Estruturas de Repetição:

### Como usar estruturas de repetição
Estruturas de repetição, também chamadas de laços ou loops, permitem executar um bloco de código várias vezes sem precisar repeti-lo manualmente. Em JavaScript, o for é usado quando se sabe quantas vezes o código deve repetir. O while é usado quando a repetição depende de uma condição que pode mudar a qualquer momento — ele continua executando enquanto a condição for verdadeira. O do while é parecido com o while, com a diferença de que o bloco de código é executado pelo menos uma vez antes de a condição ser verificada.

### for:
o que é: estrutura de repetição com controle de início, condição e incremento
para que serve: repetir um bloco de código várias vezes de forma controlada
como você usou no exemplo: contei de 0 até 4 exibindo no console
em qual pasta o professor pode encontrar o arquivo: atividade_dupla/repeticao

### while:
o que é: estrutura de repetição baseada em condição
para que serve: repetir enquanto uma condição for verdadeira
como você usou no exemplo: repeti o código enquanto i era menor que 5
em qual pasta o professor pode encontrar o arquivo: atividade_dupla/repeticao

# 07 O que é uma função:
Bloco de código reutilizável que executa uma tarefa
como declarar: usando "function nome() {}"
como chamar: escrevendo "nome()"
função com parâmetro: recebe valores para usar dentro dela
função com retorno: devolve um valor com return

### Função sem parâmetro:
o que é: função sem entrada de dados
para que serve: executar uma ação simples
como você usou no exemplo: mostrei uma mensagem no console
em qual pasta o professor pode encontrar o arquivo: atividade_dupla/funcoes

### Função com parâmetro:
o que é: função que recebe dados
para que serve: personalizar a execução
como você usou no exemplo: passei um nome como argumento
em qual pasta o professor pode encontrar o arquivo: atividade_dupla/funcoes

### Função que retorna valor:
o que é: função que devolve um valor
para que serve: usar o resultado em outras partes do código
como você usou no exemplo: somei dois números e guardei o resultado
em qual pasta o professor pode encontrar o arquivo: atividade_dupla/funcoes

# 08 Manipulação de Páginas Com JavaScript
JavaScript acessa e manipula os elementos de uma página HTML por meio do DOM, que significa Document Object Model. O DOM é uma representação em forma de árvore de todos os elementos da página, e o JavaScript pode navegar por essa árvore, encontrar elementos, ler ou alterar seu conteúdo, mudar seu estilo e responder a ações do usuário. Para encontrar um elemento, o método mais comum é o document.getElementById, que busca um elemento pelo seu atributo id. Também existe o document.querySelector, que busca usando seletores CSS. Uma vez encontrado o elemento, é possível alterar seu texto com textContent, seu HTML interno com innerHTML e seu estilo com a propriedade style. Para reagir a ações do usuário, como cliques ou digitação, usa-se o addEventListener, que fica escutando um evento e executa uma função quando ele acontece.

### document:
para que serve: acessar toda a página HTML
exemplo: mostrar o objeto da página no console
print: aparece toda a estrutura do HTML no console
pasta: atividade_dupla/manipulacao

### getElementById():
para que serve: selecionar elemento pelo id
exemplo: alterar o texto de um elemento
print: texto muda na tela
pasta: atividade_dupla/manipulacao

### querySelector():
para que serve: selecionar elemento usando CSS
exemplo: pegar elemento por classe
print: conteúdo alterado
pasta: atividade_dupla/manipulacao

### .value:
para que serve: pegar valor digitado
exemplo: ler input
print: valor aparece no console
pasta: atividade_dupla/manipulacao

### .checked:
para que serve: verificar se está marcado
exemplo: checar checkbox
print: true ou false
pasta: atividade_dupla/manipulacao

### .textContent:
para que serve: alterar texto
exemplo: mudar conteúdo
print: texto atualizado
pasta: atividade_dupla/manipulacao

### .style:
para que serve: mudar estilo
exemplo: alterar cor
print: elemento com novo estilo
pasta: atividade_dupla/manipulacao

### classList:
para que serve: adicionar/remover classes
exemplo: aplicar classe CSS
print: estilo aplicado
pasta: atividade_dupla/manipulacao

### addEventListener():
para que serve: adicionar eventos
exemplo: clique em botão
print: ação acontece ao clicar
pasta: atividade_dupla/manipulacao

###  querySelectorAll():
para que serve: selecionar vários elementos
exemplo: contar itens
print: quantidade exibida
pasta: atividade_dupla/manipulacao

### checkValidity():
para que serve: validar campos
exemplo: verificar input obrigatório
print: true ou false
pasta: atividade_dupla/manipulacao

### DOMContentLoaded:
para que serve: executar após carregar página
exemplo: rodar código no carregamento
print: mensagem no console
pasta: atividade_dupla/manipulacao

### createElement():
para que serve: criar elementos HTML
exemplo: criar parágrafo
print: novo elemento aparece
pasta: atividade_dupla/manipulacao

### appendChild():
para que serve: adicionar elemento na página
exemplo: inserir dentro de outro elemento
print: elemento aparece dentro do pai
pasta: atividade_dupla/manipulacao

### remove():
para que serve: remover elemento
exemplo: apagar da tela
print: elemento desaparece
pasta: atividade_dupla/manipulacao