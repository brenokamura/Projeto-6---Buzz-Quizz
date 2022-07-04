<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <link href="reset.css" rel="stylesheet" />
    <link href="style.css" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="imgs\favicon.ico">

    <title>BuzzQuizz</title>

</head>

<body>
    <header class="topo">
        <h1>BuzzQuizz</h1>
    </header>
    <main class="tela-1 ">
        <div class="criar-quizz">
            <h1>Você não criou nenhum quizz ainda 😕</h1>
            <button onclick="telaCriarQuizz()">Criar Quizz</button>
        </div>
        <div class="todos-quizzes">
            <h1>Todos os Quizzes</h1>
            <div class="imagem-container">
            </div>
        </div>

    </main>

    <main class="tela-2 escondido">
        <div class="seus-quizzes">
            <div class="icone-container">
                <h1>Seus Quizzes</h1>
                <ion-icon class="add_quizz_icon" name="add-circle" onclick="telaCriarQuizz()"></ion-icon>
            </div>
            <div class="imagem-container">
            </div>
        </div>
        <div class="todos-quizzes">
            <div class="container_add_img">
                <h1>Todos os Quizzes</h1>
            </div>
            <div class="imagem-container">
            </div>
        </div>
    </main>

    <main class="tela-quizzes escondido">
    </main>

    <main class="tela-3">
        <div class="container-3">
            <div class="infos-basicas-quizz escondido">
                <p class="titulo-infos-basicas">Comece pelo começo</p>
                <div class="caixa-infos-basicas">
                    <div><input type="text" class="input-titulo-quizz" placeholder="Título do seu quizz"></input></div>
                    <div><input type="text" class="input-imagem-quizz" placeholder="URL da imagem do seu quizz"></input>
                    </div>
                    <div><input type="text" class="input-qtd-perguntas-quizz"
                            placeholder="Quantidade de perguntas do quizz"></input></div>
                    <div><input type="text" class="input-qtd-niveis-quizz"
                            placeholder="Quantidade de níveis do quizz"></input></div>
                </div>
                <div class="botao-criar-perguntas"><button onclick="enviarInfosBasicas()">Prosseguir pra criar
                        perguntas</button></div>
            </div>
        </div>
    </main>
    <main class="tela-3-niveis escondido">
        <div class="container-3">
            <p class="titulo-tela-niveis">Agora, decida os níveis</p>

        </div>
    </main>
    <main>
        <div class="tela-3-quizz-pronto escondido">
            <div class="container-3">
                <p class="titulo-quizz-prontos">Seu quizz está pronto!</p>
           
            </div>

        </div>
    </main>



    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="script.js"></script>
</body>

</html>

On Mon, Jul 4, 2022 at 3:00 PM Kassia Guterres <kassia.guterres@acad.pucrs.br> wrote:
Oii essa é a ultima versão do js com a tela que etsava faltando

const API = "https://mock-api.driven.com.br/api/v7/buzzquizz";

// let imagemURL = document.querySelector(".input-imagem-quizz").value;
let quantidadePerguntas = 0;
let quantidadeNiveis = 0;
let tituloQuizz = "";
let imagemQuizz = "";
let perguntas = [];
let niveis = [];



function obterQuizzes() {
    const promise = axios.get(`${API}/quizzes`);
    promise.then(renderizarQuizzes)
    promise.catch(() => alert("Erro coleta de dados API"))
}

function tituloValido() {

    tituloQuizz = document.querySelector(".input-titulo-quizz").value;

    if (tituloQuizz.length >= 20 && tituloQuizz.length <= 65) {
        return true;
    }
    else {
        return false;

    }
}
function imagemValida(url) {

    let res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null);

}

function quantidadePerguntasValidas() {

    quantidadePerguntas = parseInt(document.querySelector(".input-qtd-perguntas-quizz").value);

    if (quantidadePerguntas >= 3) {
        return true;
    } else {
        return false;
    }
}

