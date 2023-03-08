const renderScore = (scoreRecords) => {
  const ulList = document.getElementById('scores-list');
  ulList.innerHTML = '';
  scoreRecords.sort((a, b) => b.score - a.score);
  scoreRecords.forEach((element, index) => {
    if(index <= 2){
      ulList.innerHTML += `
        <li class="score">${element.user}: ${element.score} <i class='fas fa-crown'></i></li>`;
    }else{
      ulList.innerHTML += `
        <li class="score">${element.user}: ${element.score}</li>`;
    }
    
  });
};

export default renderScore;