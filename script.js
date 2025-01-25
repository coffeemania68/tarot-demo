document.addEventListener('DOMContentLoaded', () => {
    const tarotButton = document.querySelector('#main-section button');
    const mainSection = document.getElementById('main-section');
    const tarotSelectionSection = document.getElementById('tarot-selection-section');

    tarotButton.addEventListener('click', () => {
        mainSection.classList.add('hidden'); // 메인 화면 숨기기
        tarotSelectionSection.classList.remove('hidden'); // 타로 카드 선택 화면 보이기
    });
});
