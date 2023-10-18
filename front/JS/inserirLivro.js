function inserirLivro(livro) {
    var linha = document.createElement("tr");
    var colId = document.createElement("td");
    var colTitulo = document.createElement("td");
    var colAutor = document.createElement("td");
    var colIsbn = document.createElement("td");
    var colPreco = document.createElement("td");
    var colImagem = document.createElement("td");
    var colSelecionar = document.createElement("td");
  
    colId.classList.add("col-id");
    colId.innerText = livro.id;
    linha.appendChild(colId);
  
    colTitulo.classList.add("col-titulo");
    colTitulo.innerText = livro.titulo;
    linha.appendChild(colTitulo);
  
    colAutor.classList.add("col-autor");
    colAutor.innerText = livro.autor;
    linha.appendChild(colAutor);
  
    colIsbn.classList.add("col-isbn");
    colIsbn.innerText = livro.isbn;
    linha.appendChild(colIsbn);
  
    colPreco.classList.add("col-preco");
    colPreco.innerText = livro.preco;
    linha.appendChild(colPreco);
  
    var img = new Image;
    img.src = "data:img/jpg;base64," + livro.img;
    colImagem.classList.add("col-imagem");
    colImagem.appendChild(img);
    linha.appendChild(img);
  
    colSelecionar.classList.add("col-selecionar");
    colSelecionar.innerText = livro.selecionar;
    linha.appendChild(colSelecionar);
  
    document.querySelector('tbody').appendChild(linha);
  }