let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("users");
const compScore_span=document.getElementById("comps");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result");
const result_h2=document.getElementById("msg");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");



function game(userChoice)
{
	const computerChoice=getComputer();
	switch(userChoice+computerChoice)
	{
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			loose(userChoice,computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break;
	}
 }
 function toString(letter)
 {
 	if(letter==="r") return "Rock";
 	if(letter==="p") return "Paper";
 	 return "Scissor";

 }
function win(userChoice,computerChoice)
{
	userScore++;
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_h2.innerHTML=toString(userChoice)+" beats "+toString(computerChoice)+" you win";
	document.getElementById(userChoice).classList.add("green-glow");
	setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow")},500);
}
function loose(userChoice,computerChoice)
{
	compScore++;
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_h2.innerHTML=toString(userChoice)+" looses to "+toString(computerChoice)+" you loose";	
	document.getElementById(userChoice).classList.add("red-glow");
	setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow")},500);


}
function draw(userChoice,computerChoice)
{
	result_h2.innerHTML=toString(userChoice)+" equals to "+ toString(computerChoice)+" its draw";
	document.getElementById(userChoice).classList.add("gray-glow");
	setTimeout(function(){document.getElementById(userChoice).classList.remove("gray-glow")},500);

}
 



 function getComputer()
 {
 	const choices=['r','p','s'];
 	const getRandom =Math.floor(Math.random()*3);
 	return choices[getRandom];
 }

function main()
{
rock_div.addEventListener('click',function() {
 game('r');
 
})
paper_div.addEventListener('click',function() {
 game('p');

})
scissor_div.addEventListener('click',function() {
 game('s');

})
}
main();
















