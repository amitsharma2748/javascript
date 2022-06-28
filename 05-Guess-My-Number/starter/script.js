'use strict';
let num = Math.floor(Math.random() * 19 + 1);

let score=20;
let highScore=0;
document.querySelector(".score").textContent=score;
document.querySelector('.highscore').textContent=highScore;

document.querySelector(".check").addEventListener('click',function () {
  let guess=Number(document.querySelector(".guess").value)
  console.log(guess);
 
 
 if(score>0){
  if(!guess){
    document.querySelector('.message').textContent= "  no number" ;  
  }
  else if(guess==num){
  document.querySelector('.message').textContent= "Correct" ;
  document.querySelector('h1').textContent= "Congats guessed the correct number" ;
  document.querySelector('body').style.backgroundColor='#60b347';
  document.querySelector('.number').style.width='30rem';
  document.querySelector(".number").textContent=num;
  if(score>highScore){
    document.querySelector('.highscore').textContent=score;
  }
} 
if(guess!=num)
{
  if (score>1){
    document.querySelector('.message').textContent= (guess>num)?"Too much":"Too little"; 
  score--;
  document.querySelector(".score").textContent=score;
}
  else{
    document.querySelector('.message').textContent= "You lost" ;
    document.querySelector(".score").textContent=0;
  }
}
//   else if(guess>num){
//   if (score>1){
//     document.querySelector('.message').textContent= "Too much" ;
//   score--;
//   document.querySelector(".score").textContent=score;
// }
//   else{
//     document.querySelector('.message').textContent= "You lost" ;
//     document.querySelector(".score").textContent=0;
//   }
// }
  else if(guess<num){
    if (score>1){
    document.querySelector('.message').textContent= "Too little" ;
  score--;
  document.querySelector(".score").textContent=score;
}
else{
  document.querySelector('.message').textContent= "You lost" ;
  document.querySelector(".score").textContent=0;
}
}
  }});
  document.querySelector('.again').addEventListener('click',function(){
    score=20;
    num = Math.floor(Math.random() * 19 + 1);
    document.querySelector('.message').textContent= "Start guessing..." ;
  document.querySelector('h1').textContent= "Guess My Number" ;
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
  document.querySelector(".number").textContent='?';
  document.querySelector(".guess").value=" ";
  document.querySelector(".score").textContent=score;
  
} 
  )