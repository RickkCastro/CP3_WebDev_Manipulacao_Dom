const btn = document.getElementById("btn");
const inputProduto = document.getElementById("produto");
const inputPreco = document.getElementById("preco");
const inputCategoria = document.getElementById("categoria");

const listaProdutos = document.getElementById("listaProdutos");

let produtos = [];

btn.addEventListener("click", function (event) {
    event.preventDefault();

    const produto = inputProduto.value;
    let preco = inputPreco.value;
    const categoria = inputCategoria.value;

    //Adicionando os produtos no array, so para saber a quantidade deles depois.
    produtos.push({ preco, produto, categoria });

    if (!produto || !preco || !categoria) {
        alert("Preencha todos os campos");
        return;
    }

    if (preco <= 0) {
        alert("O preço deve ser maior que zero");
        return;
    }

    preco = Number(preco).toFixed(2).replace(".", ",");

    const produtoLi = document.createElement("li");
    produtoLi.classList.add("produtoLi");

    switch (categoria) {
        case "Tecnologia":
            produtoLi.classList.add("tecnologia");
            break;
        case "Alimentos":
            produtoLi.classList.add("alimentos");
            break;
        default:
            break;
    }

    produtoLi.innerText = `${produtos.length}. Produto: ${produto} - R$ ${preco} - Categoria: ${categoria}`;

    listaProdutos.appendChild(produtoLi);

    inputProduto.value = "";
    inputPreco.value = "";
    inputCategoria.value = "";
});