function quantidadeNiveisValidos() {

    quantidadeNiveis = parseInt(document.querySelector(".input-qtd-niveis-quizz").value);

    if (quantidadeNiveis >= 2) {
        // console.log("ok");
        return true;

    } else {
        // console.log("erro")
        return false;
    }
}

function enviarInfosBasicas() {

    imagemQuizz = document.querySelector(".input-imagem-quizz").value;

    /*const tituloPergunta = tituloValido();
    const imagemPergunta = imagemValida(imagemURL);
    const quantidadePerguntas = quantidadePerguntasValidas();
    const niveisPerguntas = quantidadeNiveisValidos();
    */


    if (tituloValido() && imagemValida(imagemQuizz) && quantidadePerguntasValidas() && quantidadeNiveisValidos()) {
        criarPerguntas();
    } else {
        alert("Verifique os campos! \n O título deve ter entre 20 e 65 caracteres!\n A imagem deve ser uma URL válida! \n A quantidade mínima de perguntas é 3! \n A quantidade mínima de níveis é 2!");
    }
}


function criarPerguntas() {
    //let quantidadePerguntas = parseInt(document.querySelector(".input-qtd-perguntas-quizz").value)

    const containerPerguntas = document.querySelector(".container-3");
    containerPerguntas.innerHTML = ` 
    <p class="titulo-tela-3">Crie suas perguntas</p>`;

    for (let i = 0; i < quantidadePerguntas; i++) {
        let numeroPergunta = i + 1;
        let ehPrimeiraPergunta = i === 0;
        let formCompleto = "escondido";
        let formFechado = "visivel";

        if (ehPrimeiraPergunta) {
            formCompleto = "";
            formFechado = "escondido";
        }

        containerPerguntas.innerHTML += `
       
            <div class="caixa-pergunta${numeroPergunta}  caixa-das-perguntas-fechada ${formFechado}" onclick="abrirFecharPergunta(${numeroPergunta})">
                <div class="pergunta-fechada"> Pergunta ${numeroPergunta}</div>
                <img src="Vector.png" class="icone-abrir-form ">
                 
            </div>
            <div class="caixa-pergunta${numeroPergunta}-completo caixa-das-perguntas ${formCompleto}">
                <form >
                    <div class="pergunta">
                        <div class="numero-pergunta">Pergunta ${numeroPergunta}</div>
                        <div><input type="text" class="input-pergunta-texto input-texto" placeholder="Texto da pergunta"></input></div>
                        <div><input type="text" class="input-pergunta-cor input-texto" placeholder="Cor de fundo da pergunta"></input></div>
                    </div>
                    <div class="respostas">
                        <div class="titulo-resposta-correta">Resposta correta</div>
                        <div><input type="text" class="input-resposta-texto input-texto" placeholder="Resposta correta"></input></div>
                        <div><input type="text" class="input-resposta-imagem input-texto input-imagem" placeholder="URL da imagem"></input></div>
                    </div>
                    <div class="respostas-incorretas">
                        <div class="titulo-resposta-incorreta">Respostas incorretas</div>
                        
                        <div><input type="text" class="resposta-incorreta-1 input-resposta-errada-texto input-texto" placeholder="Resposta incorreta 1"></input></div>
                        <div><input type="text" class="resposta-incorreta-1 input-resposta-errada-imagem input-texto input-imagem" placeholder="URL da imagem 1"></input></div>
                        
                        <div><input type="text" class="resposta-incorreta-2 input-resposta-errada-texto input-texto" placeholder="Resposta incorreta 2"></input></div>
                        <div><input type="text" class="resposta-incorreta-2 input-resposta-errada-imagem input-texto input-imagem" placeholder="URL da imagem 2"></input></div>
                        
                        <div><input type="text" class="resposta-incorreta-3 input-resposta-errada-texto input-texto" placeholder="Resposta incorreta 3"></input></div>
                        <div><input type="text" class="resposta-incorreta-3 input-resposta-errada-imagem input-texto input-imagem" placeholder="URL da imagem 3"></input></div>
                        
                        <div><input type="text" class="resposta-incorreta-4 input-resposta-errada-texto input-texto" placeholder="Resposta incorreta 4"></input></div>
                        <div><input type="text" class="resposta-incorreta-4 input-resposta-errada-imagem input-texto input-imagem" placeholder="URL da imagem 4"></input></div>
                    </div>
                </form> 
            </div>
            `

    }
    containerPerguntas.innerHTML += `
    <div><button onclick="enviarInfosPerguntas()" class="botao-prosseguir-niveis">Prosseguir pra criar níveis</button></div>;
    `
}

