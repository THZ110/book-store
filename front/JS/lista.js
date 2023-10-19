document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("book-list");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    // Suponhamos que você está buscando dados de um arquivo JSON local.
    fetch("inserirLivro.json") // Substitua pelo caminho real do seu arquivo JSON.
        .then(response => response.json())
        .then(data => {
            displayBooks(data);
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
        });

    function displayBooks(livros) {
        bookList.innerHTML = ""; // Limpa a lista antes de exibir os resultados.

        books.forEach(book => {
            const bookCard = createBookCard(book);
            bookList.appendChild(bookCard);
        });
    }

    function createBookCard(book) {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Autor: ${book.author}</p>
            <p>Ano de Publicação: ${book.year}</p>
            <p>Preço: R$ ${book.price}</p>
            <button class="buy-button">Comprar</button>
        `;
        return card;
    }

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();

        // Aqui você pode adicionar a lógica para filtrar os produtos com base na pesquisa.
        // Por exemplo, você pode percorrer a lista de produtos e exibir apenas os que correspondem ao termo de pesquisa.

        // Suponhamos que você tenha a lista de produtos original em "booksData".
        const filteredBooks = booksData.filter(book => {
            const title = book.title.toLowerCase();
            const author = book.author.toLowerCase();
            return title.includes(searchTerm) || author.includes(searchTerm);
        });

        displayBooks(filteredBooks);
    });
});
