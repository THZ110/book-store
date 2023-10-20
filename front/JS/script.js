document.addEventListener("DOMContentLoaded", function () {
    const stringURL = window.location.search;
    const paramsURL = new URLSearchParams(stringURL);
    const id = paramsURL.get("id");
    getProduto(id);
})
function getProduto(id) {
    fetch("http://localhost:8080/" + id)
        .then(resposta => resposta.json())
        .then(produto => preencheProduto(produto))
        .catch(error => console.log("Ocorreu um erro ao buscar produto do banco: " + error));
}



function preencheProduto(p) {
    var img = new Image;
    img.src = "data:img/jpg;base64," + p.img;
    document.querySelector(".big-img").appendChild(img);
    document.querySelector(".titulo-prod").innerText = p.descricao;
    document.querySelector(".precode").innerHTML = "De: <s> " +converteToReal(p.preco) + "</s> por:";
    document.getElementById("valor").innerText = converteToReal(p.preco * 0.5);
    document.getElementById("valor-card").innerText = converteToReal(p.preco * 0.6);
    document.getElementById("value-span").innerText =converteToReal((p.preco * 0.6) / 12);
}

function converteToReal(dinheiro){
    return dinheiro.toLocaleString("pt-br",{
        style:"currency",
        currency:"brl"
    });
}