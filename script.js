const tarotCardsData = [
    {
        name: "The Fool",
        image: "images/tarot-cards/the-fool.jpg",
        interpretation: "새로운 시작, 순수함, 가능성, 모험, 예측 불가능성. 긍정적인 변화의 시작을 의미합니다."
    },
    {
        name: "The Magician",
        image: "images/tarot-cards/the-magician.jpg",
        interpretation: "능력, 의지력, 창의력, 기술, 숙련. 당신의 잠재력을 발휘하고 목표를 이룰 수 있는 능력이 충분합니다."
    },
    {
        name: "The High Priestess",
        image: "images/tarot-cards/the-high-priestess.jpg",
        interpretation: "직관력, 통찰력, 비밀, 숨겨진 지식, 내면의 목소리.  당신의 직관을 믿고 내면의 지혜에 귀 기울이세요."
    },
    {
        name: "The Emperor",
        image: "images/tarot-cards/the-emperor.jpg",
        interpretation: "권위, 통제력, 책임감, 안정, 질서, 구조.  리더십을 발휘하고 현실적인 문제 해결 능력이 뛰어납니다."
    },
    {
        name: "The Lovers",
        image: "images/tarot-cards/the-lovers.jpg",
        interpretation: "사랑, 조화, 관계, 선택, 파트너십, 가치관의 일치. 중요한 결정을 내려야 할 시기이며, 사랑과 관계에 집중하세요."
    },
    // We can add even more cards later!
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
                const cardFaceElement = document.getElementById('card-face'); // Get card-face element
                const cardBackElement = document.getElementById('card-back');   // Get card-back element
                const cardFaceImageElement = cardFaceElement.querySelector('img'); // Image inside card-face
                const interpretationTextElement = interpretationArea.querySelector('p');

                const randomIndex = Math.floor(Math.random() * tarotCardsData.length);
                const selectedCardData = tarotCardsData[randomIndex];

                cardFaceImageElement.src = selectedCardData.image; // Set card face image source
                cardFaceImageElement.alt = selectedCardData.name + " Tarot Card";
                interpretationTextElement.textContent = selectedCardData.interpretation;

                const readingSectionTitle = tarotReadingSection.querySelector('h2');
                readingSectionTitle.textContent = "원 카드 리딩 (One Card Reading) - " + selectedCardData.name;

                console.log("Adding click listener to cardBackElement:", cardBackElement); // <-- ADD THIS LINE

                // --- Card Flip Animation ---
                cardBackElement.addEventListener('click', () => { // Add click listener to card back
                    cardBackElement.classList.add('rotate-y-180'); // Rotate card back away
                    cardFaceElement.classList.remove('rotate-y-180'); // Rotate card face forward
                }, { once: true }); // 'once: true' option to make the listener execute only once
                // --- End Card Flip Animation ---
            }
        });
    });
});
