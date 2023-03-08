import './css/style.css';
import addScore from './modules/addScore.js';
import refreshScores from './modules/getScores.js';

const TESTGAMEID = '5SLb2yuqigv9cgRo1gPU';
const GAMEID = 'DVaVfdLo2lw1Nv9dZDOr';
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => refreshScores(TESTGAMEID));

const form = document.querySelector('.score-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(TESTGAMEID, form.playerName.value, form.playerScore.value)
    .then((data) => {
      form.submit.innerHTML = `Submit`
      form.submit.disabled = false; 
    })
    .catch((err) => {
      form.submit.innerHTML = `Submit`
      form.submit.disabled = false; 
    });
  form.submit.innerHTML = `Adding... <i class="fa fa-spinner fa-spin"></i>`;
  form.submit.disabled = true; 
  form.playerName.value = '';
  form.playerScore.value = '';
});
refreshScores(TESTGAMEID);