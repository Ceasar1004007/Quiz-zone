const quiz = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: 1
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C", "HTML", "Java"],
        answer: 2
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const options = document.querySelectorAll(".option");
    options.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.disabled = false;
        btn.style.backgroundColor = "";
    });
}

function checkAnswer(index) {
    const correct = quiz[currentQuestion].answer;
    const buttons = document.querySelectorAll(".option");

    if (index === correct) {
        buttons[index].style.backgroundColor = "green";
        score++;
    } else {
        buttons[index].style.backgroundColor = "red";
        buttons[correct].style.backgroundColor = "green";
    }

    buttons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            `<h2>Your Score: ${score}/${quiz.length}</h2>`;
    }
}

loadQuestion();
