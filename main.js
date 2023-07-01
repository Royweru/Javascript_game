let playgame = confirm("Wanna play rock,paper scissors!! CLICK OK AND LETS GO!!");
if(playgame){
   
    let playerChoice = prompt("please enter your playerchoice: rock,paper or scissors "); 
    
     if(playerChoice){
        let playerone = playerChoice.trim().toLowerCase();
        if (playerone==="rock" || playerone==="scissors"
        || playerone==="paper"){

            let computerChoice= Math.floor(Math.random()*3+1); 
            
            let computer = computerChoice===1 ? "rock"
            
            :computerChoice === 2? "paper"
            
            :"scissors"
            
            let  result = playerone === computer 
            ?"Tie game!"

            :playerone === "rock" && computer === "paper"?
              "computer wins!!" 

            :playerone === "scissors" && computer === "rock"?
             "computer wins!"

            :playerone === "paper" && computer === "scissors"?
             "computer wins!"
            
            :"playerone wins!";
            alert(result)
         }
        else{alert("hey there you forgot to enter your choice")}
      
     }
     else{alert("it seems like you changed your mind maybe next time")}
    
    
    
}

else{alert("ok thanks next time")}