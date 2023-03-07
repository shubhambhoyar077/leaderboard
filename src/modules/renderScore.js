const renderScore = (scoreRecord) => {
  const ulList = document.getElementById("scores-list");
  ulList.innerHTML += `
        <li class="score">${scoreRecord.name}: ${scoreRecord.score}</li>`
}

export default renderScore;