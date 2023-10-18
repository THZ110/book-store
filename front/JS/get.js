document.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:8080/")
    .then(resposta => resposta.json())
    .then(livros => preencheTabela(livros))
})