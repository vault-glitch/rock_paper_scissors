let playerScore = 0
let computerScore = 0

function game() {
    for (let i =0; i < 5; i++) {
        playRound()
    }
    if (playerScore > computerScore) {
        console.log(`You win by ${playerScore} game(s) to ${computerScore} game(s)`)
    } else if (computerScore > playerScore) {
        console.log(`Computer wins by ${computerScore} game(s) to ${playerScore} game(s)`)
    } else {
        console.log(`You tied ${playerScore} game(s) to ${computerScore} game(s)`)
    }
}

function playRound() {
    let computerSelection = computerPlay()
    let playerSelection = playerPrompt()
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log('You win! Rock beats scissors.')
            playerScore++
        } else if (computerSelection === 'paper') {
            console.log('You lose! Paper beats rock.')
            computerScore++
        } else {
            console.log('Tie!')
        }
     } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log('You win! Scissors beats paper.')
            playerScore++
        } else if (computerSelection === 'rock') {
            console.log('You lose! Rock beats scissors.')
            computerScore++
        } else {
            console.log('Tie!')
        }
     } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You win! Paper beats rock.')
            playerScore++
        } else if (computerSelection === 'scissors') {
            console.log('You lose! Scissors beats paper.')
            computerScore++
        } else {
            console.log('Tie!')
        }
     }

}

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

function playerPrompt() {    
    do {
        let question = prompt('Enter your selection')
        selection = question.toLowerCase()
    } 
    while (selection !== 'rock' && selection !== 'scissors' && selection !== 'paper')
    console.log(selection)
    return selection
}