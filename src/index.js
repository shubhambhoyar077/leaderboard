import './css/style.css';
import addScore from './modules/addScore.js';
import refreshScores from './modules/getScores.js';

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', refreshScores);

const form = document.querySelector('.score-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(form.playerName.value, form.playerScore.value);
});

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5SLb2yuqigv9cgRo1gPU/scores/', {
//   method: 'POST',
//   body: JSON.stringify({
//     user: "Test",
//     score: 30
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));