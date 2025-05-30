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

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz(){
    
    // reset vars
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}


function showQuestion(){
    // reset state

    answerDisabled = false
    const currentQuestion = quizQuestions[currentQuestionIndex]

    currentQuestionSpan.textContent= currentQuestionIndex + 1

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;

    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    })
}

function selectAnswer(event){
    if(answerDisabled) return

    answerDisabled = true

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"

    Array.from(answersContainer.children).forEach((button) => {
    if(button.dataset.correct=="true"){
        button.classList.add("correct");
    } else if (button === selectedButton){
        button.classList.add("incorrect");
    }
});
    if(isCorrect){
        score++;
        scoreSpan.textContent = score
    }

    setTimeout(() =>{
        currentQuestionIndex++;
        // check if there are more questions or if the quiz is over
        if(currentQuestionIndex < quizQuestions.length){
            showQuestion()
        } else{
           showResults() 
        }
    }, 1000)
}

function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100

    if (percentage === 100) {
    resultMessage.textContent = "¡Perfecto! Has respondido todas las preguntas correctamente.";
    } else if (percentage >= 80) {
        resultMessage.textContent = "¡Buen trabajo! Estás muy cerca de la perfección.";
    } else if (percentage >= 60) {
        resultMessage.textContent = "¡Buen esfuerzo! Sigue practicando para mejorar aún más.";
    } else if (percentage >= 40) {
        resultMessage.textContent = "¡Nada mal! Continúa intentándolo y mejorarás.";
    } else {
        resultMessage.textContent = "No te desanimes. Sigue estudiando y verás tu progreso.";
}
}

function restartQuiz(){
    resultScreen.classList.remove("active");
    startQuiz();

}