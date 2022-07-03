const API = "https://mock-api.driven.com.br/api/v7/buzzquizz";

// let imagemURL = document.querySelector(".imput-imagem-quizz").value;

function obterQuizzes() {
    const promise = axios.get(`${API}/quizzes`);
    promise.then(renderizarQuizzes)
    promise.catch(() => alert("Erro coleta de dados API"))
}

// function renderizarQuizzes() {

//     let tela1 = document.querySelector(".telas");
//     tela1.innerHTML = ` 
//     <div class="tela-um">
//             <header class="topo">BuzzQuizz</header>
//             <div class="conteudo">
//                 <div class="quizzes-do-usuario">
//                     <p>Você não criou nenhum <br> quizz ainda :(</p>
//                     <button class="criar-quizz" onclick="criarQuizz()">Criar Quizz</button>
//                 </div>
//             </div>

//             <div class="todos-quizzes">
//                 <div class="titulo-todos-quizzes">Todos os Quizzes</div>
//                 <div class="container-todos-quizzes">

//                 </div>
//             </div>
//         </div>
//      `
//     let todosQuizzes = document.querySelector(".todos-quizzes");
//     todosQuizzes.innerHTML 


// <div class="quizz" onclick="telaDois(this)">
//     <img src="erased-thumb.jpg" class="imagem-quizz">
//         <div class="nome-quizz">O quanto você conhece Erased?</div>
// </div>

// }
function renderizarTelaTresInfosBasicas() {

    // <div class="tela-tres">
    //         <div class="informacoes-basicas">
    //             <header class="topo">BuzzQuizz</header>
    //            <p class="titulo-tela-3">Comece pelo começo</p>
    //             <div class="caixa-infos-basicas">
    //                 <div><textarea class="imput-titulo-quizz" placeholder="Título do seu quizz"></textarea></div>
    //                 <div><textarea class="imput-imagem-quizz" placeholder="URL da imagem do seu quizz"></textarea></div>
    //                 <div><textarea  class="imput-qtd-perguntas-quizz" placeholder="Quantidade de perguntas do quizz"></textarea></div>
    //                 <div><textarea  class="imput-qtd-niveis-quizz" placeholder="Quantidade de níveis do quizz"></textarea></div>
    //             </div>
    //             <div class="botao-criar-perguntas"><button>Prosseguir pra criar perguntas</button></div>

    //         </div>
    // </div>
}

function tituloValido() {

    let tituloQuizz = document.querySelector(".imput-titulo-quizz").value;

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

    let quantidadePerguntas = parseInt(document.querySelector(".imput-qtd-perguntas-quizz").value);

    if (quantidadePerguntas >= 3) {
        return true;
    } else {
        return false;
    }
}

function quantidadeNiveisValidos() {

    let quantidadeNiveis = parseInt(document.querySelector(".imput-qtd-niveis-quizz").value);

    if (quantidadeNiveis >= 2) {
        // console.log("ok");
        return true;

    } else {
        // console.log("erro")
        return false;
    }
}

function enviarInfosBasicas() {

    let imagemURL = document.querySelector(".imput-imagem-quizz").value;

    const tituloPergunta = tituloValido();
    const imagemPergunta = imagemValida(imagemURL);
    const quantidadePerguntas = quantidadePerguntasValidas();
    const niveisPerguntas = quantidadeNiveisValidos();


    if (tituloPergunta === true && imagemPergunta === true && quantidadePerguntas === true && niveisPerguntas === true) {
        // mudarPaginaUm(); 
        alert("foi");
        criarPerguntas();
    } else {
        alert("Verifique os campos! \n O título deve ter entre 20 e 65 caracteres!\n A imagem deve ser uma URL válida! \n A quantidade mínima de perguntas é 3! \n A quantidade mínima de níveis é 2!");
    }
}


