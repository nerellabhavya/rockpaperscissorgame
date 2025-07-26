let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];
};
const drawgame=()=>{
    msg.innerText="game draw play again!";
    msg.style.color="white";
    msg.style.backgroundColor="black";
}
const showwin=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
    userscorepara.innerText=userScore;
msg.innerText=`you win! your ${userchoice} beats computer ${compchoice}`;
msg.style.backgroundColor="green";}
else{
    compScore++;
    compscorepara.innerText=compScore;
msg.innerText=`computer win! computer ${userchoice} beats your ${compchoice}`;
msg.style.backgroundColor="red";}
};
const playgame=(userchoice)=>{
    console.log("user choice",userchoice);
    const compchoice=gencompchoice();
        console.log("comp choice",compchoice);
if(userchoice===compchoice){
    drawgame();
}else {
let userwin=true;
if(userchoice==="rock"){
    userwin=compchoice==="paper"?false:true;
}
else if(userchoice==="paper"){
   userwin= compchoice==="scissor"?false:true;
}
else {
    userwin=compchoice==="rock"?false:true;
}
showwin(userwin,userchoice,compchoice);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
const id=choice.getAttribute("id");
playgame(id);
    });
});