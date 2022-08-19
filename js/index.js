//variable in logic

let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('Eat.wav');
const gameOverSound = new Audio('start.mp3');
const moveSound = new Audio('start.mp3');
const musicSound = new Audio('start.mp3');

let speed = 10;
let score=0;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
];
 food = { x: 6, y: 7 }

// function in game
function main(ctime) {
    window.requestAnimationFrame(main);

    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime= ctime;
    gameEngine();

}
function isCollide(snake) {
    for(let i=1;i<snakeArr.length;i++){
             if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
                   return true;
            }
    }
    if(snake[0].x>=18 || snake[0].x<=0 && snake[0].Y>=18 || snake[0].Y<=0){
        return true;
   }
    
}
// divided into two part
function gameEngine() {

    if (isCollide(snakeArr)) {
        inputDir={x:0,y:0}
        alert("Game is over now prees any key to start game");
        snakeArr[ { x: 13, y: 15 }];
        score=0;
    }


    //if sanke eating the food increment the socure and regenreting food
if (snakeArr[0].y===food.y&&snakeArr[0].x===food.x  ) {
    // foodSound.play();
    foodSound.play();
    snakeArr.unshift({x:snakeArr[0].x + inputDir.x , y:snakeArr[0].y+inputDir.y})
    let a=2;
    let b=16;
    //genreate the new food
    food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
}

//Moving Sanake

   for (let i = snakeArr.length-2; i >=0; i--) {
    
    snakeArr[i+1]={...snakeArr[i]};
    
   }
   snakeArr[0].x+=inputDir.x;
   snakeArr[0].y+=inputDir.y;


board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

    // part 2 display snake and food 2
    //display the snake 
    //board.innerHtml ="";
    snakeArr.forEach((e, index) => {
        selectElement = document.createElement('div');
        selectElement.style.gridRowStart = e.y;
        selectElement.style.gridColumnStart = e.x;
        if (index == 0) {
            selectElement.classList.add('head');

        }
        else {
            selectElement.classList.add('snake');
        }

        board.appendChild(selectElement);

    });
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

//main logic in the game
//user which key is press
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir={x:0,y:1}
//  start.play();
moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("up key")
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("Down key")
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("Left key")
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("Right key")
            inputDir.x=1;
            inputDir.y=0;
            break;

        default:
            break;
    }
});






