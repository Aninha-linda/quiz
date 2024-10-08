const caixaprincipal = document.querySelector('.caixa-principal');
const caixaperguntas = document.querySelector('.caixa-perguntas');
const caixaalternativas = document.querySelector('.caixa-alternativas');
const caixaresultados = document.querySelector('.caixa-resultado');
const textoresultados = document.querySelector('.texto-resultado');

const perguntas = [

    {
        enunciado: "no ambito social, voce prefere:",
        alternativas:
            [

                {
                    texto: "conseguir a carreira dos sonhos e nunca mais poder faltar trabalho nem tirar férias, com um salário ótimo ",
                    afirmacao: "afirmação",
                },

                {
                    texto: "passar na faculdade que você preferir,  nunca poder exercer o que você cursou,  trabalhar com algo que você odeia e tirar férias a cada 3 meses",
                    afirmacao: "afirmação",
                }]
    },
    {
        enunciado: "no ambito ambiental, voce prefere:",
        alternativas:
            [

                {
                    texto: "poder eliminar o desmatamento na amazônia e nunca mais poder realizar um sonho seu",
                    afirmacao: "afirmação",
                },

                {
                    texto: "poder realizar um sonho na hora que quiser e morrer com o aumento do aquecimento global 1 semana depois  (você não pode desejar acabar com o aquecimento global)",
                    afirmacao: "afirmação",
                }]
    },
    {
        enunciado: "no ambito tecnologico, voce prefere:",
        alternativas:
            [

                {
                    texto: "a tecnologia avançar em um nível as pessoas não precisem fazer esforços físicos porém todos os seus dados e vida pessoal serão expostos ",
                    afirmacao: "afirmação",
                },

                {
                    texto: "A tecnologia encontrar a cura para todas as doenças porém começaram a ser criados robôs para exilar a humanidade ",
                    afirmacao: "afirmação",
                }]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){
    if(atual >= perguntas.length){
        mostraAlternativas();
        return;
    }
    perguntaAtual= perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    caixaalternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas)
    { const botaoAlternativa = document.createElement ("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada (alternativa));
        caixaalternativas.appendChild(botaoAlternativa);
    }

}

function respostaSelecionada (alternativa){
    const afirmacoes = alternativa . afirmacao;
    historiaFinal+= afirmacoes +" "
    atual++;
    mostraPerguntas ();
}

function mostraAlternativas(){
    caixaperguntas.textContent = "Em resumo, você escolheu..."
    textoresultados.textContent = historiaFinal;
    caixaalternativas.textContent = " ";
}

mostraPerguntas();
