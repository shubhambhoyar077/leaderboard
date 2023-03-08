import './css/style.css';
import addScore from './modules/addScore.js';
import getScore from './modules/getScores.js';
import renderScore from './modules/renderScore.js';


const GAMEID = 'DVaVfdLo2lw1Nv9dZDOr';
const refreshBtn = document.getElementById('refresh');

const form = document.querySelector('.score-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(GAMEID, form.playerName.value, form.playerScore.value)
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
const refreshScores = (GAMEID) => {
  getScore(GAMEID)
    .then((data) => {
      renderScore(data.result);
      refreshBtn.innerHTML = `Refresh`;
      refreshBtn.disabled = false; 
    })
    .catch((err) => {
      refreshBtn.innerHTML = `Refresh`;
      refreshBtn.disabled = false; 
    });
    refreshBtn.innerHTML = `Refreshing... <i class="fa fa-spinner fa-spin"></i>`;
    refreshBtn.disabled = true; 
};
refreshBtn.addEventListener('click', () => refreshScores(GAMEID));
refreshScores(GAMEID);