function textoPerguntaValido() {

    let textoPergunta = document.querySelector(".input-pergunta-texto").value;

    if (textoPergunta.lenght >= 20) {
        return true;
    }
    else {
        return false;
    }

}

function corValida() {

    let cor = document.querySelector(".input-pergunta-cor").value;
    if (cor.length !== 7) {
        return false;
    }

    for (let i = 0; i < cor.length; i++) {

        if (cor[0] !== "#") {
            return false;
        } else if (i !== 0 && (cor[i] > 9 || cor[i] !== "A" || cor[i] !== "B" || cor[i] !== "C" || cor[i] !== "D" || cor[i] !== "E" || cor[i] !== "F")) {
            return false;
        } else {
            return true;
        }
    }

}


function enviarInfosPerguntas() {
    let valido = true;

    
    for (let i = 0; i < quantidadePerguntas; i++) {
        let numeroPergunta = i + 1;
        let classePergunta = `.caixa-pergunta${numeroPergunta}-completo`;
        //Valida se texto da pergunta foi preenchido!
        let perguntaAtual = document.querySelector(classePergunta);
        let perguntaTexto = perguntaAtual.querySelector(".input-pergunta-texto");
        if (perguntaTexto.value === "" || perguntaTexto.value.length < 20) {
            valido = false;
            break;
        }
        //Valida a cor da pergunta
        let corPerguntaAtual = perguntaAtual.querySelector(".input-pergunta-cor");
        if (!corValida(corPerguntaAtual.value)) {
            valido = false;
            break;
        }
        //Valida respostas
        let respostas = [];
        //Parte correta
        let respostaCorretaAtual = perguntaAtual.querySelector(".input-resposta-texto");
        if (respostaCorretaAtual.value === "") {
            valido = false;
            break;
        }
        
        let imagemRespostaCorretaAtual = perguntaAtual.querySelector(".input-resposta-imagem");
        if (!imagemValida(imagemRespostaCorretaAtual.value)) {
            valido = false;
            break;
        }
        respostaCorretaObject = {
            text: respostaCorretaAtual.value,
            image: imagemRespostaCorretaAtual.value,
            isCorrectAnswer : true
        };
        respostas.push(respostaCorretaObject);
        //Respostas incorretas
        //Texto
        let textoRespostasIncorretas = perguntaAtual.querySelectorAll(".input-resposta-errada-texto");
        let respostasIncorretasPreenchidas = 0;
        for (let j = 0; j < textoRespostasIncorretas.length; j++) {
            
            let textoRespostaIncorretaAtual = textoRespostasIncorretas[j];
            if (textoRespostaIncorretaAtual.value !== undefined && textoRespostaIncorretaAtual.value !== "") {
                respostasIncorretasPreenchidas++;
                break;
            }
        }
        if (respostasIncorretasPreenchidas === 0) {
            valido = false;
            break;
        }
        //Imagem
        let imagemRespostasIncorretas = perguntaAtual.querySelectorAll(".input-resposta-errada-imagem");
        let imagensIncorretasPreenchidas = 0;
        for (let k = 0; k < imagemRespostasIncorretas.length; k++) {
            let imagemRespostaIncorretaAtual = imagemRespostasIncorretas[k];
            if (imagemValida(imagemRespostaIncorretaAtual.value)) {
                imagensIncorretasPreenchidas++;
                break;
            }
        }
        if (imagensIncorretasPreenchidas === 0) {
            valido = false;
            break;
        }
        
        for(let l=0; l < 4; l++) {
            let classeIncorretaTexto = `.resposta-incorreta-${l+1}.input-resposta-errada-texto`;
            let classeIncorretaImagem = `.resposta-incorreta-${l+1}.input-resposta-errada-imagem`;
            let texto = perguntaAtual.querySelector(classeIncorretaTexto);
            let imagem = perguntaAtual.querySelector(classeIncorretaImagem);
            let respostaIcorretaObject = {
                text: texto.value,
                image: imagem.value,
                isCorrectAnswer : false
            };
            respostas.push(respostaIcorretaObject);
        }
        perguntaObject = {
            title: perguntaTexto.value,
            color: corPerguntaAtual.value,
            answers: respostas,
        };
        perguntas.push(perguntaObject);
    }

    if (valido) {
        let tela3 = document.querySelector(".tela-3");
        tela3.classList.add("escondido");
        let telaNiveis = document.querySelector(".tela-3-niveis");
        telaNiveis.classList.remove("escondido");
        
        criarNiveis();
    } else {
        alert("Verifique os campos!");
    }
}


