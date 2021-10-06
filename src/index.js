import './style.css';
import './crud';





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
        <th scope="col">Name</th>
        <th scope="col">Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Jacob</td>
        <td>85</td>
      </tr>
      <tr>
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


