import "./css/style.css"
import renderScore from "./modules/renderScore.js";
import addScore from "./modules/addScore.js";

const playerScore = [
  {
    name: "Example1",
    score: "100"
  },
  {
    name: "Example2",
    score: "20"
  },
  {
    name: "Example3",
    score: "50"
  },
  {
    name: "Example4",
    score: "10"
  },
  {
    name: "Example5",
    score: "60"
  },
  {
    name: "Example6",
    score: "30"
  },
]

playerScore.forEach( element => renderScore(element));

const form = document.querySelector(".score-form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(form.playerName.value, form.playerScore.value);
});