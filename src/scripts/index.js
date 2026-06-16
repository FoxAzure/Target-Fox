const User = [
    {id: 0, user: "ADMIN", senha: "@target556", name: "Administrador", subnick:"Administrador Geral", level: 0},
    {id: 1, user: "PAULO", senha: "target2024", name: "Paulo Roberto", subnick:"Administrador", level: 0},
    {id: 2, user: "ROMARIO", senha: "target2024", name: "Romario Lima", subnick:"Administrador", level: 0},
    {id: 3, user: "FELIPE", senha: "target2024", name: "Felipe Vitturi", subnick:"Coordenador de Qualidade Agrícola", level: 0},
    {id: 4, user: "AGROVALE", senha: "agrovale2024", name: "Agrovale", subnick:"", level: 1},
    {id: 5, user: "EDNEI", senha: "santosfc", name: "Ednei Robiatti", subnick:"Gerente SGI", level: 1},
    {id: 6, user: "JACKSON", senha: "bahia", name: "Jackson Daniel", subnick:"Tec. Qualidade Agrícola", level: 0},
    {id: 7, user: "PAULO RICARDO", senha: "94244", name: "Paulo Ricardo", subnick:"Superintendente Geral", level: 1},
    {id: 8, user: "QUALIDADE", senha: "qualidade2024", name: "Equipe Qualidade", subnick:"Equipe Qualidade Agrícola - Agrovale", level: 1},
    {id: 9, user: "LEANDRO", senha: "91702", name: "Leandro Rodrigues", subnick:"Aux. Tec. Qualidade", level: 0},
    {id: 10, user: "DIEGUINHO", senha: "90405", name: "Dieguinho", subnick:"Aux. Tec. Qualidade", level: 0},
    {id: 11, user: "CESAR", senha: "1234", name: "Cesar", subnick:"Superintedente AgroIndustrial", level: 1},
    {id: 12, user: "MARCIO", senha: "18299", name: "Marcio", subnick:"Coordenador Agrícola", level: 1},
    {id: 13, user: "JOSUE BEZERRA", senha: "75664", name: "Josué Bezerra", subnick:" ", level: 1},
    {id: 14, user: "ARGEMIRO", senha: "50349", name: "Argemiro Chaves", subnick:"Gerente de Agronomia", level: 1},
    {id: 15, user: "ARTUR", senha: "80472", name: "Artur Pereira", subnick:"Gestor de Irrigação", level: 1},
    {id: 16, user: "NAYARA", senha: "74644", name: "Nayara Aline", subnick:"Controladoria", level: 1},
    {id: 17, user: "JOSENILDO", senha: "86270", name: "Josenildo Kelder", subnick:" ", level: 1},
    {id: 18, user: "WILLIAMS", senha: "85856", name: "Williams", subnick:"Líder Colheita MEC", level: 1},
    {id: 19, user: "ADEMAR", senha: "18718", name: "Ademar", subnick:"Coordenador Agrícola", level: 1},
    {id: 20, user: "MARIO", senha: "15350", name: "Mario Jorge", subnick:"Coordenador Mecanização", level: 1},
    {id: 21, user: "PREPARO", senha: "1993", name: "Preparo de Solo", subnick:" ", level: 1},
    {id: 22, user: "CID", senha: "cid123", name: "CID", subnick:"Diretor", level: 1},
    {id: 23, user: "ISMAEL", senha: "93945", name: "Ismael", subnick:" ", level: 1},
    {id: 24, user: "ICARO", senha: "82460", name: "Icaro Paulo", subnick:"Líder Agrícola", level: 1},
    {id: 25, user: "GUILHERME", senha: "agrovale@24", name: "Guilherme Filho", subnick:"Diretor Financeiro", level: 1},
    {id: 26, user: "JOAQUIM", senha: "93225", name: "Joaquim de Carli", subnick:"Gerente de RH", level: 1},
    {id: 27, user: "IGOR", senha: "", name: "Igor Beanor", subnick:"Líder Pesquisa", level: 1},
    {id: 28, user: "GUSTAVO", senha: "agrovale", name: "Gustavo", subnick:"Diretor Indústrial", level: 1},
    {id: 29, user: "BRUNO", senha: "91019", name: "Bruno", subnick:" ", level: 1},
    {id: 30, user: "MURILO", senha: "72387", name: "Murilo", subnick:"Assistente Técnico", level: 1},
    {id: 31, user: "DEPA1", senha: "depa1", name: "DEPA 1", subnick:" ", level: 1},
    {id: 32, user: "DEPA2", senha: "depa2", name: "DEPA 2", subnick:" ", level: 1},
    {id: 33, user: "PAULO ANDRE", senha: "77886", name: "Paulo André", subnick:" ", level: 1},
    {id: 34, user: "ELIEL", senha: "80267", name: "João Eliel", subnick:" ", level: 1},
];

