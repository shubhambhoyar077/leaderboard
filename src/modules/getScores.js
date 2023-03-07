import renderScore from './renderScore.js';

const getScore = async (GAMEID) => {
  const apiurl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAMEID}/scores/`;
  const response = await fetch(apiurl);
  const data = await response.json();
  return data;
};

const refreshScores = (GAMEID) => {
  getScore(GAMEID)
    .then((data) => renderScore(data.result));
};

export default refreshScores;