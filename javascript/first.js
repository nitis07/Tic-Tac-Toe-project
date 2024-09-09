let bgMusic = new Audio("bgmusic.mp3");
let gameOver  = new Audio("gameover.mp3");
let turnMusic = new Audio("turn.mp3");
 let  turn0 = "X";
let count = 0; 
let isgameover = false;

const changeTurn =()=>{
   return turn0 === "X"? "0" : "X"
}

const checkWin  = ()=>{
let buttonText= document.getElementsByClassName("buttonText");
let winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
 ];
  winPatterns.forEach(a => {
   if ((buttonText[a[0]].innerText === buttonText[a[1]].innerText) && (buttonText[a[2]].innerText===buttonText[a[1]].innerText) &&(buttonText[a[0]].innerText !=="")){
      document.querySelector(".info").innerText = buttonText[a[0]].innerText + "Won"
      isgameover = true;
      gameOver.play();
      document.querySelector('.img').getElementsByTagName('img')[0].style.width = '200px';

 }
}) 
};


// game logic
 bgMusic.play()
let buttons = document.getElementsByClassName("btn");
Array.from(buttons).forEach(element =>{
   let buttonText = element.querySelector('.buttonText');
   element.addEventListener('click', ()=>{
       if(buttonText.innerText === ''){
           buttonText.innerText = turn0;
           turn0 = changeTurn();
           turnMusic.play();
           checkWin();
           if (!isgameover) {
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn0;
            
           }
       }
    })
})

reset.addEventListener('click',()=>{
    let resets = document.querySelectorAll('.buttonText');
     Array.from(resets).forEach(element =>{
         element.innerText =""
    });  
       turn0 = "X"; 
      isgameover = false   
   });