function abrirFecharPergunta(numeroPergunta) {
    let formfechado = document.querySelector(`.caixa-pergunta${numeroPergunta}`);
    formfechado.classList.add("escondido");
    formfechado.classList.remove("visivel")
    
    let formCompleto = document.querySelector(`.caixa-pergunta${numeroPergunta}-completo`);
    formCompleto.classList.remove("escondido");
    
}



function criarNiveis() {
    const containerNiveis = document.querySelector(".tela-3-niveis .container-3");
    for (let i = 0; i < quantidadeNiveis; i++) {
        let numeroNivel = i + 1;
        let ehPrimeiroNivel = i === 0;
        let formCompleto = "escondido";
        let formFechado = "visivel";
        
        if (ehPrimeiroNivel) {
            formCompleto = "";
            formFechado = "escondido";
        }
        containerNiveis.innerHTML += `
        <div class="caixa-nivel${numeroNivel} caixa-dos-niveis-fechada ${formFechado}" onclick="abrirFecharNivel(${numeroNivel})">
        <div class="numero-nivel-fechado">Nível ${numeroNivel}</div>
        <img src="Vector.png" class="icone-abrir-form">
        </div>
        <div class="caixa-nivel${numeroNivel}-completo caixa-dos-niveis ${formCompleto}">
        <div class="numero-nivel">Nível ${numeroNivel}</div>
        <div><input type="text" class="input-texto input-título-nivel" placeholder="Título do nível"></input></div>
        <div><input type="number" min="0" max="100" maxlength="3" class="input-texto input-acerto-minimo" placeholder="% de acerto mínima"></input></div>
        <div><input type="text"  class="input-texto input-imagem-nivel" placeholder="URL da imagem do nível"></input></div>
        <div><input type="text" class="input-texto input-descricao-nivel" placeholder="Descrição do nível"></input></div>
        </div>
        `;
        
    }
    
    containerNiveis.innerHTML += `
    <div><button onclick="enviarInfosNiveis()" class="botao-prosseguir-niveis">Finalizar Quizz</button></div>
    `;
    
}

function abrirFecharNivel(numeroNivel) {
    let formfechado = document.querySelector(`.caixa-nivel${numeroNivel}`);
    formfechado.classList.add("escondido");
    formfechado.classList.remove("visivel")
    
    let formCompleto = document.querySelector(`.caixa-nivel${numeroNivel}-completo`);
    formCompleto.classList.remove("escondido");
    
}

