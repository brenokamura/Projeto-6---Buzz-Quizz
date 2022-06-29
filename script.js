const API = "https://mock-api.driven.com.br/api/v4/buzzquizz";



function obterQuizzes() {
    const promise = axios.get(`${API}/quizzes`);
    promise.then(renderizarQuizzes)
    promise.catch(() => alert("Erro coleta de dados API"))
}
