document.querySelector('button').addEventListener('click', function() {
    // Code to handle the sign-up process goes here
    alert('You have successfully signed up for the Summer Sprint Challenge!');
});
document.querySelectorAll('.leaderboard tr').forEach(function(row) {
    row.addEventListener('click', function() {
        alert(`You clicked on ${this.cells[1].textContent}'s row!`);
    });
});