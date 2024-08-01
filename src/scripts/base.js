const Relatorios = [
    //Equipe da Qualidade
    {id:0, tag: 0, relatorio: "Acompanhamento da Equipe", ativo: true, url: ""},
    {id:1, tag: 0, relatorio: "Semanal da Qualidade", ativo: true, url: ""},
    {id:2, tag: 0, relatorio: "Mensal da Qualidade", ativo: true, url: ""},
    {id:3, tag: 0, relatorio: "Mapa das Avaliações", ativo: true, url: ""},

    //Perdas na Colheita
    {id:4, tag: 1, relatorio: "Perdas na Colheita Mecanizada", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiODE4MDU0YzItYjBhYS00ZTRmLTk3MWEtMGM0YTAyZTBkZjA4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:5, tag: 1, relatorio: "Perdas na Colheita Manual", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYTU3YWJkMzItNDM4NC00M2Y4LTlkOTctM2EzZTRhYWI5NTQ4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:6, tag: 1, relatorio: "Relatório por Campo", ativo: false, url: ""},
    {id:7, tag: 1, relatorio: "Relatório Estimado x Real", ativo: false, url: ""},
    {id:8, tag: 1, relatorio: "Relatório das Colhedoras", ativo: true, url: ""},
    {id:9, tag: 1, relatorio: "Relatório por Frente", ativo: true, url: ""},
    {id:10, tag: 1, relatorio: "Relatório por Variedade", ativo: true, url: ""},

    //Perparo de Solo
    {id:11, tag: 2, relatorio: "Avaliação de Composto", ativo: true, url: ""},

    //Semente Mecanizada
    {id:12, tag: 3, relatorio: "Semente Mecanizada", ativo: true, url: ""},

    //Plantio Mecanizado
    {id:13, tag: 4, relatorio: "Plantio Mecanizada", ativo: true, url: ""},

    //IUP
    {id:14, tag: 5, relatorio: "IUP - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNDEyZmI5YzQtYThjZS00ZWJlLWFmNjMtOWQ1OGE0MGRlYzJiIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:15, tag: 5, relatorio: "IUP - Campos Avaliados", ativo: true, url: ""},

    //Drone
    {id:16, tag: 6, relatorio: "Drone - Última Avaliação", ativo: true, url: ""},
    {id:16, tag: 6, relatorio: "Avaliação Adubação Socaria", ativo: true, url: ""},
    {id:17, tag: 6, relatorio: "Avaliação Vinhaça Localizada", ativo: true, url: ""},
]


const Grupo = [
    {id: 0, tag: 0, nome: "Equipe Qualidade", level:"0", ativo: true},
    {id: 7, tag: 7, nome: "Boletim Diário Qualidade", level:"1", ativo: false},
    {id: 1, tag: 1, nome: "Perdas na Colheita", level: "1", ativo: true},
    {id: 2, tag: 2, nome: "Preparo de Solo", level: "1", ativo: true},
    {id: 3, tag: 3, nome: "Semente Mecanizada", level: "1", ativo: true},
    {id: 4, tag: 4, nome: "Plantio Mecanizado", level: "1", ativo: true},
    {id: 6, tag: 6, nome: "Tratos Culturais", level: "1", ativo: true},
    {id: 5, tag: 5, nome: "IUP - Índice de Uniformidade do Plantio", level: "1", ativo: true},
]


function creatlistprincipal(){
    let Ativo;
    let list = document.querySelector("#listPrincipal")
    let level = localStorage.getItem("target_Level")
    let listconstruct = "";
    switch(level){
        case "0":
            for(let i=0; i<Grupo.length; i++){
                Ativo = Grupo[i].ativo
                if(Ativo==true){
                    listconstruct = listconstruct + "<li><button class='bt_list' onclick='tagList("+Grupo[i].tag+","+Grupo[i].id+")'>" + Grupo[i].nome + "</button></li>"
                }
            }
             break
        case "1":
            for(let i=0; i<Grupo.length; i++){
                Ativo = Grupo[i].ativo
                if(Grupo[i].level == "1" && Ativo==true){
                    listconstruct = listconstruct + "<li><button class='bt_list' onclick='tagList("+Grupo[i].tag+","+Grupo[i].id+")'>" + Grupo[i].nome + "</button></li>"
                }
            }
            break
        default:
            localStorage.removeItem("target_User")
            localStorage.removeItem("target_Name")
            localStorage.removeItem("target_Level")
            window.location.assign("../index.html") 

    }
    list.innerHTML = listconstruct


}

function tagList(tag_selec,titulo){

    localStorage.setItem("target_Tag",tag_selec)
    localStorage.setItem("target_Titulo",titulo)
    window.location.assign("../lista.html") 
}


function creatlistrel(){
    let Ativo;
    let tag_seletion = localStorage.getItem("target_Tag")
    let titulo = localStorage.getItem("target_Titulo")

    let list = document.querySelector("#listRel")
    let title = document.querySelector("#titulo_list")
    let listconstruct = "";

    let ListaRelatorios = Relatorios.filter((item)=> item.tag == tag_seletion)

    for(let i=0; i<ListaRelatorios.length; i++){
        Ativo = Relatorios[i].ativo
        if(Ativo==true){
            listconstruct = listconstruct + "<button class='bt_relatorios' onclick='loadDash("+ListaRelatorios[i].id+")'>" + ListaRelatorios[i].relatorio + "</button>"
        }
    }

    list.innerHTML = ""
    list.innerHTML = listconstruct

    title.innerHTML = Grupo[titulo].nome
}



function loadDash(id){

    localStorage.setItem("target_IDrelatorio",id)
    window.location.assign("../dash.html") 
}

function creatDash(){
    let idRelatorio = localStorage.getItem("target_IDrelatorio")
    let Relatorio = Relatorios.filter((item) => item.id == idRelatorio)
    let titulo = document.querySelector("#tituloDash")
    let dash = document.querySelector("#iframeView")

    let tituloRelatorio = Relatorio[0].relatorio
    let urlRelatorio = Relatorio[0].url

    if(urlRelatorio.length == 0){
        urlRelatorio = "../src/erro/erro.html"
    }
    titulo.innerHTML = tituloRelatorio
    dash.src = urlRelatorio

}