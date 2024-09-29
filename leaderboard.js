window.onload = function() {
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  const scoreList = document.getElementById('scoreList');

  scores.sort((a, b) => b.score - a.score).forEach((entry, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${index + 1}</td>
          <td>${entry.name}</td>
          <td>${entry.score}</td>
      `;
      scoreList.appendChild(row);
  });
};

function returnToMenu() {
  window.location.href = 'menu.html'; // Redirect to menu
}
