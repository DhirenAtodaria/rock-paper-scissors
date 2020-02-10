// // create the player and the computer moves as variables
// // 1. Get the player move
//     // - prompt, user inputs their move in the browser
// // 2. Get the computer move
//     // - use a random number to select a move from an array
// // 3. Check result
//     // - if the moves are the same, the result is a draw
//     // - paper beats rock
// // 4. Display the result
//     // alert
// // 5. Reset the game (bonus)

// //Extesion:
//     // display the scores to the user after playing the game



// const userMove = () => {
//     return prompt("Please enter your move").toLowerCase();
// }

// const computerMove = () => {
//     let moves = ["rock", "paper", "scissors"];
//     let randomNumber = Math.floor(Math.random() * 3);

//     alert("Computer chose " + moves[randomNumber]);
//     return moves[randomNumber];
// }

// const checkResult = (moveHuman, moveRobot) => {
//     if (moveHuman === moveRobot) {
//         return "draw";
//     } else if ((moveHuman === "rock" && moveRobot === "scissors") || 
//                (moveHuman === "paper" && moveRobot === "rock") ||
//                (moveHuman === "scissors" && moveRobot === "paper"))  {
//         return "Human wins";
//     } else if ((moveRobot === "rock" && moveHuman === "scissors") || 
//                (moveRobot === "paper" && moveHuman === "rock") ||
//                (moveRobot === "scissors" && moveHuman === "paper")) {
//         return "Robot wins";
//     }
// }

// let humanScore = 0;
// let robotScore = 0;

// for (i = 0; i < 100; i++) {    
//     let moveHuman = userMove();
//     let moveRobot = computerMove();
//     let result = checkResult(moveHuman, moveRobot);
//     alert(result);

//     if (result === "Human wins") {
//         humanScore++;
//     } else if (result === "Robot wins") {
//         robotScore++;
//     }
    
//     alert(`Robot is on ${robotScore} points and Human is on ${humanScore}`);

//     let retry = prompt("Do you want to play again?");

//     if (retry === "no") {
//         break;
//     }  else if (retry === "yes") {
//     } 
// }

window.onload = () => {
    let moves = document.querySelectorAll('.inputs div');
    let result = document.querySelector('.answer');
    let scoresQueryHuman = document.querySelector('.scoreH')
    let scoresQueryRobot = document.querySelector('.scoreR')

    const computerMove = () => {
        let theMoves = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * 3);
        return theMoves[randomNumber];
    }

    const checkResult = (moveHuman, moveRobot) => {
        if (moveHuman === moveRobot) {
            return "It's a draw";
        } else if ((moveHuman === "rock" && moveRobot === "scissors") || 
                   (moveHuman === "paper" && moveRobot === "rock") ||
                   (moveHuman === "scissors" && moveRobot === "paper"))  {
            return "The Human wins";
        } else if ((moveRobot === "rock" && moveHuman === "scissors") || 
                   (moveRobot === "paper" && moveHuman === "rock") ||
                   (moveRobot === "scissors" && moveHuman === "paper")) {
            return "The Robot wins";
        }
    }

    let humanScore = 0;
    let robotScore = 0;
    moves.forEach(item => {
            item.addEventListener("click", (event) => {
            moveHuman = event.target.innerHTML.toLowerCase();
            moveRobot = computerMove();
            theResult = checkResult(moveHuman, moveRobot);
            result.innerHTML = `The computer chose ${moveRobot}, ${theResult}`;
            if (theResult === "The Human wins") {
                humanScore++;   
            } else if (theResult === "The Robot wins") {
                robotScore++;
            }
            scoresQueryHuman.innerHTML = humanScore;
            scoresQueryRobot.innerHTML = robotScore;
            })
        }
    )
}

