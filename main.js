const gridContainer = document.querySelector('#grid-container')

function setSize(rowsCols){
    gridContainer.style.setProperty('--grid-rows', rowsCols);
    gridContainer.style.setProperty('--grid-cols', rowsCols);
  
  let rowCount = rowsCols * rowsCols
  
  var child = gridContainer.lastElementChild;  
  while (child) { 
      gridContainer.removeChild(child); 
      child = gridContainer.lastElementChild; 
    } 

    for (i = 0; i < rowCount ; i++) {
      var square = document.createElement("div");
      square.setAttribute("id", `grid${i}`);
      square.setAttribute("class", `gridSquare`);
      gridContainer.appendChild(square); 
  }

  [...document.querySelectorAll('.gridSquare')].forEach(function(item) {
    item.addEventListener('mouseover', function() 
      {item.style.background = "#FF7558"});
     });
}

//var sizePrompt1 = prompt("How many rows and columns should the Etchy Sketch have?");
//setSize(sizePrompt1);

setSize(10);

let resetButton = document.querySelector('#clear-container')
resetButton.addEventListener('click', function() {
  [...document.querySelectorAll('.gridSquare')].forEach(function(item) {
    item.style.background = "#848599"})
  sizePrompt2 = prompt("Set a new size for the grid");
  setSize(sizePrompt2);
});

