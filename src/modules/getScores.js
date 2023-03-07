import renderScore from './renderScore.js';
const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5SLb2yuqigv9cgRo1gPU/scores/');
  const data = await response.json();
  return data;
}

const refreshScores = () => {
  getScore()
    .then((data) => renderScore(data.result));
}

export default refreshScores;