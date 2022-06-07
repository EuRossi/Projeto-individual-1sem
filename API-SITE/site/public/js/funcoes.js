// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


function logado(){
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        entrar_cabecalho.style.display = 'none'
        cadastro_cabecalho.style.display = 'none'
        feed_cabecalho.style.display = 'block'
        sair_cabecalho.style.display = 'block'
    } else {
        entrar_cabecalho.style.display = 'block'
        cadastro_cabecalho.style.display = 'block'
        feed_cabecalho.style.display = 'none'
        sair_cabecalho.style.display = 'none'
    }

    if (sessionStorage.Tp_Usuario == 'adm') {
        cabecalho_adm.style.display = 'block'
    } else {
        cabecalho_adm.style.display = 'none'

    }
}





