const Relatorios = [
    //Equipe da Qualidade
    {id:100, tag: 0, relatorio: "Acompanhamento da Equipe", ativo: false, url: ""},
    {id:101, tag: 0, relatorio: "Semanal da Qualidade", ativo: false, url: ""},
    {id:102, tag: 0, relatorio: "Mensal da Qualidade", ativo: false, url: ""},
    {id:103, tag: 0, relatorio: "Mapa das Avaliações", ativo: false, url: ""},

    //Perdas na Colheita
    {id:300, tag: 2, relatorio: "Perdas na Colheita Mecanizada", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiODE4MDU0YzItYjBhYS00ZTRmLTk3MWEtMGM0YTAyZTBkZjA4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:301, tag: 2, relatorio: "Perdas na Colheita Manual", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYTU3YWJkMzItNDM4NC00M2Y4LTlkOTctM2EzZTRhYWI5NTQ4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:302, tag: 2, relatorio: "Relatório por Campo", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiOWUzODE2ODctYTE0Yy00NmUwLWJjMjMtMDBjN2JmODgyZTFhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:303, tag: 2, relatorio: "Relatório Estimado x Real", ativo: false, url: ""},
    {id:304, tag: 2, relatorio: "Relatório das Colhedoras", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMTU4ZGM4ZjQtZjg3Ni00NzBkLWI0MzQtNTA1NzMzZTdkYTgxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:305, tag: 2, relatorio: "Relatório por Frente", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNTgyMGJmYzItYjU4MS00ZWI5LTk4NjgtNjMxMjRjZDlmMjExIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:306, tag: 2, relatorio: "Relatório por Variedade", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMmY2MjFmNDgtMjU2My00MzhjLTkxMGQtNzZhOWFhNWRlMDcxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},

    //Perparo de Solo
    {id:400, tag: 3, relatorio: "Preparo de Solo", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNjJmNDI0NmEtNTNiNy00M2E0LWIzYmQtODIwMWI1NmMwMTIzIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:401, tag: 3, relatorio: "Profund. Sulco x Fita Gotejadora", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZTQ1NGJkZjktMjg2OC00M2QwLTk3YTItOTUwYjg3YjU0NGM3IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:402, tag: 3, relatorio: "Histórico Profundidade do Preparo", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZTY1MTVkYjktMjUwNS00ZTk5LWJiZDMtY2FlOGYyOTRkMTY2IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:403, tag: 3, relatorio: "Histórico Paralelismo", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYWU2MzY1OTMtMWMxNy00N2YwLWEwZmYtYjQ4YWQwNWQ5MmJlIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:410, tag: 3, relatorio: "Composto - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZmVjNTFmN2QtY2U3Yi00ZTVjLWJmNDItNjNiZjMyOTRlMDkzIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},






    //Semente Mecanizada
    {id:500, tag: 4, relatorio: "Semente Mec - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYTEzODM2NDktZjg3MC00MDVjLWE5ZWEtZDRjZTM5OTNiNjQxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},

    //Plantio Mecanizado
    {id:600, tag: 5, relatorio: "Plantio Mecanizado - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMzQzNTNiOWUtMjY4OC00YmMzLWExZjQtZTgwOWI3MDU0MDc0IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:601, tag: 5, relatorio: "Plantio Manual - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiM2FkMDIyMGEtMDMxNy00MzFhLTk5NjEtMmE5OTk3NTJiODg3IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},

    //Tratos Culturais
    {id:700, tag: 6, relatorio: "Drone - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMTllNmI0NTktNDIyOS00ZTJkLTk3OWItMDZlZWIxY2E5MjNjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:701, tag: 6, relatorio: "Drone - Histórico", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiY2M1ZGE1MGQtNzVmNy00YjE4LThhMGUtZDRiMGM2NzI4YzU0IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:702, tag: 6, relatorio: "Adubação Socaria", ativo: false, url: ""},
    {id:703, tag: 6, relatorio: "Vinhaça Localizada", ativo: false, url: ""},

    //IUP
    {id:800, tag: 7, relatorio: "IUP - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNDEyZmI5YzQtYThjZS00ZWJlLWFmNjMtOWQ1OGE0MGRlYzJiIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:801, tag: 7, relatorio: "IUP - Campos Avaliados", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYzhkYTFmYTgtZWIxYS00OTAyLWFjZjMtYWRlMDViYzlkYjE2IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
  
    //Broca
    {id:900, tag: 8, relatorio: "Infestação Final Broca - Mecanizada", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYzhlYjhmNDgtODcyNy00Mzk3LTk4YzYtMDFkNTkwMjk1YjBkIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:901, tag: 8, relatorio: "Histórico Broca - Mecanizada", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZGU3Mjg0YjktMzdlOC00MmIzLTk4M2QtNzZmY2U5YzA4ZGQ4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
]


const Grupo = [
    {id: 0, tag: 0, nome: "Equipe Qualidade", level:"0", ativo: true},
    {id: 1, tag: 1, nome: "Boletim Diário Qualidade", level:"1", ativo: false},
    {id: 2, tag: 2, nome: "Perdas na Colheita", level: "1", ativo: true},
    {id: 3, tag: 3, nome: "Preparo de Solo", level: "1", ativo: true},
    {id: 4, tag: 4, nome: "Semente Mecanizada", level: "1", ativo: true},
    {id: 5, tag: 5, nome: "Plantio Mecanizado", level: "1", ativo: true},
    {id: 6, tag: 6, nome: "Tratos Culturais", level: "1", ativo: true},
    {id: 7, tag: 7, nome: "IUP - Índice de Uniformidade do Plantio", level: "1", ativo: true},
    {id: 8, tag: 8, nome: "Infestação Final - Broca", level: "1", ativo: true},
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

    let ListaRelatorios = Relatorios.filter((item)=> item.tag == tag_seletion && item.ativo == true)
    console.log(ListaRelatorios)
    for(let i=0; i<ListaRelatorios.length; i++){
        //Ativo = Relatorios[i].ativo
        //if(Ativo==true){
            listconstruct = listconstruct + "<button class='bt_relatorios' onclick='loadDash("+ListaRelatorios[i].id+")'>" + ListaRelatorios[i].relatorio + "</button>"
        //}
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