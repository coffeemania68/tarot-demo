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
    const spreadButtons = document.querySelectorAll('#tarot-selection-section button');

    // 카드 초기 상태 설정 함수
    function resetCardState() {
        const cardBackElement = document.getElementById('card-back');
        const cardFaceElement = document.getElementById('card-face');

        cardBackElement.classList.remove('rotate-y-180'); // 카드 뒷면 초기화 (원래대로)
        cardFaceElement.classList.add('rotate-y-180');    // 카드 앞면 숨김 (원래대로)
    }

    tarotButton.addEventListener('click', () => {
        mainSection.classList.add('hidden');
        tarotSelectionSection.classList.remove('hidden');
        tarotReadingSection.classList.add('hidden');

        // 메인 화면에서 타로 카드 선택 화면으로 넘어갈 때 카드 상태 초기화 (추가)
        resetCardState();
    });

    spreadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedSpread = button.dataset.spread;
            tarotSelectionSection.classList.add('hidden');
            tarotReadingSection.classList.remove('hidden');

            if (selectedSpread === 'one-card') {
                const cardArea = document.getElementById('card-area');
                const interpretationArea = document.getElementById('interpretation-area');
                const cardFaceElement = document.getElementById('card-face');
                const cardBackElement = document.getElementById('card-back');
                const cardFaceImageElement = cardFaceElement.querySelector('img');
                const interpretationTextElement = interpretationArea.querySelector('p');

                // 원 카드 리딩 화면으로 전환될 때마다 카드 상태 초기화 (추가 - 중요!)
                resetCardState();

                const randomIndex = Math.floor(Math.random() * tarotCardsData.length);
                const selectedCardData = tarotCardsData[randomIndex];

                cardFaceImageElement.src = selectedCardData.image;
                cardFaceImageElement.alt = selectedCardData.name + " Tarot Card";
                interpretationTextElement.textContent = selectedCardData.interpretation;

                const readingSectionTitle = tarotReadingSection.querySelector('h2');
                readingSectionTitle.textContent = "원 카드 리딩 (One Card Reading) - " + selectedCardData.name;

                // 카드 뒤집기 이벤트 리스너 (수정: 함수 이름 명확하게, 이벤트 리스너 제거 방식 변경)
                function flipCardOnce() {
                    cardBackElement.classList.add('rotate-y-180');
                    cardFaceElement.classList.remove('rotate-y-180');

                    // 이벤트 리스너 제거 (수정: flipCardOnce 함수 자체를 제거)
                    cardBackElement.removeEventListener('click', flipCardOnce);
                }

                cardBackElement.addEventListener('click', flipCardOnce, { once: true }); // <-- ✅ 이 줄이 **최종적으로 남아야 하는 코드**입니다!
            }
        });
    });
});
