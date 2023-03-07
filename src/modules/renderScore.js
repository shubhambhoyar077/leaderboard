const renderScore = (scoreRecords) => {
  const ulList = document.getElementById('scores-list');
  ulList.innerHTML = "";
  scoreRecords.forEach(element => {
    ulList.innerHTML += `
        <li class="score">${element.user}: ${element.score}</li>`;
  });
  
};

export default renderScore;