    let userScore=0;
    let compScore=0;

    const choices=document.querySelectorAll(".choice");
    const msg=document.querySelector("#msg")
    const userScorePara=document.querySelector("#user-score");
    const compScorePara=document.querySelector("#computer-score");


    const genComChoice =()=>{
        const options=["rock","paper","scissors"];
        const randIdx=Math.floor(Math.random () *3);
        return options[randIdx];
    }

    const drawGame=()=>{
        msg.innerText="Barabar Bhayo La";
        msg.style.backgroundColor="#081b31";
    };


    const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            console.log("jitis vai")
            msg.innerText =`la jitis tero  ${userChoice} le sekdiyo ${compChoice} li`;
            msg.style.backgroundColor="GREEN"
        }else{
             compScore++;
            compScorePara.innerText=compScore;
            console.log("haris vai");
            msg.innerText=`haris jatha ${compChoice} le sekdiyo tero  ${userChoice} li`;
            msg.style.backgroundColor="RED"
        }
    }



    const playgame=(userChoice)=>{
        console.log("User Choice=",userChoice);
        const compChoice=genComChoice();
        console.log("computer choice=",compChoice)

        if(userChoice === compChoice){
    drawGame();
    
        }else{
        let userWin=true;
        if(userChoice ==="rock"){
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice ==="paper"){
            userWin=compChoice==="scissors"?false:true;   
        }
        else if(userChoice ==="scissors"){
                userWin=compChoice==="rock"?false:true;   
        };
        showWinner(userWin,userChoice,compChoice);
    };
    };




    choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
    })