const customBtn = document.querySelector('#custom-grid');
const resetBtn = document.querySelector('#reset');
const grid = document.querySelector('.grid-container');
let cellArray = document.getElementsByClassName('cell');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// function getRandomNumber(){
//   return Math.floor(Math.random()*hex.length);
// }

function getRandomNumber(){
  return Math.floor(Math.random()*256);
}

customBtn.addEventListener('click', () => {
  let userGridSize = prompt('Enter a grid size between 1- 100: ');
  let numOfCells = Math.pow(userGridSize,2);
  let flexBasisVal = 100 / userGridSize;
  addCells(numOfCells, `${flexBasisVal}%`);
});

resetBtn.addEventListener('click', () => {
  grid.innerHTML = '';
  for (let i = 1; i <= 256; i++){
    let cell = document.createElement('div');
    cell.style.flexBasis = '6.25%';
    cell.className = 'cell';
    grid.appendChild(cell);
  } 
});

resetBtn.addEventListener('click', ()=>addCells(256,'6.25%'));

// default arguments for 16x16 grid
function addCells(numberOfCells=256, flexBasisVal='6.25%'){
  grid.innerHTML = '';
  let cell = '';
  for (let i = 1; i <= numberOfCells; i++){
    cell = document.createElement('div');
    cell.style.flexBasis = flexBasisVal;
    cell.className = 'cell';
    grid.appendChild(cell);
  }

  // Access each cell of the grid, and apply a random rgb color to the cell
  for (let j = 0; j < cellArray.length; j++) {
    cellArray.item(j).addEventListener('mouseover', () => {
      let rColor = getRandomNumber();
      let gColor = getRandomNumber();
      let bColor = getRandomNumber();
      const darkenVal = 25.5;
      cellArray.item(j).style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
      //cellArray.item(j).style.backgroundColor = (parseFloat(cellArray.item(j).style.opacity) || 0) + 0.1;
    });
  }
}

addCells();

