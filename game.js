
/*       FIRST LOAD       */

// num of how many tiles easy-3 hard-6
let num = 6;

// generate random colors
let colors = generateColors(num);

// pick one random color among those generated colors
let pickedColor = pickColor();

// set colorDisplay text
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

let squares = document.querySelectorAll(".square");

let messageDisplay = document.getElementById("message");

let h1 = document.querySelector("h1");


/* EASY BUTTON AND HARD BUTTON */

let easyBtn = document.querySelector("#easybtn");
let hardBtn = document.querySelector("#hardbtn");
hardBtn.classList.add("selected-btn");

easyBtn.addEventListener("click", function(){
  if(document.querySelector(".selected-btn") !== easyBtn){
    hardBtn.style = "";
    hardBtn.classList.remove("selected-btn");
    //hardBtn.style.background = "smokewhite";
    easyBtn.classList.add("selected-btn");
    
    num = 3;
    newColors(num);
    hideSquares();
  }
});

hardBtn.addEventListener("click", function(){
  if(document.querySelector(".selected-btn") !== hardBtn){
    easyBtn.style = "";
    easyBtn.classList.remove("selected-btn");
    //easyBtn.style.background = "smokewhite";
    hardBtn.classList.add("selected-btn");
    showSquares();
    num = 6;
    newColors(num);
  }
});






/*          SQUARES         */

// Loop to set even listener and color of squares
for (let i=0; i < squares.length; i++) {
  // add random colors to squares at the initial load
  squares[i].style.background = colors[i];
  
  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of clicked square
    let clickedColor = this.style.background;

    // WIN OR LOSE
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "RIGHT!!!";
      changeColors(squares);
      h1.style.background = pickedColor;
      document.querySelector(".selected-btn").style.background = pickedColor;
      resetColor.textContent = "PLAY AGAIN?";
    }
    else{
      this.style.background = "#232323";
      messageDisplay.textContent = "WRONG!!";
    }
  });

}

/* HIDE & SHOW SQUARES */

function hideSquares(){
  for(let i=3; i<squares.length; i++)
    squares[i].style.display = "none";
}

function showSquares(){
  for(let i=3; i<squares.length; i++)
    squares[i].style.display = "block";
}




/*            RESET COLORS BTN        */

let resetColor = document.querySelector("#reset");

// change color button event listener
resetColor.addEventListener("click", function(){
  resetColor.textContent = "NEW COLORS";
  document.querySelector(".selected-btn").style.background = "steelblue";
  let n = num;
  newColors(n);
});

/*             NEW COLORS          */

function newColors(n){

  // generate new colors
  colors = generateColors(n);

  // change colors of squares
  for(let i=0; i<squares.length; i++)
    squares[i].style.background = colors[i];

  // pick a random color among those generated color
  pickedColor = pickColor();

  // change color display text
  colorDisplay.textContent = pickedColor;

  // change h1 color 
  h1.style.background = "steelblue";

  // change message
  messageDisplay.textContent = "";
}


/*   CHANGE COLOR OF SQUARES WHEN PLAYER WINS     */

function changeColors(squares){
  for(let j=0; j<squares.length; j++)
    squares[j].style.background = pickedColor;
}



/*       PICK 1 COLOR FROM COLOR ARRAY        */

function pickColor(){
  let r = Math.floor(Math.random() * colors.length);
  return colors[r];
}



/*            RANDOM COLOR ARRAY          */

function generateColors(n){
  // make a new array for colors
  let arr = [];

  // push random colors in the array
  for(let i=0; i<n; i++){
    arr.push(randomColor());
  }

  // return the array
  return arr;
}


/*         RANDOM COLOR GENERATOR           */

function randomColor(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

