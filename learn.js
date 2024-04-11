let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game Draw";
    msg.style.backgroundColor="darkslategray";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
    msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

};

const playGame =(userChoice)=>{
    console.log("user choice= ",userChoice);
    let compChoice= genCompChoice();
    console.log("comp choice= ",compChoice);

    if(userChoice === compChoice){

drawGame();
    } else{
        let userWin= true;
        if(userChoice==="rock"){
          userWin =  compChoice==="paper" ? false : true;
        } else if(userChoice==="paper"){
         userWin=   compChoice==="scissors" ? false : true;
        } else{
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};

choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
  playGame(userChoice);
    });
});