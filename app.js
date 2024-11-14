// Guruh bilan

document.getElementById('nextButton').addEventListener('click', () => {
    document.getElementById('cardContainer').scrollBy({
        left: 330,
        behavior: 'smooth'
    });
});
document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('cardContainer').scrollBy({
        left: -340, 
        behavior: 'smooth'
    });
});

