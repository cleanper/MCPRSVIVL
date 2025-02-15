function confirmRobotCheck(isHuman) {
    const robotCheck = document.getElementById('robot-check');
    if (isHuman) {
        robotCheck.style.animation = 'slideOut 0.5s ease forwards';
    } else {
        window.location.href = 'https://www.bing.com';
    }
}

@keyframes slideOut {
    0% {
        bottom: 20px;
        opacity: 1;
    }
    100% {
        bottom: -50px;
        opacity: 0;
    }
}