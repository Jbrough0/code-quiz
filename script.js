var score=0
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timeEl =document.getElementById('time')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    
    
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    if (!question){
alert("you answered"+score+"/" +questions.length);
return;
    }
    
    questionElement.innerText = question.question
    answerButtonsElement.innerHTML=""
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
       
        

    })
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    
    console.log (selectedButton, correct)  
    if(correct) {
        score++;
    alert("Correct!");
    } else {
        alert("Wrong!");

    }
//alert("you answered"+score+"/" +questions.length);
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    currentQuestionIndex++
setNextQuestion()
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'What form of coding best shows and represents the style of a webpage?',
        answers: [
            { text: 'JPEG', correct: false },
            { text: 'HTML', correct: false },
            { text: 'CSS', correct: true },
            { text: 'JavaScript', correct: false },

        ]
    },
    {
        question: 'What is not an example of an HTML tag?',
        answers: [
            { text: 'Script', correct: false },
            { text: '.background', correct: true },
            { text: 'CSS', correct: false },
            { text: 'JavaScript', correct: false },

        ]
    },
    {
        question: 'What tag does copyright information go into?',
        answers: [
            { text: 'footer', correct: true },
            { text: 'HTML', correct: false },
            { text: 'CSS', correct: false },
            { text: 'JavaScript', correct: false },

        ]
    },
    {
        question: 'What Javascript style do we use to group elements together?',
        answers: [
            { text: 'variable', correct: false },
            { text: 'Array', correct: true },
            { text: 'get elementbyid', correct: false },
            { text: 'article', correct: false },

        ]
    },

    {
        question: 'What HTML tag helps divide blocks of code that also assist us when creating our CSS?',
        answers: [
            { text: 'script', correct: false },
            { text: 'header', correct: false },
            { text: 'body', correct: false },
            { text: 'class', correct: true },

        ]

    }
]

var secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent= secondsLeft + " seconds left";
      if (secondsLeft == 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "";
        
    }
}, 1000);
                    }
setTime();

