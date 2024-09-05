const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');


const perguntas = [
    {
        enunciado: "no ambito social, voce prefere:",
        alternativas:
            [

                {
                    texto: " Quebrar a perna do Rodrigo, mas a sua perna também quebrará ",
                    afirmacao: " Parabéns!! Espero que você esteja aproveitando sua botinha e fisioterapia,",
                },

                {
                    texto: " Aumentar o grau de daltonismo do Rodrigo, mas você ficará cego",
                    afirmacao: "Parabéns!! Espero que você esteja aproveitando seu curso de Braile e seu novo amigo Guido, o cão-guia, ",
                }]
    },
    {
        enunciado: "no ambito ambiental, voce prefere:",
        alternativas:
            [

                {
                    texto: " Salvar os ursos polares no Ártico e extinguir pandas",
                    afirmacao: " porém, agora o mundo está triste sem os vídeos de pandas rolando",
                },

                {
                    texto: " Salvar os ursos pandas na Ásia e extinguir ursos polares",
                    afirmacao: " porém, agora a Coca-Cola perdeu seu mascote, e faliram.",
                }]
    },
    {
        enunciado: "no ambito tecnologico, voce prefere:",
        alternativas:
            [

                {
                    texto: " Ser bestfriend do Elon Musk, mas perder todo o seu dinheiro em bitcoin ",
                    afirmacao: " Por fim, após perder toda a sua riquesa em moedas virtuais, Elon Musk te abandonou (ele não gosta de pobre).",
                },

                {
                    texto: "Viajar para Roma, mas morrer sendo atingido por um drone de entregas da Amazon ",
                    afirmacao: " Por fim, após a sua morte, seus familiares não pagam mais frete na AMAZON e nem passagens áreas para a Roma!",
                }]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas () {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(alternativa) {
    const afirmacoes = alternativa.afirmacao;
    historiaFinal +=  afirmacoes +" ";
    atual++;
    mostraPerguntas();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Resultado final do jogo de escolhas:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPerguntas();
