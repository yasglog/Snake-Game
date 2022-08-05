//variable in logic
let lasttime=0;
let direction={x:0,y:0};
let foodsound=new Audio();
let gameoversound=new Audio();
let moviesound =new Audio();
let musicsound=new Audio();
let speed=2;

//function in game



let i=0;

function main(ctime){
    window.requestAnimationFrame(main);
    
   if((ctime-lasttime)/1000<1/speed){
       return;
   }
//    console.log(ctime)
   lasttime=ctime;
//    gameEngine();
}
//divided into two part
function gameEngine(){

}
window.requestAnimationFrame(main);




//main logic in the game
