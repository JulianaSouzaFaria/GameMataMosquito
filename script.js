var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 2000

var nivel = window.location.search

var nivel = window.location.search
nivel = nivel.replace("?","")
if (nivel === "normal") {criaMosquitoTempo = 1500}
if (nivel === "dificil") {criaMosquitoTempo = 1000}
if (nivel === "chucknorris") {criaMosquitoTempo = 400}

function ajustaTamanhoTela() {
	
altura = window.innerHeight
largura = window.innerWidth

console.log(altura, largura)
}

ajustaTamanhoTela()

var cronometro = setInterval(function () {
	tempo -=1

	if (tempo < 0 ) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = "vitoria.html"
	}
	else{document.getElementById("cronometro").innerHTML = tempo}
		
}, 1000)

function posicaoRandomica(){

if (document.getElementById('mosquito')) {
	document.getElementById("mosquito").remove()

	if (vidas > 3) {
		window.location.href = "fim_de_jogo.html"

	}
	else{document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

	vidas++}


}

var posicaoX = Math.floor(Math.random() * largura) - 120
var posicaoY = Math.floor(Math.random() * altura) - 120

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar o elemento html
var mosquito = document.createElement("img")
mosquito.src = "imagens/mosca.png"
mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()

mosquito.style.left = posicaoX + "px"
mosquito.style.top = posicaoY + "px"
mosquito.style.position = "absolute"

mosquito.id = "mosquito"

mosquito.onclick = function () {
	this.remove()
}

document.body.appendChild(mosquito)
}

function tamanhoAleatorio (){
	var classe = Math.floor(Math.random() * 3)

	if (classe <= 0) {return "mosquito1"}
	if (classe <= 1) {return "mosquito2"}
	else {return "mosquito3"}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	if (classe <= 0) {return "ladoA"}
	else {return "ladoB"}
}

function iniciarJogo() {
	var nivel = document.getElementById("nivel").value

	if (nivel === "") {
		alert("Selecione um nível para iniciar o jogo")
		return false}
	window.location.href = "jogo.html?" + nivel
}