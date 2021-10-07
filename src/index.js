import './style.css';
import { fetchData, sendData } from './http.js';

const addTr = (user, score) => {
  const scoreboard = document.getElementsByTagName('tbody');
  const htmlScore = `
  <tr class="fs-5">
    <td>${user}</td>
    <td>${score}</td>
  </tr>
  `;
  scoreboard[0].innerHTML += htmlScore;
};

const loadScore = async () => {
  let scoreList = [];
  await fetchData().then((leaderboard) => { scoreList = leaderboard.result; });
  scoreList.sort((a, b) => b.score - a.score);
  scoreList.forEach((e) => {
    addTr(e.user, e.score);
  });
};

window.refreshAll = () => {
  const scoreboard = document.getElementsByTagName('tbody');
  scoreboard[0].innerHTML = '';
  loadScore();
};

window.addScore = () => {
  const user = document.getElementById('inputName').value;
  const score = document.getElementById('inputScore').value;
  document.getElementById('inputName').value = '';
  document.getElementById('inputScore').value = '';
  sendData(user, score);
  addTr(user, score);
  window.refreshAll();
};

const main = document.getElementsByTagName('main');
const content = `
<section class="container-fluid">
  <div class="d-flex justify-content-between">
    <h2 class="display-4">Recent scores</h2>
    <button type="button" class="btn btn-outline-primary btn-lg" onclick="refreshAll()">Refresh</button>
  </div>
  <div class="table-scrollbar">
    <table class="table table-bordered table-striped">
      <thead>
        <tr class="fs-4">
          <th scope="col">User</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
</section>
<aside class="container-fluid">
  <h2 class="display-4">Add your score</h2>
  <form>
    <div class="mb-3">
      <input type="text" class="form-control form-control-lg" id="inputName" placeholder="Your Name">
    </div>
    <div class="mb-3">
      <input type="number" class="form-control form-control-lg" id="inputScore" placeholder="Your Score">
    </div>
    <button type="button" class="btn btn-primary btn-lg" onclick="addScore()">Submit</button>
  </form>
</aside>
`;
main[0].insertAdjacentHTML('beforeend', content);
loadScore();
