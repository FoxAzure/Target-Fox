const User = [
    {id: 0, user: "ADMIN", senha: "@target556", name: "Administrador", level: 0},
    {id: 1, user: "PAULO", senha: "target2024", name: "Paulo Roberto", level: 0},
    {id: 2, user: "ROMARIO", senha: "target2024", name: "Romario Lima", level: 0},
    {id: 3, user: "FELIPE", senha: "target2024", name: "Felipe Vitturi", level: 0},
    {id: 4, user: "AGROVALE", senha: "agrovale2024", name: "Agrovale", level: 1},
]


let txt_user;
let txt_senha;
let txt_userUP;

function validarlogin(){
    txt_user = document.querySelector("#user").value
    txt_senha = document.querySelector("#senha").value
    
    txt_userUP = txt_user.toUpperCase()

    let resultado = User.filter( item =>
        item.user == txt_userUP && item.senha == txt_senha
    )
    if(resultado.length>0){

        let userName = resultado[0].user
        let nickName = resultado[0].name
        let levelUser = resultado[0].level


        localStorage.setItem("target_User",userName)
        localStorage.setItem("target_Name",nickName)
        localStorage.setItem("target_Level",levelUser)
        
        window.location.assign("../inicio.html")
        
    }else{
        alert("Login ou senha inválidos. Verifique e tente novamente.")
    }
}



function checklogin(){
    let username = document.querySelector("#username")
    let user = localStorage.getItem("target_User");
    let usernick = localStorage.getItem("target_Name");
    let level = localStorage.getItem("target_Level");

    let resultado = User.filter( item =>
        item.user == user && item.level == level
    )
    
    if(resultado.length==0){
        window.location.assign("../index.html")
    }else{
        username.innerHTML = "Bem vindo, " + usernick
    }
}



function quitlogin(){
    localStorage.removeItem("target_User")
    localStorage.removeItem("target_Name")
    localStorage.removeItem("target_Level")
    window.location.assign("../index.html")
}