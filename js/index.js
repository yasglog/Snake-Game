//variable in logic
let lasttime=0;
let direction={x:0,y:0};
let foodsound=new Audio();
let gameoversound=new Audio();
let moviesound =new Audio();
let musicsound=new Audio();
let speed=2;
let snakearray=[
    {x:2,y:1}
]
let food={x:5,y:4}

//function in game



let i=0;

function main(ctime){
    window.requestAnimationFrame(main);
    
   if((ctime-lasttime)/1000<1/speed){
       return;
   }
   lasttime=ctime;
   gameEngine();

}
//divided into two part
function gameEngine(){

    // part 2 display snake and food 2
    //display the snake 
    board.innerHtml="";
    snakearray.forEach((e,index)=>{
    selectelement=document.createElement('div');
    selectelement.style.gridRowStart=e.y;
    selectelement.style.gridColumnStart=e.x;
    if (index==0) {
        selectelement.classList.add('head');

    }
    else{
    selectelement.classList.add('snake');
    }

    board.appendChild(selectelement);
 
    });
    foodelement=document.createElement('div');
    foodelement.style.gridRowStart=food.y;
    foodelement.style.gridColumnStart=food.x;
    foodelement.classList.add('food');
    board.appendChild(foodelement);
}
window.requestAnimationFrame(main);




//main logic in the game
