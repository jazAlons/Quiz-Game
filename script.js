// DOM ELEMENTS
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions = [
    {
        question: "¿Cuál es el nombre oficial de la Ciudad de México?",
        answers: [
            { text: "A) Ciudad Federal", correct: false },
            { text: "B) Distrito Nacional", correct: false },
            { text: "C) Ciudad de México (CDMX)", correct: true },
            { text: "D) Capital Mexicana", correct: false }
        ]
    },
    {
        question: "¿Cuál es el edificio más alto de la Ciudad de México en 2024?",
        answers: [
            { text: "A) Torre Latinoamericana", correct: false },
            { text: "B) World Trade Center", correct: false },
            { text: "C) Torre Reforma", correct: true },
            { text: "D) Torre Mayor", correct: false }
        ]
    },
    {
        question: "¿Qué importante zona arqueológica se encuentra dentro de la Ciudad de México?",
        answers: [
            { text: "A) Teotihuacán", correct: false },
            { text: "B) Templo Mayor", correct: true },
            { text: "C) Monte Álban", correct: false },
            { text: "D) Chichén Itzá", correct: false }
        ]
    },
    {
        question: "¿En qué alcaldía se encuentra la UNAM (Ciudad Universitaria)?",
        answers: [
            { text: "A) Miguel Hidalgo", correct: false },
            { text: "B) Coyoacán", correct: true },
            { text: "C) Benito Juárez", correct: false },
            { text: "D) Tlalpan", correct: false }
        ]
    },
    {
        question: "¿Cuál es el bosque urbano más grande de la Ciudad de México?",
        answers: [
            { text: "A) Parque Hundido", correct: false },
            { text: "B) Bosque de Chapultepec", correct: true },
            { text: "C) Parque México", correct: false },
            { text: "D) Viveros de Coyoacán", correct: false }
        ]
    }
];

// QUIZ STATE VARS

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length

// event listeners

startButton.addEventListener("click", statQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz(){
    console.log("quiz starded");
}

function restartQuiz(){
    console.log("quiz re-started");
}