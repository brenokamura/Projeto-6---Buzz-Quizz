const API = "https://mock-api.driven.com.br/api/v4/buzzquizz";



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

