const tarotCardsData = [
    {
        name: "The Fool",
        image: "images/tarot-cards/the-fool.jpg",
        interpretation: "새로운 시작, 순수함, 가능성, 모험, 예측 불가능성. 긍정적인 변화의 시작을 의미합니다."
    },
    // We'll add more card data later...
];

document.addEventListener('DOMContentLoaded', () => {
    const tarotButton = document.querySelector('#main-section button');
    const mainSection = document.getElementById('main-section');
    const tarotSelectionSection = document.getElementById('tarot-selection-section');
    const tarotReadingSection = document.getElementById('tarot-reading-section');
    const spreadButtons = document.querySelectorAll('#tarot-selection-section button'); // Select all spread buttons

    tarotButton.addEventListener('click', () => {
        mainSection.classList.add('hidden');
        tarotSelectionSection.classList.remove('hidden');
        tarotReadingSection.classList.add('hidden'); // Initially hide reading section when selection screen is shown
    });

    spreadButtons.forEach(button => { // Loop through each spread button
        button.addEventListener('click', () => {
            const selectedSpread = button.dataset.spread; // Get the selected spread type from data-spread attribute
            tarotSelectionSection.classList.add('hidden'); // Hide selection screen
            tarotReadingSection.classList.remove('hidden'); // Show reading screen

            // For now, let's just log the selected spread to the console.
            // We will use this 'selectedSpread' variable later to load the correct tarot reading layout.
            console.log('Selected Spread:', selectedSpread);

            // You can add more code here to:
            // 1. Display the Tarot Reading Screen based on 'selectedSpread'
            // 2. Load card images and interpretation texts for the selected spread
            // 3. Implement card drawing and placement logic
        });
    });
});
