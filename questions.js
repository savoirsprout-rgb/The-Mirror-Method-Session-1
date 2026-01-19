const questions = [
  "When you wake up lately, what feeling is most present?",
  "How do you usually respond when life feels uncertain?",
  "What drains your energy the most right now?",
  "How do you handle emotional pressure?",
  "What feels hardest to express honestly?",
  "How do you react to the responsibility?",
  "What are you searching for at this stage of life?",
  "How do you treat your own needs?",
  "What feels unresolved inside you?",
  "How do you experience clarity?",
  "What best describes your inner state today?",
  "What do you need more of right now?"
];

// 12 scenarios
const scenarioScores = new Array(12).fill(0);
let currentQuestion = 0;

function loadQuestion() {
  document.getElementById("question").innerText =
    questions[currentQuestion];

  const options = document.querySelectorAll(".option");
  options.forEach((btn, i) => {
    btn.onclick = () => nextQuestion(i);
  });
}

function nextQuestion(optionIndex) {
  scenarioScores[optionIndex]++;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem(
      "scenarioScores",
      JSON.stringify(scenarioScores)
    );
    window.location.href = "results.html";
  }
}

loadQuestion();