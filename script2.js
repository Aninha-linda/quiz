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
                    texto: " Quebrar a outra perna da Maísa, mas a sua perna também quebrará ",
                    afirmacao: "afirmação",
                },

                {
                    texto: " Aumentar o grau de daltonismo do Rodrigo, mas você ficará cego",
                    afirmacao: "afirmação",
                }]
    },
    {
        enunciado: "no ambito ambiental, voce prefere:",
        alternativas:
            [

                {
                    texto: " Salvar os ursos polares no Ártico e extinguir pandas",
                    afirmacao: "afirmação",
                },

                {
                    texto: " Salvar os ursos pandas na Ásia e extinguir ursos polares",
                    afirmacao: "afirmação",
                }]
    },
    {
        enunciado: "no ambito tecnologico, voce prefere:",
        alternativas:
            [

                {
                    texto: " Ser fã de carteirinha do Elon Musk e perder todo o seu dinheiro em bitcoin ",
                    afirmacao: "afirmação",
                },

                {
                    texto: " Morrer sendo atingido por um drone de entregas da Amazon ",
                    afirmacao: "afirmação",
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
