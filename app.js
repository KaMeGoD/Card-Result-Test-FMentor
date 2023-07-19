const main = document.querySelector('#main');
let counter = 0;

const createElementCard = (colorBg, img, title, score) =>{
  const components = `<div class="card1 ${colorBg}">
    <div class="cd-logo">
      <img class="cd-logo-img" src=${img} alt="asda">
      <h5 class="cd-logo-text">${title}</h5>
    </div>
    <div class="cd-score">
      <p class="cd-score-p">${score}</p>
      <p class="cd-score-extra">/ 100</p>
    </div>
  </div>`;
  main.innerHTML += components;
}

fetch('./data.json')
  .then(response => response.json())
  .then(data=>{
    data.forEach(e => {
      counter++;
      console.log(counter);
      switch (counter) {
        case 1:
          createElementCard('red', e.icon, e.category, e.score);
          break;
        case 2:
          createElementCard('yellow', e.icon, e.category, e.score);
          break;
        case 3:
          createElementCard('green', e.icon, e.category, e.score);
          break;
          case 4:
            createElementCard('blue', e.icon, e.category, e.score);
            break;
      }
    });
    });