function limparSessao(redirecionar = false) {
    const keys = [
        "target_User",
        "target_Name",
        "target_Level",
        "target_Subnick",
        "target_id"
    ];

    keys.forEach(key => localStorage.removeItem(key));

    if (redirecionar) {
        window.location.href = "/index.html";
    }
}

function salvarSessao(usuario) {
    localStorage.setItem("target_User", usuario.user);
    localStorage.setItem("target_Name", usuario.name);
    localStorage.setItem("target_Level", String(usuario.level));
    localStorage.setItem("target_Subnick", usuario.subnick);
    localStorage.setItem("target_id", String(usuario.id));
}

function validarlogin() {
    const txt_user = document.querySelector("#user").value.trim().toUpperCase();
    const txt_senha = document.querySelector("#senha").value;

    const resultado = User.find(item =>
        item.user === txt_user && item.senha === txt_senha
    );

    if (resultado) {
        limparSessao(false);
        salvarSessao(resultado);
        window.location.href = "/inicio.html";
    } else {
        alert("Login ou senha inválidos. Verifique e tente novamente.");
    }
}

function EntrarSemConta() {
    const resultado = User[4];

    limparSessao(false);
    salvarSessao(resultado);

    window.location.href = "/inicio.html";
}

function checklogin() {
    const username = document.querySelector("#username");
    const nickname = document.querySelector("#subnick");

    const user = localStorage.getItem("target_User");
    const usernick = localStorage.getItem("target_Name");
    const subnick = localStorage.getItem("target_Subnick");
    const level = localStorage.getItem("target_Level");

    const resultado = User.find(item =>
        item.user === user && String(item.level) === String(level)
    );

    if (!resultado) {
        limparSessao(true);
        return;
    }

    if (username) username.innerHTML = "Bem vindo, " + usernick;
    if (nickname) nickname.innerHTML = subnick || "";
}

/* NOVA FUNÇÃO:
   apenas carrega os dados na tela, sem redirecionar */
function carregarUsuarioSemRedirecionar() {
    const username = document.querySelector("#username");
    const nickname = document.querySelector("#subnick");

    const usernick = localStorage.getItem("target_Name");
    const subnick = localStorage.getItem("target_Subnick");

    if (username) username.innerHTML = usernick ? "Bem vindo, " + usernick : "Bem vindo";
    if (nickname) nickname.innerHTML = subnick || "";
}

function checkConected() {
    const user = localStorage.getItem("target_User");
    const level = localStorage.getItem("target_Level");

    const resultado = User.find(item =>
        item.user === user && String(item.level) === String(level)
    );

    if (resultado) {
        window.location.href = "/inicio.html";
    }
}

function quitlogin() {
    limparSessao(true);
}

function showLoginForm() {
    const loginForm = document.getElementById("login-form");
    if (loginForm.classList.contains("show")) {
        loginForm.classList.remove("show");
    } else {
        loginForm.classList.add("show");
    }
}


const NOVO_APP_URL = "https://agrotarget-m5vz.vercel.app/";

function limparSessaoLocal() {
    const keys = [
        "target_User",
        "target_Name",
        "target_Level",
        "target_Subnick",
        "target_id"
    ];

    keys.forEach((key) => localStorage.removeItem(key));
}

function preencherUsuarioTela() {
    const username = document.querySelector("#username");
    const nickname = document.querySelector("#subnick");

    const nome = localStorage.getItem("target_Name") || "Usuário";
    const subnick = localStorage.getItem("target_Subnick") || "";

    if (username) username.textContent = `Bem vindo, ${nome}`;
    if (nickname) nickname.textContent = subnick;
}

function redirecionarParaNovoApp() {
    preencherUsuarioTela();

    setTimeout(() => {
        window.location.replace(NOVO_APP_URL);
    }, 300);
}

function limparSessaoEIrParaNovoApp() {
    limparSessaoLocal();
    window.location.replace(NOVO_APP_URL);
}

function quitlogin() {
    limparSessaoLocal();
    window.location.href = "/index.html";
}

function validarlogin() {
    window.location.replace(NOVO_APP_URL);
}

function checklogin() {
    redirecionarParaNovoApp();
}

function checkConected() {
    redirecionarParaNovoApp();
}

function EntrarSemConta() {
    window.location.replace(NOVO_APP_URL);
}

function showLoginForm() {
    const loginForm = document.getElementById("login-form");
    if (!loginForm) return;

    if (loginForm.classList.contains("show")) {
        loginForm.classList.remove("show");
    } else {
        loginForm.classList.add("show");
    }
}