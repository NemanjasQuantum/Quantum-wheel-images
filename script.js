var content = document.getElementById("wheel");
var spin = document.getElementById("button");
var historybtn = document.getElementById("button2")
const animation = document.querySelector(".reducted");
var i,x = 0;
const array = [i];
var tick = 0;
var cycle = 6*350; //6 spins
var prize = 0;
var bet,bet2 = 1; //CHANGE THIS FOR BET AMOUNT & ON LINE 28
var heart = 3; //NUMBER OF SPINS

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

//makes the wallet amount appear on the div
document.getElementById("wallet").innerHTML = "💗: " + heart;

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

function openWebsite() {
  window.location.href = "https://www.wikibet.com?om=register";
}

spin.onclick = function() { //everything under here initiates when you click SPIN
 // modal.style.display = "block";
  // injects button styles to appear pressed in
 
  spin.style.backgroundColor = "#FF66FF95";
  spin.style.opacity = "0.6";
  spin.style.transform = "translate(0%, 14%)";
  spin.style.pointerEvents = "none";

  document.getElementById("text").innerHTML = ""; //removes won amount on SLOT window after click

  //updates the total wallet amount
  bet=1;
  heart=heart-bet;
  document.getElementById("wallet").innerHTML = "💗: "+heart;

  //makes the deduct amount visible & initiates the animation
  animation.style.visibility="visible";
  animation.innerHTML = "-"+bet;
  animation.classList.add('animate__animated', 'animate__fadeOutUp');
  //console.log("Has won"+ heart);
  //random int injected into the rotation for random spins
  if(heart>0){
    tick++;
    cycles = Math.ceil(Math.random() * 350) + (cycle*tick); //random spin plus normal spins
    content.style.transform = "rotate(" + cycles + "deg)"; //rotate the wheel
    prize = Math.ceil((cycles % 360) / 45); //divides the wheel to determine prize | gives a value 1-8
    //console.log("Prize "+ prize);
  }
  else{
    MustWin();
  }

};

function MustWin(){
  tick++;
  var validPrizes = [2, 4, 6, 8];
  do {
    cycles = Math.ceil(Math.random() * 350) + cycle * tick; // random spin plus normal spins
    content.style.transform = "rotate(" + cycles + "deg)"; // rotate the wheel
    prize = Math.ceil((cycles % 360) / 45); // divides the wheel to determine prize | gives a value 1-8
  } while (!validPrizes.includes(prize));
  
 // console.log("Prize:", prize);
}

content.ontransitionend = function(){ //everything under here initiates when the wheel stops spinning

  //prize value determines the won amount & calculates the wallet amount
  //prize value 1-8 are the wheel slices where 1 is red, 2 is purple and so on..
  switch (prize) {
    case 2:
    case 4:
    case 6:
    case 8:
      modal.style.display = "block";
      break;
  }



  //deduction animation dissapears
  animation.classList.remove('animate__animated', 'animate__fadeOutUp');
  animation.style.visibility="hidden";

  //injects button styles in css to make button appear available again
  spin.style.boxShadow = "0 5px 1.5px #999";
  spin.style.opacity = "1";
  spin.style.backgroundColor = "#FF66FF";
  spin.style.transform = "translate(0%, 0%)";
  spin.style.pointerEvents = "auto";

 
  //injects the array into html
 

  //If there are not enough money on the wallet, it disables the button
  if(heart<bet2){
  spin.style.pointerEvents = "none";
  spin.style.opacity = "0.4";
  }
};

//button to toggle history window
function toggle(){ //initiates when you click the history btn
  var x = document.getElementById("history");
  x.classList.toggle("hide");
};