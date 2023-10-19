fetch("http://localhost:8080/")
.then(resposta => resposta.json())
.then(prod => listarProdutos(prod))