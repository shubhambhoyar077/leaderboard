import './css/style.css';
import addScore from './modules/addScore.js';
import refreshScores from './modules/getScores.js';

const GAMEID = 'DVaVfdLo2lw1Nv9dZDOr';
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => refreshScores(GAMEID));

const form = document.querySelector('.score-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(GAMEID, form.playerName.value, form.playerScore.value)
    .then((data) => {
      // This console log is use for test.
      // It will be replace in next PR when I work on styling.
      console.log(data);
    });
  form.playerName.value = '';
  form.playerScore.value = '';
});
refreshScores(GAMEID);