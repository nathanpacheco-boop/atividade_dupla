## JavaScript escrito dentro da própria página HTML

O JavaScript pode ser escrito diretamente no arquivo HTML, usando a tag <script>. Essa tag pode ser colocada no <head> ou no final do <body>.

Quando usar: útil para scripts pequenos, testes rápidos ou código que é muito específico para aquela única página.

Desvantagem: mistura estrutura (HTML) com comportamento (JS), deixando o código desorganizado e difícil de manter conforme o projeto cresce.

# JavaScript em arquivo separado (script.js)

A forma mais recomendada é criar um arquivo `.js` separado** e vinculá-lo ao HTML com o atributo `src` na tag `<script>`.

# Exemplos:
Integrado ao html: <index.html>
Arquivo Separado: <script.js>
