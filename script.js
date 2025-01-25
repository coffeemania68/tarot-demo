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

document.addEventListener('DOMContentLoaded', () => { // **Open: DOMContentLoaded event listener (1)**
    const tarotButton = document.querySelector('#main-section button');
    const mainSection = document.getElementById('main-section');
    const tarotSelectionSection = document.getElementById('tarot-selection-section');
    const tarotReadingSection = document.getElementById('tarot-reading-section');
    const spreadButtons = document.querySelectorAll('#tarot-selection-section button'); // Select all spread buttons

    tarotButton.addEventListener('click', () => { // **Open: tarotButton click listener (2)**
        mainSection.classList.add('hidden');
        tarotSelectionSection.classList.remove('hidden');
        tarotReadingSection.classList.add('hidden'); // Initially hide reading section when selection screen is shown
    }); // **Close: tarotButton click listener (2)**

    spreadButtons.forEach(button => { // **Open: spreadButtons.forEach loop (3)**
        button.addEventListener('click', () => { // **Open: spreadButton click listener (4)**
            const selectedSpread = button.dataset.spread;
            tarotSelectionSection.classList.add('hidden');
            tarotReadingSection.classList.remove('hidden');

            console.log('Selected Spread:', selectedSpread);

            if (selectedSpread === 'one-card') { // **Open: if (selectedSpread === 'one-card') block (5)**
                const cardArea = document.getElementById('card-area');
                const interpretationArea = document.getElementById('interpretation-area');
                const cardFaceElement = document.getElementById('card-face');
                const cardBackElement = document.getElementById('card-back');
                const cardFaceImageElement = cardFaceElement.querySelector('img');
                const interpretationTextElement = interpretationArea.querySelector('p');

                const randomIndex = Math.floor(Math.random() * tarotCardsData.length);
                const selectedCardData = tarotCardsData[randomIndex];

                cardFaceImageElement.src = selectedCardData.image;
                cardFaceImageElement.alt = selectedCardData.name + " Tarot Card";
                interpretationTextElement.textContent = selectedCardData.interpretation;

                const readingSectionTitle = tarotReadingSection.querySelector('h2');
                readingSectionTitle.textContent = "원 카드 리딩 (One Card Reading) - " + selectedCardData.name;

              // --- Card Flip Animation ---
                cardBackElement.addEventListener('click', () => { // Add click listener to card back
                    cardBackElement.classList.add('rotate-y-180'); // 카드 뒷면 회전 (이제 주석 해제됨)
                    cardFaceElement.classList.remove('rotate-y-180'); // 카드 앞면 표시 (이제 주석 해제됨)
                }, { once: true }); // 한 번만 실행되도록 설정 (이제 주석 해제됨)
                // --- End Card Flip Animation ---
                
            } // **Close: if (selectedSpread === 'one-card') block (5)**
        }); // **Close: spreadButton click listener (4)**
    }); // **Close: spreadButtons.forEach loop (3)**
}); // **Close: DOMContentLoaded event listener (1)**
