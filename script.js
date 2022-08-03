// create a row of 4 squares
const square = document.createElement('div');
const grid = document.querySelector('.grid-container');
let divs = '';

function addCells(){
  for (let i = 1; i <= 100; i++){

    divs += '<div class="cell"></div>';
  }
  grid.innerHTML = divs;
}

addCells();