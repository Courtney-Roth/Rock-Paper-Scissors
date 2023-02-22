/* Random Computer Choice Generator */
function getComputerChoice() {
    const a = Math.floor(Math.random() * 3)
    if (a == 0) {
        return "Rock" 
    } 
    else if (a == 1) {
        return "Scissors"
    }
    else if (a == 2) {
        return "Paper"  
    }
}

