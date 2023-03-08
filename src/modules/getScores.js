
const getScore = async (GAMEID) => {
  const apiurl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAMEID}/scores/`;
  const response = await fetch(apiurl);
  const data = await response.json();
  return data;
};

export default getScore;