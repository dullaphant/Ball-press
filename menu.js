function startGame() {
    const username = document.getElementById('username').value.trim();
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    localStorage.setItem('username', username); // Store username
    window.location.href = 'game.html'; // Navigate to game
}

function viewLeaderboard() {
    window.location.href = 'leaderboard.html'; // Navigate to leaderboard
}

// Attach touch and click events to buttons
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector("button[onclick='startGame()']");
    const leaderboardButton = document.querySelector("button[onclick='viewLeaderboard()']");

    startButton.addEventListener("click", startGame);
    startButton.addEventListener("touchend", function(event) {
        event.preventDefault(); // Prevent mouse events on touch
        startGame();
    });

    leaderboardButton.addEventListener("click", viewLeaderboard);
    leaderboardButton.addEventListener("touchend", function(event) {
        event.preventDefault(); // Prevent mouse events on touch
        viewLeaderboard();
    });
});
