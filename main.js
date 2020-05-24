const gridContainer = document.querySelector('#grid-container')

//Creates a raondom color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Dynamically modifies the CSS variable that controls the number of rows and columns in the ES
function setSize(rowsCols){
    gridContainer.style.setProperty('--grid-colsrows', rowsCols);
  
  let rowCount = rowsCols * rowsCols
  
  //clears the grid when the function runs
  var child = gridContainer.lastElementChild;  
  while (child) { 
      gridContainer.removeChild(child); 
      child = gridContainer.lastElementChild; 
    } 

  //appends X number of new divs to the container div, based on the user's input
    for (i = 0; i < rowCount ; i++) {
      var square = document.createElement("div");
      square.setAttribute("id", `grid${i}`);
      square.setAttribute("class", `gridSquare`);
      gridContainer.appendChild(square); 
  }

  //adds hover event listener to each div. 
  [...document.querySelectorAll('.gridSquare')].forEach(function(item) {
    item.addEventListener('mouseover', function() 
      {item.style.background = getRandomColor()});
     });
}

//Initial primpt when loading the screen
var sizePrompt1 = prompt("How many rows and columns should the Etchy Sketch have?");
setSize(sizePrompt1);

//Reset button
let resetButton = document.querySelector('#clear-container')
resetButton.addEventListener('click', function() {
  [...document.querySelectorAll('.gridSquare')].forEach(function(item) {
    item.style.background = "#848599"})
  sizePrompt2 = prompt("Set a new size for the grid", sizePrompt1);
  setSize(sizePrompt2);
});

