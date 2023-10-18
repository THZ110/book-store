document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  console.log("query");
  fetch("http://localhost:8080/", {
    method: "POST",
    body: formData
  })
    .then(resposta => resposta.json())
    .then(livro => inserirLivro(livro))
    .catch(erro => console.log("Erro ao adicionar livro: " + erro));
})

