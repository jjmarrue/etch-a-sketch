const customBtn = document.querySelector('#custom-grid');
const resetBtn = document.querySelector('#reset');
const grid = document.querySelector('.grid-container');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let cellArray = document.getElementsByClassName('cell');

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

//256 cells and 6.25% flexBasis are default values for 16x16 grid
function addCells(numberOfCells=256, flexBasisVal='6.25%'){
  grid.innerHTML = '';
  let cell = '';
  for (let i = 1; i <= numberOfCells; i++){
    cell = document.createElement('div');
    cell.style.flexBasis = flexBasisVal;
    cell.className = 'cell';
    grid.appendChild(cell);
  }

 //console.log(cellArray.item(15));





 for (let j = 0; j < cellArray.length; j++) {
  cellArray.item(j).addEventListener('click', () => {
    cellArray.item(j).style.backgroundColor = 'red';
  });
  }
}






// grid.array.forEach(element => {
//   console.log(element);
// });

// grid.addEventListener('click', function(){

//   console.log(typeof(gridCell)); 
//   // let hexColor = '#';
//   // for (let i = 0; i < 6; i++){
//   //   hexColor += hex[getRandomNumber()];
//   // }
//   // gridCell.style.backgroundColor = hexColor;
// });

function getRandomNumber(){
  return Math.floor(Math.random()*hex.length);
}


addCells();

