// 플로팅 버튼 HTML
const floatingButtons = {
    init: function(config) {
        // 기존 버튼이 있다면 제거
        const existingContainer = document.querySelector('.floating-container');
        if (existingContainer) {
            existingContainer.remove();
        }

        // config div에서 설정 읽기 (티스토리용)
        const configDiv = document.querySelector('.floating-config');
        if (configDiv) {
            const topConfig = configDiv.querySelector('[data-top-title]');
            const bottomConfig = configDiv.querySelector('[data-bottom-title]');
            
            if (topConfig && bottomConfig) {
                config = {
                    topButton: {
                        title: topConfig.getAttribute('data-top-title'),
                        link: topConfig.getAttribute('data-top-link')
                    },
                    bottomButton: {
                        title: bottomConfig.getAttribute('data-bottom-title'),
                        link: bottomConfig.getAttribute('data-bottom-link')
                    }
                };
            }
        }

        // HTML 생성
        const container = document.createElement("div");
        container.className = "floating-container";
        
        // 테두리 네온 색상 설정 (보라색)
        const borderColor = config.borderColor || '#9900FF';
        container.style.setProperty('--border-color', borderColor);
        
        // 중간 분리선 추가
        const divider = document.createElement("div");
        divider.className = "divider";
        container.appendChild(divider);
        
        // 상단 버튼 (보색 네온 효과)
        const topButton = document.createElement("div");
        topButton.className = "floating-button top";
        
        // 상단 버튼 색상 설정 (빨간색-파란색)
        const topColor1 = config.topButton?.color1 || '#FF0000';
        const topColor2 = config.topButton?.color2 || '#0000FF';
        topButton.style.setProperty('--color1', topColor1);
        topButton.style.setProperty('--color2', topColor2);
        
        topButton.innerHTML = `
            <span>${config.topButton.title || '첫 번째'}</span>
        `;
        
        // 클릭 이벤트 (링크 또는 onClick)
        if (config.topButton.link) {
            topButton.addEventListener('click', function() {
                window.open(config.topButton.link, '_blank');
            });
        } else if (config.topButton.onClick) {
            topButton.addEventListener('click', config.topButton.onClick);
        }

        // 하단 버튼 (그라데이션)
        const bottomButton = document.createElement("div");
        bottomButton.className = "floating-button bottom";
        bottomButton.style.setProperty('--color1', config.bottomButton.color1 || '#FF4081');
        bottomButton.style.setProperty('--color2', config.bottomButton.color2 || '#E91E63');
        bottomButton.innerHTML = `
            <span>${config.bottomButton.title || '두 번째'}</span>
        `;
        
        // 클릭 이벤트 (링크 또는 onClick)
        if (config.bottomButton.link) {
            bottomButton.addEventListener('click', function() {
                window.open(config.bottomButton.link, '_blank');
            });
        } else if (config.bottomButton.onClick) {
            bottomButton.addEventListener('click', config.bottomButton.onClick);
        }

        // 컨테이너에 버튼 추가
        container.appendChild(topButton);
        container.appendChild(bottomButton);

        // body에 추가
        document.body.appendChild(container);

        // 스크롤 따라 움직이기
        window.addEventListener('scroll', function() {
            const container = document.querySelector('.floating-container');
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // top 대신 transform 사용
            container.style.transform = `translateY(${scrollY}px)`;
        });
    }
};

// DOM 로드 후 자동 실행 (config div가 있는 경우)
document.addEventListener('DOMContentLoaded', function() {
    const configDiv = document.querySelector('.floating-config');
    if (configDiv) {
        floatingButtons.init({});
    }
});

// 전역 객체로 내보내기
window.FloatingButtons = floatingButtons;