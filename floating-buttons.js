<script>
document.addEventListener('DOMContentLoaded', function() {
    const floatingContainer = document.querySelector('.floating-container');
    if (floatingContainer) {
        // 버튼을 body 직접 하위로 이동
        document.body.appendChild(floatingContainer);
    }
});
function adjustFloatingPosition() {
    const contentElement = document.querySelector('.post-body.entry-content');
    const floatingContainer = document.querySelector('.floating-container');
    
    if (contentElement && floatingContainer) {
        const contentRect = contentElement.getBoundingClientRect();
        // 컨텐츠의 왼쪽 바깥으로만 이동 (세로 위치는 그대로 유지)
        const leftPosition = contentRect.left - floatingContainer.offsetWidth - 20;
        
        // left 위치만 변경
        floatingContainer.style.left = `${leftPosition}px`;
    }
}

// 페이지 로드 후 실행
setTimeout(adjustFloatingPosition, 1000);

// 화면 크기 변경 시에만 실행
window.addEventListener('resize', adjustFloatingPosition);
</script>