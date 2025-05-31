🎯 Quiz App with Scoring and Review
________________________________________
✅ Step 1: Define the Core Features
🧠 Functional Requirements:
•	Show one question at a time
•	Multiple choice answers (radio buttons or buttons)
•	User selects an answer → click "Next"
•	Track correct/incorrect answers
•	Show score at the end
•	Review all questions with correct answers highlighted (bonus)
________________________________________
📦 Step 2: Data Structure for Questions
We'll use an array of question objects like this:
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Madrid", "Berlin", "Paris", "Rome"],
    correctAnswer: 2
  },
  ...
];
Each object includes:
•	question: string
•	choices: array of options
•	correctAnswer: index of the correct one
________________________________________
🧭 Step 3: HTML Structure (for now)
Create a basic skeleton:
•	Question container
•	Multiple choice buttons (or radios)
•	"Next" button
•	Score display (initially hidden)
<div id="quiz-container">
  <h2 id="question-text"></h2>
  <ul id="choices-list"></ul>
  <button id="next-button">Next</button>
</div>
<div id="score-container" style="display: none;"></div>
________________________________________

