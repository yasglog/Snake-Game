//variable in logic
let lasttime = 0;
let inputdirect = { x: 0, y: 0 };
const start=new Audio('start.mp3');
let foodsound = new Audio();
let gameoversound = new Audio();
let moviesound = new Audio();
let musicsound = new Audio();
let speed = 2;
let snakearray = [
    { x: 2, y: 1 }
]
let food = { x: 5, y: 4 }
let score=0;

//function in game



let i = 0;

function main(ctime) {
    window.requestAnimationFrame(main);

    if ((ctime - lasttime) / 1000 < 1 / speed) {
        return;
    }
    lasttime = ctime;
    gameEngine();

}
function iscollaide(snakearr) {
    return false;
}
//divided into two part
function gameEngine() {

    if (iscollaide()) {
        inputdirect={x:0,y:0}
        alert("Game is over now prees any key to start game");
        snakearray[ { x: 2, y: 1 }];
        score=0;
    }
    //if sanke eating the food increment the socure and regenreting food
if (snakearray[0].x==food.x && snakearray[0].y==food.y) {
    snakearray.unshift({x:snakearray[0].x+inputdirect.x,y:snakearray[0].y+inputdirect.y})
    let a=2;
    let b=16;
    //genreate the new food
    food={x:Math.round(a+(b-a)*Math.random),y:Math.round(a+(b-a)*Math.random)};
}
    // part 2 display snake and food 2
    //display the snake 
    board.innerHtml = "";
    snakearray.forEach((e, index) => {
        selectelement = document.createElement('div');
        selectelement.style.gridRowStart = e.y;
        selectelement.style.gridColumnStart = e.x;
        if (index == 0) {
            selectelement.classList.add('head');

        }
        else {
            selectelement.classList.add('snake');
        }

        board.appendChild(selectelement);

    });
    foodelement = document.createElement('div');
    foodelement.style.gridRowStart = food.y;
    foodelement.style.gridColumnStart = food.x;
    foodelement.classList.add('food');
    board.appendChild(foodelement);
}
//main logic in the game
//user which key is press
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputdirect={x:0,y:0}
 start.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("up key")
            inputdirect.x=0;
            inputdirect.y=-1;
            break;
        case "ArrowDown":
            console.log("Down key")
            inputdirect.x=0;
            inputdirect.y=1;
            break;
        case "ArrowLeft":
            console.log("Left key")
            inputdirect.x=-1;
            inputdirect.y=0;
            break;
        case "ArrowRight":
            console.log("Right key")
            inputdirect.x=1;
            inputdirect.y=0;
            break;

        default:
            break;
    }
});





