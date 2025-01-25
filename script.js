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

   spreadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedSpread = button.dataset.spread;
        tarotSelectionSection.classList.add('hidden');
        tarotReadingSection.classList.remove('hidden');

        console.log('Selected Spread:', selectedSpread);

        if (selectedSpread === 'one-card') { // Check if One Card Draw is selected
            const cardArea = document.getElementById('card-area');
            const interpretationArea = document.getElementById('interpretation-area');
            const cardImageElement = cardArea.querySelector('img'); // Get the <img> tag inside card-area
            const interpretationTextElement = interpretationArea.querySelector('p'); // Get the <p> tag inside interpretation-area

            const selectedCardData = tarotCardsData[0]; // For now, always pick the FIRST card in tarotCardsData (The Fool)

            cardImageElement.src = selectedCardData.image; // Set the image source
            cardImageElement.alt = selectedCardData.name + " Tarot Card"; // Set alt text
            interpretationTextElement.textContent = selectedCardData.interpretation; // Set interpretation text

            // Update section title to "원 카드 리딩 (One Card Reading)" (optional, but good for clarity)
            const readingSectionTitle = tarotReadingSection.querySelector('h2');
            readingSectionTitle.textContent = "원 카드 리딩 (One Card Reading) - " + selectedCardData.name;
        }
    });
 });
});
