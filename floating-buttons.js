document.addEventListener('DOMContentLoaded', function() {
    const floatingContainer = document.querySelector('.floating-container');
    if (floatingContainer) {
        document.body.appendChild(floatingContainer);
        floatingContainer.style.position = 'absolute';  // fixed를 absolute로 변경
        document.body.style.overflowX = 'visible';
        document.documentElement.style.overflowX = 'visible';
    }
});

function adjustFloatingPosition() {
    const contentElement = document.querySelector('.post-body.entry-content');
    const floatingContainer = document.querySelector('.floating-container');
    
    if (contentElement && floatingContainer) {
        const contentRect = contentElement.getBoundingClientRect();
        const leftPosition = contentRect.left - floatingContainer.offsetWidth - 20;
        floatingContainer.style.left = `${leftPosition}px`;
    }
}

// 페이지 로드 후 한 번만 실행
setTimeout(adjustFloatingPosition, 1000);

// 화면 크기 변경 시에만 실행
window.addEventListener('resize', adjustFloatingPosition);