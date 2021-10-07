import './style.css';
import './http';
import { fetchData, sendData } from './http';

const addTr = (user, score) => {
  const scoreboard = document.getElementsByTagName('tbody');
  const htmlScore = `
  <tr>
    <td>${user}</td>
    <td>${score}</td>
  </tr>
  `;
  scoreboard[0].innerHTML += htmlScore;
};

window.addScore = () => {
  const user = document.getElementById('inputName').value;
  const score = document.getElementById('inputScore').value;
  addTr(user, score);
  sendData();
}

const loadScore = async () => {
  let scoreList = [];
  await fetchData().then((leaderboard) => { scoreList = leaderboard.result; });
  scoreList.forEach((el) => {
    addTr(el.user, el.score);
  });
};

window.refreshAll = () => {
  const scoreboard = document.getElementsByTagName('tbody');
  scoreboard[0].innerHTML = '';
  loadScore();
};

const main = document.getElementsByTagName('main');
const content = `
<section class="container-fluid">
  <div class="d-flex justify-content-between">
    <h2>Recent scores</h2>
    <button type="button" class="btn btn-outline-primary" onclick="refreshAll()">Refresh</button>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">User</th>
        <th scope="col">Score</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</section>
<aside class="container-fluid">
  <h2>Add  your score</h2>
  <form>
    <div class="mb-3">
      <input type="text" class="form-control" id="inputName" placeholder="Your Name">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" id="inputScore" placeholder="Your Score">
    </div>
    <button type="button" class="btn btn-primary" onclick="addScore()">Submit</button>
  </form>
</aside>
`;
main[0].insertAdjacentHTML('beforeend', content);
loadScore();
