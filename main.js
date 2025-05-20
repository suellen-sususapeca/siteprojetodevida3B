const botoes = document.querySelectorAll (".botao");
const Textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i <botoes.length; i++){
    botoes [i].onclick = funcion (){

        for(let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        Textos[i].classList.add("ativo");
    };
} 

const computadores = document. querySelector ("contador");
const tempoObjetivo = new Date ("2025-05-06t00:00");