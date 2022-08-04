// Access DOM nodes

const customBtn = document.querySelector('#custom-grid');
const resetBtn = document.querySelector('#reset');
const grid = document.querySelector('.grid-container');
let cellArray = document.getElementsByClassName('cell');

// Add event listeners

resetBtn.addEventListener('click', ()=>addCells(256,'6.25%'));
customBtn.addEventListener('click', createCustomGrid);

// Set grid size based on user input

function createCustomGrid(e){
  let userGridSize = prompt('Enter a grid size between 1- 100: ');
  let numOfCells = Math.pow(userGridSize,2);
  let flexBasisVal = 100 / userGridSize;
  addCells(numOfCells, `${flexBasisVal}%`);
}

// Create random number for RGB color

function getRandomNumber(){
  return Math.floor(Math.random()*256);
}

// Create grid - default parameters are for 16x16 grid

function addCells(numberOfCells=256, flexBasisVal='6.25%'){
  let cell;
  grid.innerHTML = '';
  for (let i = 1; i <= numberOfCells; i++){
    cell = document.createElement('div');
    cell.style.flexBasis = flexBasisVal;
    cell.className = 'cell';
    grid.appendChild(cell);
  }

  // Access each cell in the grid and apply a random rgb color to that cell

  for (let j = 0; j < cellArray.length; j++) {
    cellArray.item(j).addEventListener('mouseover', () => {   
      let rColor = getRandomNumber();
      let gColor = getRandomNumber();
      let bColor = getRandomNumber();
      let rgbColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
      cellArray.item(j).style.backgroundColor = rgbColor;
    });    
  }
}

addCells();