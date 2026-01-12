let score = 0;
let time = 30;
let timer;

// Start game when button is clicked
document.getElementById("startBtn").onclick = () => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("hud").classList.remove("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("weapon").classList.remove("hidden");
  startGame();
};

// Start game function
function startGame() {
  moveEnemies();
  timer = setInterval(() => {
    time--;
    document.getElementById("time").innerText = time;
    if (time <= 0) endGame();
  }, 1000);
}

// When player clicks an enemy
function hitEnemy() {
  score++;
  document.getElementById("score").innerText = score;
  moveEnemies();
}

// Move enemies to random positions
function moveEnemies() {
  document.querySelectorAll(".enemy").forEach(enemy => {
    enemy.style.left = Math.random() * 80 + "%";
  });
}

// End game function
function endGame() {
  clearInterval(timer);
  document.getElementById("gameOver").classList.remove("hidden");
  document.getElementById("finalScore").innerText = score;
}

// Restart the game
function restartGame() {
  location.reload();
}
