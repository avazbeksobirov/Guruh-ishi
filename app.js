// Guruh bilan

document.getElementById('nextButton').addEventListener('click', () => {
    document.getElementById('cardContainer').scrollBy({
        left: 300, // Adjust as needed
        behavior: 'smooth'
    });
});
document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('cardContainer').scrollBy({
        left: -300, // Scrolls 300px to the right
        behavior: 'smooth'
    });
});
