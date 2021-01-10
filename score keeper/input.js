const p1Button = document.getElementById('p1Button');
const p2Button = document.getElementById('p2Button');
const p1Display = document.getElementById('p1Display');
const p2Display = document.getElementById('p2Display');
const winnerScoreSelect = document.getElementById('playto');
const resetButton = document.getElementById('reset');


let p1Score = 0;
let winningScore = 3;
let isGameOver = false;
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');

        }
        p1Display.textContent = p1Score;
    }
})
let p2Score = 0;
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
})



winnerScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('loser', 'winner');

}