function enviarInfosNiveis() {
    let valido = true;
    
    let achaZero = 0;

    for (let i = 0; i < quantidadeNiveis; i++) {
        let numeroNivel = i + 1;
        let classeNivel = `.caixa-nivel${numeroNivel}-completo`;
        //Valida se texto da nivel foi preenchido!
        let nivelAtual = document.querySelector(classeNivel);
        let nivelTitulo = nivelAtual.querySelector(".input-título-nivel");
        if (nivelTitulo.value === "" || nivelTitulo.value.length < 10) {
            valido = false;
            break;
        }
        
        //Valida a % do acerto mínimo
        let acertoMinimoAtual = parseInt(nivelAtual.querySelector(".input-acerto-minimo").value);
        if (acertoMinimoAtual < 0 || acertoMinimoAtual > 100) {
            valido = false;
            break;
        } else if (acertoMinimoAtual === 0) {
            achaZero++;
        }
        //Valida url da imagem
        let imagemNivelAtual = nivelAtual.querySelector(".input-imagem-nivel");
        if (!imagemValida(imagemNivelAtual.value)) {
            valido = false;
            break;
        }
        //Valida descrição
        let descricaoNivelAtual = nivelAtual.querySelector(".input-descricao-nivel");
        if (descricaoNivelAtual.value === "" || descricaoNivelAtual.value.length < 30) {
            valido = false;
            break;
        }
        
        let nivelObject = {
            title: nivelTitulo.value,
            image: imagemNivelAtual.value,
            text: descricaoNivelAtual.value,
            minValue: acertoMinimoAtual,
        };

        niveis.push(nivelObject);
    }
    
    if (valido && achaZero > 0) {
        let quizzObject = {
            title: tituloQuizz,
            image: imagemQuizz,
            questions: perguntas,
            levels: niveis,
        }
        //console.log(quizzObject);
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", quizzObject);
        promise.then(finalizarQuiz); //Se enviou dados para o servidor, finaliza.
        promise.catch(erroEnviarServidor);//se não, exibe mensagem de erro.
        
        
    } else {
        alert("Verifique os campos!");
    }
}

function finalizarQuiz() {
    alert("Yeaaaaah");
    telaFinal = document.querySelector(".titulo-quizz-prontos");
    imagemFinal = document.querySelector(".input-resposta-imagem").value;
    telaFinal.innerHTML +=`
        <div class="quizz-pronto"><img src= ${imagemFinal}></div>
        <div class="botao-acessar-quizz"><button onclick ="telaDoisVisualizarQuizzes()">Acessar Quizz</button></div>
        <p class="final-pagina" onclick="voltarTela1()">Voltar pra home</p>
    `
    
}
function erroEnviarServidor(error) {
    alert("Não foi possível enviar os dados para o servidor");
}

function voltarTela1(){
    let voltarHome = document.querySelector(".titulo-quizz-prontos");
    voltarHome.classList.add("escondido");

    tela1 = document.querySelector(".tela-1");
    tela1.classList.remove("escondido");
}

function telaDoisVisualizarQuizzes(){
    let saiTelaFinal = document.querySelector(".titulo-quizz-prontos");
    saiTelaFinal.classList.add("escondido");
    
    let tela2 = document.querySelector(".tela-2");
    tela2.classList.remove("escondido");
}

On Mon, Jul 4, 2022 at 10:03 AM Kassia Guterres <kassia.guterres@acad.pucrs.br> wrote:
const API = "https://mock-api.driven.com.br/api/v7/buzzquizz";

// let imagemURL = document.querySelector(".input-imagem-quizz").value;
let quantidadePerguntas = 0;
let quantidadeNiveis = 0;
let tituloQuizz = "";
let imagemQuizz = "";
let perguntas = [];
let niveis = [];



function obterQuizzes() {
    const promise = axios.get(`${API}/quizzes`);
    promise.then(renderizarQuizzes)
    promise.catch(() => alert("Erro coleta de dados API"))
}

function tituloValido() {

    tituloQuizz = document.querySelector(".input-titulo-quizz").value;

    if (tituloQuizz.length >= 20 && tituloQuizz.length <= 65) {
        return true;
    }
    else {
        return false;

    }
}
function imagemValida(url) {

    let res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*
