const addScore = async (GAMEID, name, score) => {
  const apiurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'+GAMEID+'/scores/';
  const response = await fetch(apiurl,{
    method:"POST",
    body: JSON.stringify({
      user:name,
      score:score
    }),
    headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
  });
};

export default addScore;