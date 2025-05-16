document.addEventListener('DOMContentLoaded', function() {
    const floatingContainer = document.querySelector('.floating-container');
    if (floatingContainer) {
        document.body.appendChild(floatingContainer);
        floatingContainer.style.left = '-150px';
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

setTimeout(adjustFloatingPosition, 1000);
window.addEventListener('resize', adjustFloatingPosition);
