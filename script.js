const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const reset = document.getElementById('reset')
const result = document.querySelector('.result')
const score = document.querySelector('.score')
const outcome = document.querySelector('.outcome')

let playerScore = 0
let computerScore = 0

reset.addEventListener('click', (e) => {
    playerScore = 0
    computerScore = 0
    score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    outcome.innerText = ''
})

rock.addEventListener('click', () => {    
    outcome.innerText = ''
    let computerSelection = computerPlay()
    if (computerSelection === 'scissors') {
        result.innerText = 'You win! Rock beats scissors.'
        playerScore++
    } else if (computerSelection === 'paper') {
        result.innerText = 'You lose! Paper beats rock.'
        computerScore++
    } else {
        result.innerText = "Tie."
    }
    score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    if (playerScore === 5) {
        outcome.innerText = `Congratulations! You won! ${playerScore} - ${computerScore}`
        playerScore = 0
        computerScore = 0
        score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    } else if (computerScore === 5) {
        outcome.innerText = `Oh dear, you lost! ${playerScore} - ${computerScore}`
        playerScore = 0
        computerScore = 0
        score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    } else {
        return
    }
})

scissors.addEventListener('click', () => {    
    outcome.innerText = ''
    let computerSelection = computerPlay()
    if (computerSelection === 'paper') {
        result.innerText = 'You win! Scissors beats paper.'
        playerScore++
    } else if (computerSelection === 'rock') {
        result.innerText = 'You lose! Rock beats scissors.'
        computerScore++
    } else {
        result.innerText = "Tie."
    }
    score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    if (playerScore === 5) {
        outcome.innerText = `Congratulations! You won! ${playerScore} - ${computerScore}`
        playerScore = 0
        computerScore = 0
        score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    } else if (computerScore === 5) {
        outcome.innerText = `Oh dear, you lost! ${playerScore} - ${computerScore}`
        playerScore = 0
        computerScore = 0
        score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    } else {
        return
    }
})

paper.addEventListener('click', () => {    
    outcome.innerText = ''
    let computerSelection = computerPlay()
    if (computerSelection === 'rock') {
        result.innerText = 'You win! Paper beats rock.'
        playerScore++
    } else if (computerSelection === 'scissors') {
        result.innerText = 'You lose! Scissors beats paper.'
        computerScore++
    } else {
        result.innerText = "Tie."
    }
    score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    if (playerScore === 5) {
        outcome.innerText = `Congratulations! You won! ${playerScore} - ${computerScore}`
        playerScore = 0
        computerScore = 0
        score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    } else if (computerScore === 5) {
        outcome.innerText = `Oh dear, you lost! ${playerScore} - ${computerScore}`
        playerScore = 0
        computerScore = 0
        score.innerText = `Player ${playerScore} - Computer ${computerScore}`
    } else {
        return
    }
})

function computerPlay() {
    let computerPrompt = Math.floor(Math.random() * 3)
    if (computerPrompt === 0) {
        computerPrompt = 'rock'
    } else if (computerPrompt === 1) {
        computerPrompt = 'paper'
    } else {
        computerPrompt = 'scissors'
    }
    return computerPrompt
}

// paper.addEventListener('click', playRound())
// scissors.addEventListener('click', playRound())

// function game() {
//     for (let i =0; i < 5; i++) {
//         playRound()
//     }
//     if (playerScore > computerScore) {
//         console.log(`You win by ${playerScore} game(s) to ${computerScore} game(s)`)
//     } else if (computerScore > playerScore) {
//         console.log(`Computer wins by ${computerScore} game(s) to ${playerScore} game(s)`)
//     } else {
//         console.log(`You tied ${playerScore} game(s) to ${computerScore} game(s)`)
//     }
// }

// function playRound() {
//     let computerSelection = computerPlay()
//     if (playerSelection === 'rock') {
//         if (computerSelection === 'scissors') {
//             console.log('You win! Rock beats scissors.')
//             playerScore++
//         } else if (computerSelection === 'paper') {
//             console.log('You lose! Paper beats rock.')
//             computerScore++
//         } else {
//             console.log('Tie!')
//         }
//      } else if (playerSelection === 'scissors') {
//         if (computerSelection === 'paper') {
//             console.log('You win! Scissors beats paper.')
//             playerScore++
//         } else if (computerSelection === 'rock') {
//             console.log('You lose! Rock beats scissors.')
//             computerScore++
//         } else {
//             console.log('Tie!')
//         }
//      } else if (playerSelection === 'paper') {
//         if (computerSelection === 'rock') {
//             console.log('You win! Paper beats rock.')
//             playerScore++
//         } else if (computerSelection === 'scissors') {
//             console.log('You lose! Scissors beats paper.')
//             computerScore++
//         } else {
//             console.log('Tie!')
//         }
//      }

// }



// function playerPrompt() {    
//     do {
//         let question = prompt('Enter your selection')
//         selection = question.toLowerCase()
//     } 
//     while (selection !== 'rock' && selection !== 'scissors' && selection !== 'paper')
//     console.log(selection)
//     return selection
// }