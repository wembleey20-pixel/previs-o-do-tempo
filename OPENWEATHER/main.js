const key= "c2793ae25c0d4ba56edebf8a4f92765f"


function pesquisarCidade(){
    let cidade = document.getElementById("cidade").value
    console.log(cidade);
    dadosAPI(cidade)

}

async function dadosAPI(cidade) {
let dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`).then(response=>response.json())
console.log(dados);
trocarDados(dados)
}

function trocarDados(dados){
document.getElementById("nome-cidade").innerHTML = "Tempo em:" + dados.name
document.getElementById("temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC"
document.getElementById("umidade").innerHTML = "umidade Relativa do ar:" + dados.main.humidity + "%"
document.getElementById("img-icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}09d@2x.png`
}