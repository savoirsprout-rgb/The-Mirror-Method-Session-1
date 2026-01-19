const scenarios = new Array(12).fill(0);

let index = 0;

function next(choiceIndex) {
  scenarios[choiceIndex]++;
  index++;

  if (index < questions.length) {
    load();
  } else {
    localStorage.setItem("scenarios", JSON.stringify(scenarios));
    window.location.href = "results.html";
  }
}