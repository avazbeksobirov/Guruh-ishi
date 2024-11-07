// Guruh bilan

const cards = Array.from(document.querySelectorAll('.card')); // Barcha kartalarni massivga o‘giramiz
const cardContainer = document.getElementById('cardContainer');
let startIndex = 0; // Boshlang'ich kartani indexi

document.getElementById('nextButton').addEventListener('click', () => {
    // Kartalarni siljitish uchun birinchi kartani olib tashlaymiz
    const firstCard = cards[startIndex];
    
    // O'chish animatsiyasini qo'llaymiz
    firstCard.style.opacity = 0;
    
    setTimeout(() => {
        // Yangi indeksda keyingi kartani o‘rnatamiz
        startIndex = (startIndex + 1) % cards.length;
        
        // Yangi kartani oxiriga qo‘shamiz
        const nextCard = cards[startIndex];
        
        // Ko‘rinishini qayta o‘zgartirish
        firstCard.style.opacity = 1;
        firstCard.remove(); // Birinchi kartani olib tashlaymiz
        cardContainer.append(nextCard); // Keyingi kartani oxiriga qo‘shamiz
    }, 500); // Animatsiya davomiyligi
});
