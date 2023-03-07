import './css/style.css';
import addScore from './modules/addScore.js';
import refreshScores from './modules/getScores.js';

const TESTGAMEID = "5SLb2yuqigv9cgRo1gPU";
const GAMEID = "DVaVfdLo2lw1Nv9dZDOr";
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => refreshScores(GAMEID));

const form = document.querySelector('.score-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(GAMEID, form.playerName.value, form.playerScore.value);
  form.playerName.value = "";
  form.playerScore.value = "";
});
refreshScores(GAMEID);