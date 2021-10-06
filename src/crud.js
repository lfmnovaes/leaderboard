class Score {
  constructor(name = 'null', score = '0') {
    this.name = name;
    this.score = score;
  }
}

window.addScore = () => {
  const newScore = new Score(document.getElementById('inputName').value,
    document.getElementById('inputScore').value);
  const scoreboard = document.getElementsByTagName('tbody');

  const htmlScore = `
  <tr>
    <td>${newScore.name}</td>
    <td>${newScore.score}</td>
  </tr>
  `;

  scoreboard[0].innerHTML += htmlScore;

  return newScore;
};

window.refreshAll = () => {
  console.log('refresh');
};

module.exports = { addScore, refreshAll };
