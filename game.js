let score = 0;
let timeLeft = 30;
let timerInterval;

window.onload = function() {
    const username = localStorage.getItem('username') || 'Guest';
    document.getElementById('greeting').innerText = `Welcome, ${username}!`;
    moveBall();
    startTimer();
};

function increaseScore() {
    score++;
    document.getElementById('score').innerText = score;
    moveBall();
}


function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert(`Time's up! Your final score is ${score}.`);
            updateLeaderboard(score);
            returnToMenu();
        }
    }, 1000);
}

function returnToMenu() {
    window.location.href = 'menu.html'; // Redirect to menu
}

function updateLeaderboard(finalScore) {
    const username = localStorage.getItem('username');
    const scores = JSON.parse(localStorage.getItem('scores')) || [];

    const existingEntry = scores.find(entry => entry.name === username);
    if (existingEntry) {
        existingEntry.score = Math.max(existingEntry.score, finalScore);
    } else {
        scores.push({ name: username, score: finalScore });
    }

    scores.sort((a, b) => b.score - a.score);
    if (scores.length > 10) scores.length = 10;

    localStorage.setItem('scores', JSON.stringify(scores));
}
function updateLeaderboard(finalScore) {
  const username = localStorage.getItem('username');
  const scores = JSON.parse(localStorage.getItem('scores')) || [];

  const existingEntry = scores.find(entry => entry.name === username);
  if (existingEntry) {
      existingEntry.score = Math.max(existingEntry.score, finalScore);
  } else {
      scores.push({ name: username, score: finalScore });
  }

  // Sort scores in descending order
  scores.sort((a, b) => b.score - a.score);
  if (scores.length > 10) scores.length = 10; // Keep only top 10 scores

  localStorage.setItem('scores', JSON.stringify(scores)); // Save back to localStorage
}
function moveBall() {
  const ball = document.getElementById('ball');
  const container = document.querySelector('.game-container');

  // Calculate the maximum X and Y positions for the ball
  const maxX = container.clientWidth - ball.clientWidth - 20; // 20px padding from the right
  const maxY = container.clientHeight - ball.clientHeight - 100; // 100px for text padding

  // Generate random positions
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
}

function increaseScore() {
  score++;
  document.getElementById('score').innerText = score;
  moveBall();
}

function setupBallClick() {
  const ball = document.getElementById('ball');

  // Click event for desktop
  ball.onclick = increaseScore;

  // Touch event for mobile
  ball.ontouchend = (event) => {
      event.preventDefault(); // Prevent mouse events on touch
      increaseScore();
  };
}

window.onload = function() {
  const username = localStorage.getItem('username') || 'Guest';
  document.getElementById('greeting').innerText = `Welcome, ${username}!`;
  setupBallClick(); // Set up click/touch events
  moveBall();
  startTimer();
};
function returnToMenu() {
  window.location.href = 'menu.html'; // Redirect to menu
}

// Attach touch and click events to the return button
document.addEventListener("DOMContentLoaded", function() {
  const returnButton = document.querySelector("button[onclick='returnToMenu()']");
  returnButton.addEventListener("click", returnToMenu);
  returnButton.addEventListener("touchend", function(event) {
      event.preventDefault(); // Prevent mouse events on touch
      returnToMenu();
  });
});
