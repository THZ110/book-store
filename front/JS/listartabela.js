function listarProdutos(produtos) {
    produtos.forEach(prod => {
        if (prod.tipo == 1) {
            document.querySelector('.div-mais-vendidos').appendChild(inserirProd(prod));
        } else if (prod.tipo == 2) {
            document.querySelector('.div-lancamentos').appendChild(inserirProd(prod));
        }
    });
};

function inserirProd(p) {
    var divProduto = document.createElement('div');
    divProduto.classList.add('div-produto');

    var imgProd = new Image();
    imgProd.classList.add('div-img-produto');
    imgProd.src = 'data:img/jpg;base64,' + p.img;

    var pDescProd = document.createElement('p');
    pDescProd.classList.add('p-descri-produto');
    pDescProd.innerText = p.descri;

    var pValor = document.createElement('p');
    pValor.classList.add('p-valor');
    pValor.innerHTML = '<s>De: ' + valorFormatado((p.valor)) + ' por: </s>';

    var pAVista = document.createElement('p');
    pAVista.classList.add('p-a-vista');
    pAVista.innerHTML = valorFormatado((p.valor * 0.5)) + '<span class="span-a-vista">à vista</span>';

    var pParcelado = document.createElement('p');
    pParcelado.classList.add('p-parcelado');
    pParcelado.innerText = '12x de ' + valorFormatado(((p.valor * 0.5) / 10)) + ' sem juros';

    divProduto.appendChild(imgProd);
    divProduto.appendChild(pDescProd);
    divProduto.appendChild(pValor);
    divProduto.appendChild(pAVista);
    divProduto.appendChild(pParcelado);

    return divProduto;
}

// Formata o valor como moeda real brasileira
function valorFormatado(valor) {
    return (valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }));
}