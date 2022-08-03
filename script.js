const customBtn = document.querySelector('#custom-grid');
const resetBtn = document.querySelector('#reset');
const grid = document.querySelector('.grid-container');

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
    console.log(i);
  } 
});

//256 cells and 6.25% flexBasis are default values for 16x16 grid
function addCells(numberOfCells=256, flexBasisVal='6.25%'){
  grid.innerHTML = '';
  for (let i = 1; i <= numberOfCells; i++){
    let cell = document.createElement('div');
    cell.style.flexBasis = flexBasisVal;
    cell.className = 'cell';
    grid.appendChild(cell);   
    console.log(i);
  } 
}

addCells();

