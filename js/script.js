const preencheZero = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    const now = new Date();
    const dia = new Date(2021, 10, 26, 0, 0, 0);
    const diferenca = dia.getTime() - now.getTime();
    const divDias = 24 * 60 * 60 * 1000;
    const divHoras = 60 * 60 * 1000;
    const divMinutos = 60 * 1000;
    const dias = diferenca / divDias;
    const horas = (diferenca % divDias) / divHoras;
    const minutos = ((diferenca % divDias) % divHoras) / divMinutos;
    const segundos = (((diferenca % divDias) % divHoras) % divMinutos) / 1000;
    if (document.getElementById("dia") !== null) {
        document.getElementById("dia").innerHTML = "<h2>" + Math.trunc(dias) + "</h2><p>dias</p>";
        document.getElementById("hora").innerHTML = "<h2>" + preencheZero(Math.trunc(horas)) + "</h2><p>horas</p>";
        document.getElementById("minuto").innerHTML = "<h2>" + preencheZero(Math.trunc(minutos)) + "</h2><p>minutos</p>";
        document.getElementById("segundo").innerHTML = "<h2>" + preencheZero(Math.trunc(segundos)) + "</h2><p>segundos</p>";
    }
}, 1000);

const cadEmail = document.getElementById("form-email");
if (cadEmail !== null)
    cadEmail.addEventListener("submit", (e) => {
        e.preventDefault();
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let data = {
            nome,
            email
        }
        let convertData = JSON.stringify(data);
        localStorage.setItem("dadosEmail", convertData);

        let conteudo = document.getElementById("content");
        let conteudoBpk = conteudo.innerHTML;
        let carregando = "<h1>Carregando...</h1>";
        let pronto = "<h1>Pronto! Seu e-mail foi cadastrado!</h1>";
        conteudo.innerHTML = carregando;
        setTimeout(() => {
            conteudo.innerHTML = pronto;
        }, 2000);
        setTimeout(() => {
            conteudo.innerHTML = conteudoBpk;
        }, 3000);
    })

const cadCliente = document.getElementById("form-cliente");
if (cadCliente !== null)
    cadCliente.addEventListener("submit", (e) => {
        e.preventDefault();
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let endereco = document.getElementById("endereco").value;
        let data = {
            nome,
            email,
            endereco
        }
        let convertData = JSON.stringify(data);
        localStorage.setItem("dadosCliente", convertData);

        let conteudo = document.getElementById("content-cliente");
        let conteudoBpk = conteudo.innerHTML;
        let carregando = "<h1>Carregando...</h1>";
        let pronto = "<h1>Pronto! O cliente foi cadastrado!</h1>";
        conteudo.innerHTML = carregando;
        setTimeout(() => {
            conteudo.innerHTML = pronto;
        }, 2000);
        setTimeout(() => {
            conteudo.innerHTML = conteudoBpk;
        }, 3000);
    })

const cadProduto = document.getElementById("form-produto");
if (cadProduto !== null)
    cadProduto.addEventListener("submit", (e) => {
        e.preventDefault();
        let produto = document.getElementById("produto").value;
        let descicao = document.getElementById("descicao").value;
        let preco = document.getElementById("preco").value;
        let data = {
            produto,
            descicao,
            preco
        }
        let convertData = JSON.stringify(data);
        localStorage.setItem("dadosProduto", convertData);

        let conteudo = document.getElementById("content-produto");
        let conteudoBpk = conteudo.innerHTML;
        let carregando = "<h1>Carregando...</h1>";
        let pronto = "<h1>Pronto! O produto foi cadastrado!</h1>";
        conteudo.innerHTML = carregando;
        setTimeout(() => {
            conteudo.innerHTML = pronto;
        }, 2000);
        setTimeout(() => {
            conteudo.innerHTML = conteudoBpk;
        }, 3000);
    })

function collapseNav() {
    var nav = document.getElementById("nav-principal")
    console.log(nav.className)
    if (nav.className === "navigation")
        nav.classList.add("responsive")
    else
        nav.classList.remove("responsive")
}