function criarPerguntas() {
    let quantidadePerguntas = parseInt(document.querySelector(".imput-qtd-perguntas-quizz").value)

    const containerPerguntas = document.querySelector(".container-3");
    containerPerguntas.innerHTML = ` 
    <p class="titulo-tela-3">Crie suas perguntas</p>
    <form class="caixa-das-perguntas">
                <div class="pergunta">
                    <div class="numero-pergunta">Pergunta 1</div>
                    <div><textarea class="imput-pergunta-texto" placeholder="Texto da pergunta"></textarea></div>
                    <div><textarea class="imput-pergunta-cor" placeholder="Cor de fundo da pergunta"></textarea></div>
                </div>
                <div class="respostas">
                    <div class="titulo-resposta-correta">Resposta correta</div>
                    <div><textarea class="imput-resposta" placeholder="Resposta correta"></textarea></div>
                    <div><textarea class="imput-resposta" placeholder="URL da imagem"></textarea></div>
                </div>
                <div class="respostas-incorretas">
                    <div class="titulo-resposta-incorreta">Respostas incorretas</div>
                    <div><textarea class="imput-resposta-errada" placeholder="Resposta incorreta 1"></textarea>
                    </div>
                    <div><textarea class="imput-resposta-errada" placeholder="URL da imagem 1"></textarea></div>
                    <div><textarea class="imput-resposta-errada" placeholder="Resposta incorreta 2"></textarea>
                    </div>
                    <div><textarea class="imput-resposta-errada" placeholder="URL da imagem 2"></textarea></div>
                    <div><textarea class="imput-resposta-errada" placeholder="Resposta incorreta 3"></textarea>
                    </div>
                    <div><textarea class="imput-resposta-errada" placeholder="URL da imagem 3"></textarea></div>
                    <div><textarea class="imput-resposta-errada" placeholder="Resposta incorreta 4"></textarea>
                    </div>
                    <div><textarea class="imput-resposta-errada" placeholder="URL da imagem 4"></textarea></div>
                </div>
            </form> `;

    for (let i = 2; i < quantidadePerguntas + 1; i++) {
        containerPerguntas.innerHTML += `
        <form class="caixa-das-perguntas-fehada caixa-pergunta${i} ">
                <div class="pergunta-fechada"> Pergunta ${i}</div>
                <img src="Vector.png" class="icone-abrir-form onclick="abrirFecharPergunta(this, ${i})">
        </form> 
        <form class="caixa-das-perguntas escondido">
                <div class="pergunta">
                    <div class="pergunta-fechada">Pergunta ${i}</div>
                    <div><textarea class="imput-pergunta" placeholder="Texto da pergunta"></textarea></div>
                    <div><textarea class="imput-pergunta" placeholder="Cor de fundo da pergunta"></textarea></div>
                </div>
                <div class="respostas">
                    <div class="titulo-resposta-correta">Resposta correta</div>
                    <div><textarea class="imput-resposta-texto" placeholder="Resposta correta"></textarea></div>
                    <div><textarea class="imput-resposta-imagem" placeholder="URL da imagem"></textarea></div>
                </div>
                <div class="respostas-incorretas">
                    <div class="titulo-resposta-incorreta">Respostas incorretas</div>
                    <div><textarea class="imput-resposta-errada-texto" placeholder="Resposta incorreta 1"></textarea>
                    </div>
                    <div><textarea class="imput-resposta-errada-imagem" placeholder="URL da imagem 1"></textarea></div>
                    <div><textarea class="imput-resposta-errada-texto" placeholder="Resposta incorreta 2"></textarea>
                    </div>
                    <div><textarea class="imput-resposta-errada-imagem" placeholder="URL da imagem 2"></textarea></div>
                    <div><textarea class="imput-resposta-errada-texto" placeholder="Resposta incorreta 3"></textarea>
                    </div>
                    <div><textarea class="imput-resposta-errada-imagem" placeholder="URL da imagem 3"></textarea></div>
                    <div><textarea class="imput-resposta-errada-texto" placeholder="Resposta incorreta 4"></textarea>
                    </div>
                    <div><textarea class="imput-resposta-errada-imagem" placeholder="URL da imagem 4"></textarea></div>
                </div>
            </form> `

    }
}


function testes() {
    alert("teste");
}


function textoPerguntaValido() {

    let textoPergunta = document.querySelector(".imput-pergunta-texto").value;

    if (textoPergunta.lenght >= 20) {
        return true;
    }
    else {
        return false;
    }

}

function corValida() {

    let cor = document.querySelector(".imput-pergunta-cor").value;
    if (cor.length !== 7) {
        return false;
    }

    for (let i = 0; i < corPergunta.length; i++) {

        if (corPergunta[0] !== "#") {
            return false;
        } else if (i !== 0 && (cor[i] > 9 || cor[i] !== "A" || cor[i] !== "B" || cor[i] !== "C" || cor[i] !== "D" || cor[i] !== "E" || cor[i] !== "F")) {
            return false;
        } else {
            return true;
        }
    }

}

function verificaTextoPergunta() {


    for (let i = 1; i <= qtddPerguntas; i++) {
        const respCorreta = document.querySelector(`.edicao-pergunta-${i} .resposta-correta`).value;
        if (respCorreta !== "") {
            return true;
        } else {
            return false;
        }
    }


}