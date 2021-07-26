const cadProduto = document.getElementById("form-produto");
cadProduto.addEventListener("submit", (e) => {
    e.preventDefault();
    let listaProduto = []
    let listaStorage = localStorage.getItem("dadosProduto")
    listaStorage = JSON.parse(listaStorage)
    if (listaStorage !== null)
        listaProduto = listaStorage
    let nome = document.getElementById("nome").value
    let descicao = document.getElementById("descricao").value
    let preco = document.getElementById("preco").value
    let produto = {
        nome,
        descicao,
        preco
    }
    listaProduto.push(produto)
    let convertData = JSON.stringify(listaProduto);
    localStorage.setItem("dadosProduto", convertData);

    let conteudo = document.getElementById("content-produto");
    let conteudoBpk = conteudo.innerHTML;
    let carregando = "<h1>Carregando...</h1>";
    let pronto = "<h1>Pronto! O produto foi cadastrado!</h1>";
    conteudo.innerHTML = carregando;
    let table = ""
    if (listaProduto !== null)
        table += "<tr><th>Produto</th><th>Descrição</th><th>Preço</th></tr>"
    listaProduto.forEach(produto => {
        table += "<tr><td>" + produto.nome + "</td><td>" + produto.descicao + "</td><td>" + produto.preco + "</td></tr>"
    });
    document.getElementById("tabela").innerHTML = table
    setTimeout(() => {
        conteudo.innerHTML = pronto;
    }, 2000);
    setTimeout(() => {
        conteudo.innerHTML = conteudoBpk;
    }, 3000);
    setTimeout(() => {
        location.href = "#session-table"
    }, 3500);
})

window.onload = function() {
    let listaStorage = localStorage.getItem("dadosProduto")
    let table = ""
    if (listaStorage !== null) {
        table += "<tr><th>Produto</th><th>Descrição</th><th>Preço</th></tr>"
        listaStorage = JSON.parse(listaStorage)        
        listaStorage.forEach(produto => {
            table += "<tr><td>" + produto.nome + "</td><td>" + produto.descicao + "</td><td>" + produto.preco + "</td></tr>"
        });
    }
    document.getElementById("tabela").innerHTML = table
}

function collapseNav() {
    var nav = document.getElementById("nav-principal")
    console.log(nav.className)
    if (nav.className === "navigation")
        nav.classList.add("responsive")
    else
        nav.classList.remove("responsive")
}