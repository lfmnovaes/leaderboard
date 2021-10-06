import './style.css';

const main = document.getElementsByTagName('main');

window.refreshAll = () => {
  console.log('refresh');
};

window.addScore = () => {
  console.log('add score');
};

const content = `
<section class="container-fluid">
  <div class="d-flex justify-content-between">
    <h2>Recent scores</h2>
    <button type="button" class="btn btn-outline-primary" onclick="refreshAll()">Refresh</button>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>100</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>85</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>50</td>
      </tr>
    </tbody>
  </table>
</section>
<aside class="container-fluid">
  <h2>Add  your score</h2>
  <form>
    <div class="mb-3">
      <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Your Name">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Score">
    </div>
    <button type="button" class="btn btn-primary" onclick="addScore()">Submit</button>
  </form>
</aside>
`;

main[0].insertAdjacentHTML('beforeend', content);

const scoreboard = document.getElementsByTagName('tbody');
console.log(scoreboard[0]);
