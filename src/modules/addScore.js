const addScore = async (name, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5SLb2yuqigv9cgRo1gPU/scores/',{
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