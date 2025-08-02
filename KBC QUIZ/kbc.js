const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Larry Page"],
    answer: "Elon Musk"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  }
];

let currentQuestion = 0;
let score = 0;
let usedLifeline = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  optionsEl.innerHTML = '';
  resultEl.textContent = '';
  nextBtn.style.display = "none";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(button, correct) {
  const allButtons = optionsEl.querySelectorAll("button");
  allButtons.forEach(btn => btn.disabled = true);

  if (button.textContent === correct) {
    button.style.backgroundColor = "green";
    resultEl.textContent = "✅ Sahi Jawab! You won ₹" + ((currentQuestion + 1) * 10000);
    score += 1;
  } else {
    button.style.backgroundColor = "red";
    resultEl.textContent = `❌ Galat Jawab! Correct answer is: ${correct}`;
  }

  nextBtn.style.display = "inline-block";
}

function useLifeline() {
  if (usedLifeline) {
    alert("Lifeline already used!");
    return;
  }

  usedLifeline = true;
  const current = quizData[currentQuestion];
  const wrongOptions = current.options.filter(opt => opt !== current.answer);
  const toRemove = wrongOptions.sort(() => 0.5 - Math.random()).slice(0, 2);

  const allButtons = optionsEl.querySelectorAll("button");
  allButtons.forEach(btn => {
    if (toRemove.includes(btn.textContent)) {
      btn.style.display = "none";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  usedLifeline = false;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  questionEl.textContent = "🎉 Quiz Over!";
  optionsEl.innerHTML = '';
  document.querySelector('.lifeline').style.display = "none";
  resultEl.innerHTML = `You answered ${score} out of ${quizData.length} correctly.<br>🏆 Total Winnings: ₹${score * 10000}`;
  nextBtn.style.display = "none";
}

loadQuestion();
