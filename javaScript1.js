// var massMark=prompt("Enter your weight");
// var heightMark=prompt("Enter your height");
// var massJohn=prompt("Enter your weight");
// var heightJohn=prompt("Enter your height");
//
// var BMIMark= massMark/(heightMark*heightMark);
// var BMIJohn= massJohn/(heightJohn*heightJohn);
//
// console.log(BMIMark);
// console.log(BMIJohn);
//
// var markHigherBMI = BMIMark > BMIJohn ;
// console.log(markHigherBMI);
//
// if(markHigherBMI===true){
//   console.log("Mark has higher BMI");
// }
// else
// {
//   console.log("John has higher BMI");
// }
let score=20;
let secretNumber=Math.trunc(Math.random()*20)+1;
let highscore=0;


document.querySelector('.check').addEventListener('click',function(){
const guess = Number(document.querySelector('.guess').value);
console.log(guess);
if(!guess){
  document.querySelector('.message').textContent='no Number';

}
else if(guess===secretNumber){
  document.querySelector('.message1').textContent='Correct Number';
  document.querySelector('body').style.backgroundColor='#00ff00';
  document.querySelector('body').style.width='30rem';
  document.querySelector('.number').textContent=secretNumber;

  if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
  }

}
else if(guess>secretNumber){
  if(score>0){
    document.querySelector('.message1').textContent='Too high';
     score--;
     document.querySelector('.message').textContent='Current Score ' +score;
     document.querySelector('body').style.backgroundColor='#add8e6';

  }
  else {
      document.querySelector('.message').textContent='You lost the game';
  }
}
else if(guess<secretNumber){
  if(score>0){
    document.querySelector('.message1').textContent='Too Low';
    score--;
    document.querySelector('.message').textContent='Current Score ' + score;
    document.querySelector('body').style.backgroundColor='#add8e6';


  }
  else{
      document.querySelector('.message').textContent='You lost the game';
  }

}
});


document.querySelector('.again').addEventListener('click',function(){
  score=20;
  secretNumber=Math.trunc(Math.random()*20)+1;
   document.querySelector('.message').textContent='Start guessin...';
   document.querySelector('.message').textContent='Current Score ' + score;
   document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
});
