let currentIndex = 0;
let score = 0;
let selectedOption = null;
let quizQuestions = [];

const quizContainer = document.getElementById("quiz-container");
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionsListEl = document.getElementById("options-list");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");
const subjectButtons = document.getElementById("subject-buttons");

function startSubjectQuiz(subject) {
    quizQuestions = getRandomQuestions(allQuestions[subject], 10);
    currentIndex = 0;
    score = 0;
    selectedOption = null;

    quizContainer.style.display = "block";
    subjectButtons.style.display = "none";
    restartBtn.style.display = "none";
    nextBtn.style.display = "block";
    resultEl.style.display = "none";
    resultEl.textContent = "";

    loadQuestion();
}

function getRandomQuestions(arr, n) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, n);
}

function loadQuestion() {
    selectedOption = null;
    nextBtn.disabled = true;

    const currentQ = quizQuestions[currentIndex];
    questionNumberEl.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
    questionTextEl.textContent = currentQ.question;
    optionsListEl.innerHTML = "";

    currentQ.options.forEach((option, i) => {
        const li = document.createElement("li");
        li.textContent = option;

        li.addEventListener("click", () => handleOptionClick(li, i, currentQ.answer));
        optionsListEl.appendChild(li);
    });
}

function handleOptionClick(li, selectedIndex, correctIndex) {
    if (selectedOption !== null) return;
    selectedOption = selectedIndex;

    const allOptions = optionsListEl.querySelectorAll("li");
    allOptions.forEach(opt => opt.style.pointerEvents = "none");

    if (selectedIndex === correctIndex) {
        li.classList.add("correct");
        score++;
    } else {
        li.classList.add("wrong");
    }

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    if (selectedOption === null) return;
    currentIndex++;

    if (currentIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

restartBtn.addEventListener("click", () => {
    subjectButtons.style.display = "block";
    quizContainer.style.display = "none";
    nextBtn.disabled = true;
    nextBtn.style.display = "block";
});

function showResult() {
    questionNumberEl.textContent = "";
    questionTextEl.textContent = "";
    optionsListEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `You scored ${score} out of ${quizQuestions.length} (${Math.round((score / quizQuestions.length) * 100)}%)`;
    restartBtn.style.display = "inline-block";
    resultEl.style.display = "block";
}

