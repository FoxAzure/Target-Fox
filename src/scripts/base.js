const Relatorios = [
    //Equipe da Qualidade
    {id:100, tag: 0,tipo: 1, relatorio: "Acompanhamento da Equipe", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNjM1YzVlMzYtMWM0YS00Yjg4LTg0MjItZTg3MTIwNDIyN2ViIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiOTFkM2I2NjgtODQxMi00NDJiLWE3YTUtNDQzZTg4MTliYjYzIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:101, tag: 0,tipo: 1, relatorio: "Acompanhamento Colhedoras", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYzllZWFmYzctMzE1YS00NzFmLTg2OTItOTVhMTJiNzYwNDE3IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:103, tag: 0,tipo: 1, relatorio: "Acompanhamento Datas de Plantio", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNDExYjFmYmYtZDNjNi00OTk4LWI1MTgtN2M5MjBhYzMzZmVmIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiMDNjMzZmYWItNDBhZC00NGNkLWJjMjUtNDRhYjNjNWMxNGEyIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:104, tag: 0,tipo: 1, relatorio: "Perdas Mecanizada - Ponto a Ponto", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiOGJkMmJiZGMtMTcwYy00YTRhLThiZjUtODEzNzZkYjc3MjA2IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiOTJiMzA2YjQtOTJhMC00NmQ0LWI4NWUtNTU5NWZkODFjYzJhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:105, tag: 0,tipo: 1, relatorio: "Perdas Manual - Ponto a Ponto", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMTQ3MjUxNGYtYTAxNy00YmNmLTgxY2YtNzJmYmQwMzFjZDMxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiZWYzM2YyN2MtYWNkNS00MjhhLWJjYzctMDhiNjViNjM2NjIyIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:106, tag: 0,tipo: 1, relatorio: "Resumo IUP", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMWFmN2E3OTEtOTUzMy00NTZmLTkxYjYtZTYwZmFlNmI5OTlhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiZDBiZDVkYmEtZWQ5OC00ZjgzLTg1NzUtYmNhYzg2ZTdkODEyIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},


    //Boletim Diário
    {id:200, tag: 1,tipo: 1, relatorio: "Boletim Diário da Qualidade", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZTZiN2QzOWMtNWIwYi00N2EyLWEyMzEtNzQ3M2M3YjU0MTRjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
   


    //Perdas na Colheita
    {id:300, tag: 2,tipo: 1, relatorio: "Perdas na Colheita Mecanizada", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiODE4MDU0YzItYjBhYS00ZTRmLTk3MWEtMGM0YTAyZTBkZjA4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiYTUxYzM3ZmEtMjIxYS00YmIzLThhNzQtNGM3Nzk2OGRkYzBhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:301, tag: 2,tipo: 1, relatorio: "Perdas na Colheita Manual", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYTU3YWJkMzItNDM4NC00M2Y4LTlkOTctM2EzZTRhYWI5NTQ4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiZTYyYThmNTMtYjAxNC00NWI0LWIzZjUtMjJlNDRmMzU1YTJjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:302, tag: 2,tipo: 1, relatorio: "Relatório por Campo", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiOWUzODE2ODctYTE0Yy00NmUwLWJjMjMtMDBjN2JmODgyZTFhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiMjZiNWJjY2YtYTdiZi00ZTgzLWIxNDQtNmE5NDM4OTQxM2RjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:303, tag: 2,tipo: 1, relatorio: "Relatório Estimado x Real", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNmFlNWRjMDMtYmJjOS00NGUwLWJiNjItNGI3Y2U4Y2FmNjc3IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:304, tag: 2,tipo: 1, relatorio: "Relatório das Colhedoras", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMTU4ZGM4ZjQtZjg3Ni00NzBkLWI0MzQtNTA1NzMzZTdkYTgxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiYWQ3OGQyZjQtMjFkNy00MWRmLTk1ZTUtMmZlYzI2ZWY3YjEwIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:305, tag: 2,tipo: 1, relatorio: "Relatório por Frente", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNTgyMGJmYzItYjU4MS00ZWI5LTk4NjgtNjMxMjRjZDlmMjExIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:306, tag: 2,tipo: 1, relatorio: "Relatório por Variedade", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMmY2MjFmNDgtMjU2My00MzhjLTkxMGQtNzZhOWFhNWRlMDcxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    //indicadores Colheta
    {id:1300, tag: 2,tipo: 2, relatorio: "Indicador Semanal - Mecanizada", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMDcyYzgxMGUtNzRkNi00MGVkLWI2ODItZjhlYTU3OWJlZmVhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:1301, tag: 2,tipo: 2, relatorio: "Indicador Semanal - Manual", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiOGU2YzFmOGYtOTkyNS00NmRjLTkxY2UtMjViYTU3MDg5NWIxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},



    //Perparo de Solo
    {id:400, tag: 3,tipo: 1, relatorio: "Preparo de Solo - Geral", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNGI2Mzg0ZDEtM2E0NC00M2M3LWJhYzMtZGRiZDEzODJlMTUwIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiYmUyMmM2YjQtNzdjYi00ZGNjLTg3YmYtYTA4OGNhOTEwOTI1IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:401, tag: 3,tipo: 1, relatorio: "Profundidade do Preparo", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZDBlYzMzYjMtOWJkZi00NDc3LTk5OTMtOWU0ZTcxZjBiM2I4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiNmY5MmRjZTctNzcxMi00NTY5LTkzMjQtZjE4ZmYyNTMzYTk4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:402, tag: 3,tipo: 1, relatorio: "Paralelismo Entre Sulcos", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNWE5YTNlMzgtNWVmNy00Y2MxLTg0YTYtMjhmOTcxNTJmMGNiIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiNjllMGYzNGQtZmZlMS00ZmVkLWExOTQtNWM2Y2EyMWQxYmVjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:403, tag: 3,tipo: 1, relatorio: "Paralelismo Entre Fitas", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiN2VmZTlhZmItNzU5MS00NDZmLWI2ZjktZGRmN2IyZTJmNmMzIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiYTA3MjZiYmMtZWU3NC00MjVjLWJiOTctM2YxNmUyNTU0YzBhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:404, tag: 3,tipo: 1, relatorio: "Profund. Sulco x Fita Gotejadora", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZTQ1NGJkZjktMjg2OC00M2QwLTk3YTItOTUwYjg3YjU0NGM3IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiZjA3ZTVkZGMtMjY3Ni00MTAxLWFlN2UtZGZjMmNkNjA5NmIyIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:405, tag: 3,tipo: 1, relatorio: "Aplicação de Composto", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZmVjNTFmN2QtY2U3Yi00ZTVjLWJmNDItNjNiZjMyOTRlMDkzIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiMjdlMmU4Y2MtNzhmMC00MTllLTk1YmEtOTliZWViNDJiYTI1IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:406, tag: 3,tipo: 1, relatorio: "Adubação do Sulcamento", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiM2Q1OTZmN2YtN2E5Ny00OGRmLWI2YWItNDcyMzZhOGJmZjA2IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiNDhmZjViODYtZjA0Yi00ZjFkLThjZjQtMzMzYzhkYWJkM2FkIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
       
    
    
    //{id:402, tag: 3,tipo: 1, relatorio: "Profundidade do Preparo - Histórico", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZTY1MTVkYjktMjUwNS00ZTk5LWJiZDMtY2FlOGYyOTRkMTY2IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    //{id:403, tag: 3,tipo: 1, relatorio: "Paralelismo - Histórico", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYWU2MzY1OTMtMWMxNy00N2YwLWEwZmYtYjQ4YWQwNWQ5MmJlIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    //{id:410, tag: 3,tipo: 1, relatorio: "Composto - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZmVjNTFmN2QtY2U3Yi00ZTVjLWJmNDItNjNiZjMyOTRlMDkzIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiZTQ4Yzc4OGItZDFlMi00YzFlLWIxZjEtOTc2YjNmOWU5MTcxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    //{id:411, tag: 3,tipo: 1, relatorio: "Composto - Histórico", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNmU5ZGY2ZTEtM2MyMi00ZTY2LWI0YzktNjE4NDNkZDBmNWYwIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiY2QxNDQ2MjctNDhkNy00N2I3LThlYzItYzIyYjlhMjU2YTMyIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    //{id:412, tag: 3,tipo: 1, relatorio: "Adubação Sulcamento - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiM2Q1OTZmN2YtN2E5Ny00OGRmLWI2YWItNDcyMzZhOGJmZjA2IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    //{id:413, tag: 3,tipo: 1, relatorio: "Adubação Sulcamento - Histórico", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYTlmYmI3ZjUtODQ3ZC00YzNmLWFhZGItZmJhYzY3ZjU2OGZkIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    
    
    
    //Semente Mecanizada
    {id:500, tag: 4,tipo: 1, relatorio: "Semente Mec - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYTEzODM2NDktZjg3MC00MDVjLWE5ZWEtZDRjZTM5OTNiNjQxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiYTU0ZTU3ZjAtZjFiZC00NTk1LWFjZWYtOGQwZDgxMTkxNzNmIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:501, tag: 4,tipo: 1, relatorio: "Semente Mec - Histórico", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZTNkMzJiZWItYWNlZS00NWQ5LWIzMDQtMWY1MTZkNjg3OWI1IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiNzc5Mzg5MGQtZGE2Mi00MDM4LTgwYjUtM2NkMTRhNGIwN2Q5IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},   
    //indicadores Semente
    {id:1500, tag: 4,tipo: 2, relatorio: "Indicador Semanal - Semente Mecanizada", ativo: true, url: ""},


    //Plantio Mecanizado
    {id:600, tag: 5,tipo: 1, relatorio: "Plantio Mecanizado - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMzQzNTNiOWUtMjY4OC00YmMzLWExZjQtZTgwOWI3MDU0MDc0IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiOTIxM2M0YzYtZmRlMi00OWEwLTk0ODktODE2NDg1ZmE4NDFjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:601, tag: 5,tipo: 1, relatorio: "Plantio Mecanizado - Histórico", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiZWMwOThkMzEtNWY5ZC00NjM1LTgyZWItMTlhMWVhZjRkMDFhIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:602, tag: 5,tipo: 1, relatorio: "Plantio Manual - Última Avaliação", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiM2FkMDIyMGEtMDMxNy00MzFhLTk5NjEtMmE5OTk3NTJiODg3IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    //indicadores Plantio
    {id:1600, tag: 5,tipo: 2, relatorio: "Indicador Semanal - Plantio Mecanizado", ativo: true, url: ""},
    {id:1601, tag: 5,tipo: 2, relatorio: "Indicador Semanal - Plantio Manual", ativo: true, url: ""},



    //Tratos Culturais
    {id:700, tag: 6,tipo: 1, relatorio: "Avaliação Drone", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMTllNmI0NTktNDIyOS00ZTJkLTk3OWItMDZlZWIxY2E5MjNjIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiYWY5ZDI1MTYtOTcwZi00MTI0LThhMTYtNWMwZjZjOTQzZDE0IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:701, tag: 6,tipo: 1, relatorio: "Adubação de Cobertura", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNjI0OTQyNWItMmViYS00YjU2LTllZWMtZjkzMjU3MGVmMDMyIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiNzc1NjNlZDMtZmU4MS00MGU1LTljN2UtMjg5MTIwOTA0NzgxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:702, tag: 6,tipo: 1, relatorio: "Vinhaça Localizada", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNGIwOGJlOTMtYWY5Yy00ZGVlLWJjOGItMzU5YzdhNmIzMmQxIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiZjNmNWYwZTMtYzFhNC00N2U5LWJmNTAtMjZjYmNlNGI5MTQzIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},



    //IUP
    {id:800, tag: 7,tipo: 1, relatorio: "Avaliação IUP", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiNDEyZmI5YzQtYThjZS00ZWJlLWFmNjMtOWQ1OGE0MGRlYzJiIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiZDg0MzRlNTUtNThkOS00OWJjLWExZjgtZjMwZmMzODA0OGE4IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    {id:801, tag: 7,tipo: 1, relatorio: "IUP - Relatório de Campo", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiMWQxZGQ0MDQtNTgxMi00MDQxLWFhMjYtNGNjYzMyNTE0MGRlIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiODJkN2U1MWEtMzUxMC00MTljLWJhNjQtZDRjNWQyNTFiYzQ3IiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    //indicadores IUP
    {id:1800, tag: 7,tipo: 2, relatorio: "Indicador Semanal - IUP", ativo: true, url: ""},



    //Broca
    {id:900, tag: 8,tipo: 1, relatorio: "Infestação Final Broca - Mecanizada", ativo: true, url: "https://app.powerbi.com/view?r=eyJrIjoiYzhlYjhmNDgtODcyNy00Mzk3LTk4YzYtMDFkNTkwMjk1YjBkIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9", url_full: "https://app.powerbi.com/view?r=eyJrIjoiNzg3MGEzMmYtNmZhNy00YTk4LWE4YzQtMjJhYWVjNzc5NGZkIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9"},
    


    //Irrigação
    {id:1000, tag: 9,tipo: 1, relatorio: "Avaliação da Casa de Bomba", ativo: true, url: "", url_full: ""},
    {id:1001, tag: 9,tipo: 1, relatorio: "Avaliação de Gotejamento", ativo: true, url: "", url_full: ""},
    

]



const Grupo = [
    {id: 0, tag: 0, nome: "Equipe Qualidade", level:"0", ativo: true},
    {id: 1, tag: 1, nome: "Boletim da Qualidade Agrícola", level:"1", ativo: true},
    {id: 2, tag: 2, nome: "Perdas na Colheita", level: "1", ativo: true},
    {id: 3, tag: 3, nome: "Preparo de Solo", level: "1", ativo: true},
    {id: 4, tag: 4, nome: "Semente Mecanizada", level: "1", ativo: true},
    {id: 5, tag: 5, nome: "Plantio Mecanizado", level: "1", ativo: true},
    {id: 6, tag: 6, nome: "Tratos Culturais", level: "1", ativo: true},
    {id: 7, tag: 7, nome: "IUP - Índice de Uniformidade do Plantio", level: "1", ativo: true},
    {id: 8, tag: 8, nome: "Infestação Final - Broca", level: "1", ativo: true},
    {id: 9, tag: 9, nome: "Irrigação", level: "1", ativo: true},
]


const Autorizado = [
    {id: 0, liberado: [0,1,2,3,4,5,6,7,8,9]},//Adm
    {id: 1, liberado: [0,1,2,3,4,5,6,7,8,9]},//Paulo
    {id: 2, liberado: [0,1,2,3,4,5,6,7,8,9]},//Romário
    {id: 3, liberado: [0,1,2,3,4,5,6,7,8,9]},//Felipe
    {id: 4, liberado: [1,2,3,4,5,6,7,8,9]},//Agrovale
    {id: 5, liberado: [1,2,3,4,5,6,7,8,9]},//Ednei
    {id: 6, liberado: [0,1,2,3,4,5,6,7,8,9]},//Jackson
    {id: 7, liberado: [1,2,3,4,5,6,7,8,9]},//Paulo Ricardo - Superintendente
]



function creatlistprincipal(){
    let Ativo;
    let list = document.querySelector("#listPrincipal")
    let level = localStorage.getItem("target_Level")
    let nickID = localStorage.getItem("target_id")
    let listconstruct = "";
    let idfind;

    let listaLiberada = Autorizado.filter(item => item.id == nickID)
    let tabela = listaLiberada[0].liberado


    switch(level){
        case "0":
            for(let i=0; i<Grupo.length; i++){
                idfind = Grupo[i].id
                Ativo = Grupo[i].ativo
                if(Ativo==true){
                    
                    let verificarLiberaco = tabela.filter(item => item == idfind)
            
                    if(verificarLiberaco.length>0){
                        listconstruct = listconstruct + "<li><button class='bt_list' onclick='tagList("+Grupo[i].tag+","+Grupo[i].id+")'>" + Grupo[i].nome + "</button></li>"
                            
                    }else{
                        listconstruct = listconstruct + "<li><button class='bt_list_off'>" + Grupo[i].nome + "</button></li>"
                    }
                
                }
            }
             break
        case "1":
            for(let i=0; i<Grupo.length; i++){
                Ativo = Grupo[i].ativo
                idfind = Grupo[i].id
                if(Grupo[i].level == "1" && Ativo==true){
                    
                    let verificarLiberaco = tabela.filter(item => item == idfind)
            
                    if(verificarLiberaco.length>0){
                        listconstruct = listconstruct + "<li><button class='bt_list' onclick='tagList("+Grupo[i].tag+","+Grupo[i].id+")'>" + Grupo[i].nome + "</button></li>"
                            
                    }else{
                        listconstruct = listconstruct + "<li><button class='bt_list_off'>" + Grupo[i].nome + "</button></li>"
                    }
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
    //let Ativo;
    let tag_seletion = localStorage.getItem("target_Tag")
    let titulo = localStorage.getItem("target_Titulo")

    let list = document.querySelector("#listRel")
    let listIndic = document.querySelector("#listIndic")
    let title = document.querySelector("#titulo_list")
    let listconstruct = "";
    let Indicconstuct = "";

    document.title = "AgroTarget - " + Grupo[tag_seletion].nome

    let ListaRelatorios = Relatorios.filter((item)=> item.tag == tag_seletion && item.ativo == true && item.tipo == 1)
    console.log(ListaRelatorios)
    for(let i=0; i<ListaRelatorios.length; i++){
        //Ativo = Relatorios[i].ativo
        //if(Ativo==true){
            listconstruct = listconstruct + "<button class='bt_relatorios' onclick='loadDash("+ListaRelatorios[i].id+")'>" + ListaRelatorios[i].relatorio + "</button>"
        //}
    }

    let ListaIndicadores = Relatorios.filter((item)=> item.tag == tag_seletion && item.ativo == true && item.tipo == 2)
    for(let i=0; i<ListaIndicadores.length; i++){
        //Ativo = Relatorios[i].ativo
        //if(Ativo==true){
            Indicconstuct = Indicconstuct + "<button class='bt_relatorios bt_indic' onclick='loadDash("+ListaIndicadores[i].id+")'>" + ListaIndicadores[i].relatorio + "</button>"
        //}
    }

    list.innerHTML = ""
    list.innerHTML = listconstruct

    listIndic.innerHTML = ""
    listIndic.innerHTML = Indicconstuct

    title.innerHTML = Grupo[titulo].nome
}



function loadDash(id){

    localStorage.setItem("target_IDrelatorio",id)
    window.location.assign("../dash.html") 
}

function creatDash(){
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;


    let urlRelatorio;
    let idRelatorio = localStorage.getItem("target_IDrelatorio")
    let Relatorio = Relatorios.filter((item) => item.id == idRelatorio)
    let titulo = document.querySelector("#tituloDash")
    let dash = document.querySelector("#iframeView")


    document.title = Relatorio[0].relatorio
    let tituloRelatorio = Relatorio[0].relatorio
    
    if(larguraTela>600){
        if(Relatorio[0].url_full){
            urlRelatorio = Relatorio[0].url_full
        }else{
            urlRelatorio = Relatorio[0].url
            titulo.innerHTML = tituloRelatorio
        }
    }else{
        titulo.innerHTML = tituloRelatorio
        urlRelatorio = Relatorio[0].url
    }
    

    if(urlRelatorio.length == 0){
        urlRelatorio = "../src/erro/erro.html"
    }
    
    dash.src = urlRelatorio

}
