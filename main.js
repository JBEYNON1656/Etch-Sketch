for (i = 0; i < 100 ; i++) {
  let gridContainer = document.getElementById('grid-container');
  var square = document.createElement("div");
  
  square.setAttribute("id", `grid${i}`);
  square.setAttribute("class", `gridSquare`);
  
  gridContainer.appendChild(square); 
}

[...document.querySelectorAll('.gridSquare')].forEach(function(item) {
  item.addEventListener('mouseover', function() {
    if (item.style.background === "purple") {item.style.background = "orange";}
    else {item.style.background = "purple"};
  });
   });