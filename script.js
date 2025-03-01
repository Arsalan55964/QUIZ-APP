const questions=[
    {
        question:"Which is the largest animal in the world? ",
        answer:[
            {text: "Shark" , correct: false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },
    {
        question:"Which is the smallest country in the world? ",
        answer:[
            {text: "vatican city" , correct: true},
            {text: "Bhutan" , correct: false},
            {text: "Nepal" , correct: false},
            {text: "sirilanka" , correct: false},
        ]
    },
    {
        question:"Which is the largest desert in the world? ",
        answer:[
            {text: "kalahari" , correct: false},
            {text: "Gobi" , correct: false},
            {text: "sahara" , correct: false},
            {text: "antartica" , correct: true},
        ]
    },
    {
        question:"Which is the smallest continent in the world? ",
        answer:[
            {text: "asia" , correct: false},
            {text: "Australia" , correct: true},
            {text: "arctic" , correct: false},
            {text: "africa" , correct: false},
        ]
    }

];

const questionElement = document.getElementById("question");

const answerbuttons= document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score  = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct ===  "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `you score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
 }

 function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click" , () => {
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
 })
startQuiz();


