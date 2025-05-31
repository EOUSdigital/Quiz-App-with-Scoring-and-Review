//TODO 📚 Module 4 - Lesson 02.03.05 Creating a Function - Quiz App with Scoring and Review


const quizObject = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element, '<p id="demo">This is a demonstration.</p>'?",
        options: ["#demo.innerHTML = 'Hello World!'", "document.getElementById('demo').innerHTML = 'Hello World!'", "document.getElementById('p').innerHTML = 'Hello World!'", "document.getElement('p').innerHTML = 'Hello World!'"],
        answer: "document.getElementById('demo').innerHTML = 'Hello World!'"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <body> section", "Both the<head> section and the <body> section are correct", "The <head> section", "The <footer> section"],
        answer: "Both the<head> section and the <body> section are correct"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["<script href = 'xxx.js'>", "<script src = 'xxx.js'>", "<script name = 'xxx.js'>", "<script scr = 'xxx.js'>"],
        answer: "<script src = 'xxx.js'>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        options: ["true", "accurate", "false", "correct"],
        answer: "false"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('Hello World')", "msg('Hello World')", "msgBox('Hello World')", "alert('Hello World')"],
        answer: "alert('Hello World')"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "function - myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction()", "call function myFunction()", "myFunction()", "call myFunction function()"],
        answer: "myFunction()"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
        answer: "if (i == 5)"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: ["if i <> 5", "if (i != 5)", "if (i <> 5)", "if i =! 5 then"],
        answer: "if (i != 5)"
    },
    {
        question: "How does a WHILE loop start?",
        options: ["while (i <= 10)", "while (i <= 10; i++)", "while i = 1 to 10)", "while (i => 10)"],
        answer: "while (i <= 10)"
    },
    {
        question: "How does a FOR loop start?",
        options: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
        answer: "for (i = 0; i <= 5; i++)"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        options: ["<!-- This is a comment -->", "'This is a comment", "// This is a comment", "<* This is a comment *>"],
        answer: "// This is a comment"
    },
    {
        question: "How to insert a comment that has more than one line?",
        options: ["<!-- This comment has more than one line -->", "'This comment has more than one line", "// This comment has more than one line //", "/* This comment has more than one line */"],
        answer: "/* This comment has more than one line */"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = 'red', 'green', 'blue'", "var colors = 1 = 'red', 2 = 'green', 3 = 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1: 'red', 2: 'green', 3: 'blue')"],
        answer: "var colors = ['red', 'green', 'blue']"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["Math.round(7.25)", "rnd(7.25)", "round(7.25)", "Math.rnd(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        options: ["top(x, y)", "Math.ceil(x, y)", "Math.max(x, y)", "ceil(x, y)"],
        answer: "Math.max(x, y)"
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
        options: ["w2 = window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript'", "w2 = window.new('https://developer.mozilla.org/en-US/docs/Web/JavaScript'", "target = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript _blank'", "target = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
        answer: "w2 = window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript'"
    },
    {
        question: "JavaScript is the same as Java.",
        options: ["False", "exact", "factual", "True"],
        answer: "False"
    },
    {
        question: "How can you detect the client's browser name?",
        options: ["browser.name", "client.navName", "navigator.appName", "application.name"],
        answer: "navigator.appName"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseover", "onclick", "onchange", "on mouse click"],
        answer: "onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["var carName", "variable carName", "v carName", "va carName"],
        answer: "var carName"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["-", "*", "=", "+"],
        answer: "="
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        options: ["NaN", "false", "true", "undefined"],
        answer: "true"
    },
    {
        question: "Is JavaScript case-sensitive?",
        options: ["No", "Yes", "Maybe", "Impossible"],
        answer: "Yes"
    },
]

//! Pseudocode + Code solution

const header = document.getElementById("header");
const quizElements = document.getElementById("quiz-elements");
const score = document.getElementById("score-container");

// Buttons setup

const startBtn = document.getElementById("start-btn");

//  Add "Next" button login
const nextBtn = document.getElementById("next-btn");
const scoreBtn = document.getElementById("score-btn");
const resetBtn = document.getElementById("reset-btn");

//  Variable hoisted to the top of the scope

let currentQuestionIndex = 0;
let selectedAnswer = null;
let totalScore = 0;

//  Loop over options

const currentQuestion = quizObject[currentQuestionIndex];
const questionElement = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");

//  Clear previous option

choicesList.innerHTML = "";

//  For each option, create a <li>

function renderQuestion(index) {
    const question = quizObject[index];
    questionElement.textContent = `${index + 1}. ${question.question}`;
    choicesList.innerHTML = "";
    selectedAnswer = null;
    nextBtn.disabled = true;

    question.options.forEach(option => {
        const li = document.createElement("li");
        li.classList.add("quiz-answer");
        li.textContent = option;
        li.addEventListener("click", () => {
            document.querySelectorAll(".quiz-answer").forEach(el => el.classList.remove("selected"));
            li.classList.add("selected");
            selectedAnswer = option;
            nextBtn.disabled= false;
        });
        choicesList.appendChild(li);
    });
}

renderQuestion(currentQuestionIndex);

//  Hide buttons initially

nextBtn.style.display = "none";
resetBtn.style.display = "none";
scoreBtn.style.display = "none";

//? Triggers when the user clicks the "Start" button to begin the quiz.

startBtn.addEventListener("click", () => {
    header.style.display = "none";
    quizElements.style.display = "block";
    nextBtn.style.display = "inline-block";
    renderQuestion(currentQuestionIndex);
});

//? Triggers when user clicks the "Next" button to proceed to the next question.

nextBtn.addEventListener("click", () => {
    if (selectedAnswer === null) {
        alert("Please select an answer before continuing.");
        return;
    }

    if (selectedAnswer == quizObject[currentQuestionIndex].answer) {
        totalScore++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizObject.length - 1) {
        renderQuestion(currentQuestionIndex);
    } else {
        nextBtn.style.display = "none";
        scoreBtn.style.display = "inline-block";
    }
})

//? The system triggers when the user finishes the last question.

scoreBtn.addEventListener("click", () => {
    if (selectedAnswer === null) {
        alert("Please select an answer before scoring.")
        return;
    }

    const currentQuestion = quizObject[currentQuestionIndex];

    // Hide quiz block and show score
    quizElements.style.display = "none";
    score.style.display = "block";

     // Hide unnecessary buttons, show only reset
    nextBtn.style.display = "none";
    scoreBtn.style.display = "none";
    resetBtn.style.display = "inline-block";

    // Calculate and display score
    const totalQuestions = quizObject.length;
    const percentage = ((totalScore / totalQuestions) * 100).toFixed(2);

    document.getElementById("score-percentage").innerText = `${percentage}%`;
    document.getElementById("questions-answered").innerText = totalQuestions;
    document.getElementById("total-questions").innerText = totalQuestions;
    document.getElementById("correct-answers").innerText = totalScore;

})

resetBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    selectedAnswer = null;
    totalScore = 0;

    score.style.display = "none";
    header.style.display = "block";
    resetBtn.style.display = "none";
});


function showElement(id) {
    document.getElementById(id).style.display = "block";
}

function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

























