const cadCliente = document.getElementById("form-cliente");
cadCliente.addEventListener("submit", (e) => {
    e.preventDefault();
    let listaCliente = []
    let listaStorage = localStorage.getItem("dadosCliente")
    listaStorage = JSON.parse(listaStorage)
    if (listaStorage !== null)
        listaCliente = listaStorage
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let endereco = document.getElementById("endereco").value
    let cliente = {
        nome,
        email,
        endereco
    }
    listaCliente.push(cliente)
    let convertData = JSON.stringify(listaCliente);
    localStorage.setItem("dadosCliente", convertData);

    let conteudo = document.getElementById("content-cliente");
    let conteudoBpk = conteudo.innerHTML;
    let carregando = "<h1>Carregando...</h1>";
    let pronto = "<h1>Pronto! O cliente foi cadastrado!</h1>";
    conteudo.innerHTML = carregando;
    let table = ""
    if (listaCliente !== null)
        table += "<tr><th>Cliente</th><th>E-mail</th><th>Endereço</th></tr>"
    listaCliente.forEach(cliente => {
        table += "<tr><td>" + cliente.nome + "</td><td>" + cliente.email + "</td><td>" + cliente.endereco + "</td></tr>"
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
    let listaStorage = localStorage.getItem("dadosCliente")
    let table = ""
    if (listaStorage !== null) {
        table += "<tr><th>Cliente</th><th>E-mail</th><th>Endereço</th></tr>"
        listaStorage = JSON.parse(listaStorage)
        listaStorage.forEach(cliente => {
            table += "<tr><td>" + cliente.nome + "</td><td>" + cliente.email + "</td><td>" + cliente.endereco + "</td></tr>"
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