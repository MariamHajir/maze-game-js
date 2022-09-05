//get all functions from html when loaded
window.onload = function(){

//greeting message
var x;
x = prompt("Hey what's your name?");
alert("Hello! "+x+" Welcome to The Awesome Maze Game!!" );

//Variables to be used
let status = document.getElementById('status')
let mazegame = document.getElementById("game")
let begin = document.getElementById('start')
let boundary1 = document.getElementById("boundary1")
let boundaries = mazegame.getElementsByClassName('boundary')
let winner = document.getElementById('end')
let instructions = "Youre here:), stay inside the border, you get 5 if you win, -10 if you lose!"
let cheating = "i see you, Cheater!"
let score = 0
    
//Adding another instruction to body
let instructions_div = document.createElement('div')
instructions_div.innerHTML = '<h2>Click "S" at any time to reset the game.</h2>'
document.body.appendChild(instructions_div)

//Function to color all the walls green
function colorWallsGreen(){
    for (var i = 0; i<boundaries.length; i++){
        boundaries[i].style.backgroundColor = "green";
    }
}

 //Function loser to change the color of borders to red
function loser(){
    for (var i = 0; i<boundaries.length; i++){
        boundaries[i].style.backgroundColor = "red";
    }
}

//Function normal to color borders grey incase of refreshing the game
function normalmaze(){
    for (var i = 0; i<boundaries.length; i++){
        boundaries[i].style.backgroundColor = "#eeeeee";
    }
}

//Function to color the borders orange incase of cheating
function colorWallsOrange(){
    for (var i = 0; i<boundaries.length; i++){
        boundaries[i].style.backgroundColor = "orange";
    }
}

//Appending a score div to the body
let score_div = document.createElement('div')
score_div.innerHTML = '<h2 id = "score"> Score = 0 </h2>'
document.body.appendChild(score_div)
score_content = document.getElementById("score")

//Function to reset the maze
function resetMaze(){
    normalmaze()
    status.innerHTML = instructions
    score = 0
    score_content.innerHTML = "Score = " + score
}
function retry(){
    normalmaze()
    status.innerHTML = instructions
    score_content.innerHTML = "Score = " + score
}

function youLose(){
    if (!(boundary1.style.backgroundColor == "red") && !(boundary1.style.backgroundColor == "green")){
        loser()
        score  -= 10
        status.innerHTML = "You lost!" 
        score_content.innerHTML = "Score: " + score
    }
}

//winning function
function youWin(){
    if ((boundary1.style.backgroundColor == "red") || (boundary1.style.backgroundColor == "orange")){
        status.innerHTML = "Go back to S to retry."
    }else if (!(boundary1.style.backgroundColor == "green")){
        colorWallsGreen()
        score += 5
        status.innerHTML = "You won!"
        score_content.innerHTML = "Score: " + score
    }
}

//mousehover 
begin.addEventListener("mouseover", function(){
    mazegame.addEventListener("mouseleave", function(){
    status.innerHTML= cheating
    colorWallsOrange()
    for (var i = 0; i<boundaries.length; i++){
        boundaries[i].removeEventListener("mouseover", youLose)
    }
});

retry()

    for (var i = 0; i<boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", youLose)
    }

winner.addEventListener("mouseover", youWin)


begin.addEventListener("click", resetMaze)
})
// function  go(){
//     win=true;
//     start.addEventListener("click",()=>{
//         unchange();
// status.innerHTML=" Move your mouse through the maze";
// win=true;
// startmaze();
// startnowb();
// leave();
// endf();
//     });
// }
// go();
// function change(){

//     boundaries.forEach(function (i,index){
//         i.classList.add("youlose"); 
//     } );
// win=false;
// }
// function unchange(){

//     boundaries.forEach(function (i,index){
//         i.classList.remove("youlose"); 
        
//     } );
// }
}


