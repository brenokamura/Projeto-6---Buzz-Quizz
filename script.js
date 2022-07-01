const URL = "https://mock-api.driven.com.br/api/v4/buzzquizz";


function obterQuizzes() {
    const promise = axios.get(`${URL}/quizzes`);
    promise.then(renderizarQuizzes)
    promise.catch(() => alert("Erro coleta de dados API"))
}

<<<<<<< HEAD

function renderizarQuizzes(quizzes) {
const todosQuizzes = quizzes.data;
todosQuizzes.forEach(renderizarQuizz);
const myQuizzes = localStorage.getItem("meusQuizzes");
const objetoMeusQuizzes = JSON.parse(myQuizzes);
objetoMeusQuizzes.forEach(renderizarMeusQuizzes)
}

function renderizarMeusQuizzes(meuquizz) {
let titulo = meuquizz.title
let id = (meuquizz.id).toString()
let imagem = meuquizz.background_image
let quizzesTela2 = document.querySelector(".tela-2 .seus-quizzes .container_imgs")
quizzesTela2.innerHTML += `<div class="container_img" data-identifier="quizz-card"
style="background-image: url('${imagem}');" onclick="acessarQuizz(${id})"><span>${titulo}</span></div>`
}


function renderizarQuizz(quizz) {
const myQuizzes = localStorage.getItem("meusQuizzes");
const objetoMeusQuizzes = JSON.parse(myQuizzes);
let ids = []
if(objetoMeusQuizzes !== null)
for (let i = 0; i < objetoMeusQuizzes.length; i++) {
    let idquizz = objetoMeusQuizzes[i].id
    ids.push(idquizz)
}

    let id = (quizz.id)

    function testeIDS(elemento) {
            return elemento !== id;
}
if (ids.every(testeIDS) || localStorage === []) {
    let tituloQuizz = quizz.title;
    let coverQuizz = quizz.image;
    let idQuizz = (quizz.id).toString()
    let quizzesTela1 = document.querySelector(".tela-1 .container_imgs")
    let quizzesTela2 = document.querySelector(".tela-2 .todos-quizzes .container_imgs")
    quizzesTela1.innerHTML += `<div class="container_img" data-identifier="quizz-card" style="background-image: url('${coverQuizz}');" onclick="acessarQuizz(${idQuizz})"><span>${tituloQuizz}</span></div>`
    quizzesTela2.innerHTML += `<div class="container_img" data-identifier="quizz-card" style="background-image: url('${coverQuizz}');" onclick="acessarQuizz(${idQuizz})"><span>${tituloQuizz}</span></div>`
}

}

function acessarQuizz(idQuizz) {
let promise = axios.get(`${URL}/quizzes/${idQuizz}`);
promise.then(mostrarTelaQuizz)
promise.catch(()=> alert("Erro de acesso ao Quizz"))
}


function mostrarTelaQuizz(quizzData) {
let telaQuizz = document.querySelector(".tela-quizzes");
if (localStorage.length === 0 || localStorage === []) {
    let screen1 = document.querySelector(".tela-1")
    let telaQuizz = document.querySelector(".tela-quizzes");
    telaQuizz.classList.toggle("display-off")
    screen1.classList.toggle("display-off");
    window.scrollTo(0,0);
} else if (localStorage.length !== 0) {
    let screen2 = document.querySelector(".tela-2")
    let telaQuizz = document.querySelector(".tela-quizzes");
    telaQuizz.classList.toggle("display-off")
    screen2.classList.toggle("display-off");
    window.scrollTo(0,0);
}
    
data = quizzData.data
let imagemQuestao = data.image;
let tituloTopo = data.title;
telaQuizz.innerHTML += `<header class="header_quizzes_questions" style="background-image: url('${imagemQuestao}')"><span>${tituloTopo}</span></header>`
let questao = data.questions;
numeroQuestoes = questao.length
for (let i = 0; i < questao.length; i++) {
    let titleQuestion = questao[i].title;
    let backgroundColorQuestion = questao[i].color;
    telaQuizz.innerHTML += 
    `<section class="container_question">
        <div class="quizz_questions" data-identifier="question" style="background-color:${backgroundColorQuestion}">
            <span>${titleQuestion}</span>
        </div>
        <div class="options_question">
        </div>
    </section>` 
        let answers = questions[i].answers
        answers.sort(comparador); 
        function comparador() { 
	        return Math.random() - 0.5; 
        }
        for (let i = 0; i < answers.length; i++) {
            let textAnswer = answers[i].text;
            let imgAnswer = answers[i].image;
            let correctAnswer = (answers[i].isCorrectAnswer).toString();
            let optionQuestion = document.querySelectorAll(".container_question .options_question")
            optionQuestion[optionQuestion.length - 1].innerHTML += `<div class="question_img ${correctAnswer}" data-identifier="answer" onclick="destacarRespostaEscolhida(this)">
                    <div class="option_question_img" style="background-image:
                        url('${imgAnswer}')">
                    </div>
                    <p>${textAnswer}</p>
                </div>`
        }
    }
}

function telaCriarQuizz() {
    if (localStorage.length ===0) {
    document.querySelector(".tela-1").classList.add("display-off");
    document.querySelector(".main").classList.remove("display-off");
    document.querySelector(".tela_3-1").classList.remove("hidden");
} else if (localStorage.length !==0) {
    document.querySelector(".tela-2").classList.add("display-off");
    document.querySelector(".main").classList.remove("display-off");
    document.querySelector(".tela_3-1").classList.remove("hidden");
}
}


if (localStorage.length === 0) {
    document.querySelector(".tela-1").classList.remove("display-off")
} else {
    document.querySelector(".tela-2").classList.remove("display-off")
}

obterQuizzes();

=======
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
>>>>>>> 86d6065b9b3efe4467bc82c23968775fd86db5b4

